import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

import {
  Button,
  ButtonText,
  Container,
  Search
} from '@/components/StyledComponents/StyledSearchbar'
import { setCurrentPage } from '@/redux/actions/pokemonActions'
import {
  getPokemonByName,
  getPokemons
} from '@/redux/actions/pokemonAsyncActions'
import { useAppDispatch } from '@/redux/hooks'

export default function Searchbar() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [name, setName] = useState('')

  const handleSearch = () => {
    if (!name) {
      toast.error('Please enter a pokémon name', {
        position: 'top-center'
      })

      return
    }
    dispatch(getPokemonByName(name))
    dispatch(setCurrentPage(1))
    navigate('/pokemon')
    setName('')
  }

  const handleChange = (nameToSearch: string) => {
    setName(nameToSearch)
  }

  const handleKeyDown = (key: string) => {
    if (key === 'Enter') handleSearch()
  }

  const handleClick = () => {
    dispatch(setCurrentPage(1))
    dispatch(getPokemons())
    navigate('/pokemon')
  }

  const handleNavigate = () => {
    navigate('/create')
  }

  return (
    <Container>
      <Button type="button" onClick={handleNavigate}>
        <ButtonText>Create Pokémon</ButtonText>
      </Button>
      <Button type="button" onClick={handleClick}>
        <ButtonText>All Pokémons</ButtonText>
      </Button>
      <Search
        placeholder="Search pokémon"
        type="text"
        value={name}
        onChange={(e) => handleChange(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e.key)}
      />
    </Container>
  )
}