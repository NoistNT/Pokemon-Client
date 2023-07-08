import styled from 'styled-components'

export const CardContainer = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  width: 20rem;
  background-color: var(--card-hover-bg);
  color: var(--text-color);
  padding: 1rem;
  margin: 1.5rem auto;
  border-radius: 1rem;
  box-shadow: 0 2px 4px var(--card-shadow);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease;
    box-shadow: 0 10px 20px var(--card-hover-shadow);
    transform: translateY(-0.4rem);
    background-color: var(--card-hover-bg);
  }
`

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-color);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`

export const Image = styled.img`
  width: 18rem;
  height: 18rem;
  margin-bottom: 1.5rem;
  -webkit-box-reflect: below 1px
    linear-gradient(transparent, rgba(0, 0, 0, 0.1));
`

export const Name = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--text-color);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`

export const Attribute = styled.span`
  font-weight: 600;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`

export const Item = styled.p`
  margin: 0.5rem;
  font-size: 1.07rem;
  color: #fcfcfc;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`

export const Highlight = styled.p`
  margin: 0.5rem;
  font-size: 1.07rem;
  background-color: rgb(255, 255, 255, 0.2);
  border-radius: 0.45rem;
  color: #fcfcfc;
  padding: 0.25rem 0.5rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`
