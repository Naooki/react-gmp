import * as styledComponents from 'styled-components';

// theme.ts
// your theme variables
export interface IThemeInterface {
  text: string;
  primary: string;
  componentBackground: string;
  componentBackgroundSecondary: string;
  componentBackgroundHover: string;
}

export const theme = {
  default: {
    text: '#fff',
    primary: '#f65261',
    componentBackground: '#424242',
    componentBackgroundSecondary: '#555',
    componentBackgroundHover: '#232323',
  },
};
const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  IThemeInterface
>;

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;
