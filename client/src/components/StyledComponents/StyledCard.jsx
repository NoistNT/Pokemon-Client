import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 20rem;
  border-radius: 1rem;
  background-color: var(--card-bg);
  box-shadow: 0 2px 4px var(--card-shadow);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 14px 28px var(--card-hover-shadow),
      0 10px 10px var(--card-hover-shadow);
    background-color: var(--card-hover-bg);
    transform: translateY(-0.4rem);
    transition: all 0.3s ease;
  }
`

export const Image = styled.img`
  border-radius: 0.5rem;
  max-width: 100%;
  height: auto;
`

export const Name = styled.h2`
  text-align: center;
  font-size: 1.7rem;
  color: var(--text-color);
  text-shadow: 1px 0px 8px #272727;

  &:hover {
    color: var(--link-hover-color);
  }
`

export const TypesContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const Types = styled.span`
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.95rem;
  background-color: var(--types-bg-color);
  color: var(--text-color);
`
