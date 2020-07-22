import styled from 'styled-components'

export const ButtonContainer = styled.button `
  text-transform: capitalize;
  font-size: 1rem;
  background: transparent;
  border: none;
  border-color: none;
  color: ${prop => (prop.cart ? "var(--mainYellow)" : "var(--mainGrey)")}; 
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  margin: 0.2 rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
      
      color: var(--mainGrey);
  &:focus {
      outline: none;
    }
  } 
`;
