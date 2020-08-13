import styled from 'styles/styled-components';
import img from 'assets/images/movie-colloage.jpg';

const Topbar = styled.section`
  padding: 1rem 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${img});
`;

export default Topbar;
