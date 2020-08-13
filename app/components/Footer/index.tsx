import styled from 'styles/styled-components';

const Footer = styled.footer`
  display: flex;
  background: ${props => props.theme.footerBackground};
  > h2 {
    margin: 1rem auto;
  }
`;

export default Footer;
