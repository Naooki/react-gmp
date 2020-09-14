import * as styledComponents from 'styled-components';

// theme.ts
// your theme variables
export interface IThemeInterface {
  text: string;
  primary: string;
  componentBackground: string;
  componentBackgroundSecondary: string;
  footerBackground: string;
  pageBackground: string;
}

export const theme = {
  default: {
    text: '#fff',
    primary: '#f65261',
    componentBackground: '#232323',
    componentBackgroundSecondary: 'rgba(85,85,85,0.8)',
    footerBackground: '#424242',
    pageBackground: '#555',
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
