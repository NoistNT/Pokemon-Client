import styled from 'styled-components'

export const CardsContainer = styled.div`
  display: grid;
  place-items: center;
  /* grid-gap: 3rem; */
  margin: 0 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1921px) {
    grid-template-columns: repeat(5, 1fr);
  }
`
