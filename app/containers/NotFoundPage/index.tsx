import * as React from 'react';
import styled from 'styles/styled-components';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';

import Logo from 'components/Logo';
import Footer from 'components/Footer';
import Button, { ButtonVariant } from 'components/Button';

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  & > header {
    position: absolute;
    padding: 1rem 2rem;
  }

  & > main {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.componentBackground};
  }
`;

function NotFoundPage() {
  const dispatch = useDispatch();

  const onGoBackClick = React.useCallback(
    () => dispatch(push({ pathname: '/' })),
    [dispatch],
  );

  return (
    <Wrapper>
      <header>
        <Logo>netflixRoulette</Logo>
      </header>
      <main>
        <h2>Page Not Found</h2>
        <Button className={ButtonVariant.Outlined} onClick={onGoBackClick}>
          go back to home page
        </Button>
      </main>
      <Footer>
        <Logo>netflixRoulette</Logo>
      </Footer>
    </Wrapper>
  );
}

export default NotFoundPage;
