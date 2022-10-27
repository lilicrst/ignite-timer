import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 70rem;
  height: 46.25rem; /* calc(100vh - 10rem) */
  margin: 5rem auto;
  padding: 2.5rem;

  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`
