import { createSlice } from '@reduxjs/toolkit';

import {
  cleanDetail,
  emptyPokemon,
  emptyType,
  filterPokemons,
  sortPokemons,
} from '@/helpers/helpers';
import {
  getPokemonById,
  getPokemonByName,
  getPokemons,
  postPokemon,
  removePokemon,
} from '@/redux/actions/pokemon-async-actions';
import type { PokemonInitialState, PokemonTypes, SortOptions, Source } from '@/types/types';

const initialState: PokemonInitialState = {
  allPokemons: [],
  pokemons: [],
  pokemon: { ...emptyPokemon, type: [emptyType] },
  types: [],
  isLoading: true,
  error: null,
  currentPage: 1,
  typeFilter: 'all',
  sourceFilter: 'all',
  sortOption: 'asc',
};

export const pokemonsReducer = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setCurrentPage(state, { payload }: { payload: number }) {
      state.currentPage = payload;
    },
    setSource(state, { payload }: { payload: Source }) {
      state.pokemons = filterPokemons(state.allPokemons, {
        type: state.typeFilter,
        source: payload,
        sortOption: state.sortOption,
      });
      state.sourceFilter = payload;
    },
    setSort(state, { payload }: { payload: SortOptions }) {
      state.pokemons = filterPokemons(state.allPokemons, {
        type: state.typeFilter,
        source: state.sourceFilter,
        sortOption: payload,
      });
      state.sortOption = payload;
    },
    setType(state, { payload }: { payload: PokemonTypes }) {
      state.pokemons = filterPokemons(state.allPokemons, {
        type: payload,
        source: state.sourceFilter,
        sortOption: state.sortOption,
      });
      state.typeFilter = payload;
    },
    cleanDetail(state) {
      state.pokemon = cleanDetail();
    },
    resetFilters(state) {
      state.pokemons = sortPokemons(state.allPokemons, 'asc');
      state.typeFilter = 'all';
      state.sourceFilter = 'all';
      state.sortOption = 'asc';
    },
  },
  extraReducers(builder) {
    builder
      // POST POKEMONS
      .addCase(postPokemon.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(postPokemon.fulfilled, (state) => {
        state.isLoading = false;
        state.allPokemons = [...state.pokemons];
        state.error = null;
      })
      .addCase(postPokemon.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error;
      })

      // GET POKEMONS
      .addCase(getPokemons.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getPokemons.fulfilled, (state, { payload }) => {
        const sorted = filterPokemons(payload, {
          type: state.typeFilter,
          source: state.sourceFilter,
          sortOption: state.sortOption,
        });

        state.isLoading = false;
        state.allPokemons = sortPokemons(payload, state.sortOption);
        state.pokemons = sorted;
        state.error = null;
      })
      .addCase(getPokemons.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error;
      })

      // GET POKEMON BY ID
      .addCase(getPokemonById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getPokemonById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.pokemon = payload;
        state.error = null;
      })
      .addCase(getPokemonById.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error;
      })

      // GET POKEMON BY NAME
      .addCase(getPokemonByName.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getPokemonByName.fulfilled, (state, { payload }) => {
        if (!payload.length) return;
        state.isLoading = false;
        state.pokemons = payload;
        state.pokemon = payload[0];
        state.error = null;
      })
      .addCase(getPokemonByName.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error;
      })

      // REMOVE POKEMON
      .addCase(removePokemon.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(removePokemon.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(removePokemon.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error;
      });
  },
});

export default pokemonsReducer.reducer;
