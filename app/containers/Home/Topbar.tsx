import styled from 'styles/styled-components';
import img from 'assets/images/movie-colloage.jpg';

enum Darkening {
  Default = 0.7,
  High = 0.9,
}

const Topbar = styled.section`
  padding: 1rem 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(
      rgba(0, 0, 0, ${Darkening.Default}),
      rgba(0, 0, 0, ${Darkening.Default})
    ),
    url(${img});

  &.dark {
    background: linear-gradient(
        rgba(0, 0, 0, ${Darkening.High}),
        rgba(0, 0, 0, ${Darkening.High})
      ),
      url(${img});
  }
`;

export default Topbar;
