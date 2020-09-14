import styled from 'styles/styled-components';

const SearchInput = styled.input.attrs(props => ({
  type: 'text',
  placeholder: props.placeholder,
}))`
  padding-left: 1rem;
  color: ${props => props.theme.text};
  border: none;
  background: ${props => props.theme.componentBackground};
  border: 2px solid transparent;
  border-radius: 4px;
  &:focus {
    outline: none;
    border: 2px solid ${props => props.theme.primary};
  }
`;

export default SearchInput;
