import styled from 'styles/styled-components';
import { darken, transparentize } from 'polished';

export enum ButtonVariant {
  Default = 'default',
  Contained = 'contained',
  Outlined = 'outlined',
  Disabled = 'disabled',
}

const disabledFontColor = 'rgba(255, 255, 255, 0.3)';
const disabledBackgroundColor = 'rgba(255, 255, 255, 0.12)';

const Button = styled.button`
  padding: 0.5rem;
  border: 2px solid transparent;
  border-radius: 4px;
  color: ${props => props.theme.primary};
  background: transparent;
  text-transform: uppercase;
  cursor: pointer;
  &:hover,
  &:focus {
    outline: none;
    color: ${props => darken(0.05, props.theme.primary)};
    background: ${props => transparentize(0.7, props.theme.primary)};
  }

  &.${ButtonVariant.Contained} {
    color: ${props => props.theme.text};
    background: ${props => props.theme.primary};
    &:hover,
    &:focus {
      background: ${props => darken(0.05, props.theme.primary)};
    }
  }

  &.${ButtonVariant.Outlined} {
    color: ${props => props.theme.primary};
    border-color: ${props => props.theme.primary};
    &:hover,
    &:focus {
      color: ${props => darken(0.05, props.theme.primary)};
      border-color: ${props => darken(0.05, props.theme.primary)};
      background: ${props => transparentize(0.95, props.theme.primary)};
    }
  }

  &.${ButtonVariant.Disabled} {
    color: ${disabledFontColor};
    background: ${disabledBackgroundColor};
    cursor: auto;
    &:hover,
    &:focus {
      color: ${disabledFontColor};
      background: ${disabledBackgroundColor};
    }
  }
`;

export default Button;
