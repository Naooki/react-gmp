import * as React from 'react';
import styled from 'styles/styled-components';
import { lighten } from 'polished';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faTimes } from '@fortawesome/free-solid-svg-icons';

import useClickOutsideListenerRef from 'utils/hooks/useClickOutisedeListenerRef';

const MenuWrapper = styled.div`
  position: relative;
`;

const MenuButton = styled.button`
  border: none;
  border-radius: 50%;
  padding: 0.4rem 0.7rem;
  color: ${props => props.theme.text};
  background: ${props => props.theme.componentBackground};
  outline: none;

  &:hover {
    background: ${props => lighten(0.1, props.theme.componentBackground)};
  }
`;

const MenuDropdown = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  padding: 0.3rem 0;
  background: ${props => props.theme.componentBackground};
  box-shadow: 0 0.3rem 1rem #000;
`;

const MenuDropdownCloseBtn = styled.button`
  align-self: flex-end;
  border: none;
  color: ${props => props.theme.text};
  background: transparent;
`;

const MenuDropdownList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

interface Props {
  children: React.ReactNode;
  className?: string;
}
const Menu = (props: Props) => {
  const [isOpened, setIsOpened] = React.useState(false);

  const toggleIsOpened = React.useCallback(() => setIsOpened(!isOpened), [
    isOpened,
  ]);

  const className = React.useMemo(
    () => `${props.className} ${isOpened ? 'opened' : ''}`,
    [props.className, isOpened],
  );

  const ref = useClickOutsideListenerRef<HTMLDivElement>(toggleIsOpened);

  return (
    <MenuWrapper className={className}>
      <MenuButton onClick={toggleIsOpened}>
        <FontAwesomeIcon icon={faEllipsisV} />
      </MenuButton>
      {isOpened && (
        <MenuDropdown ref={ref}>
          <MenuDropdownCloseBtn onClick={toggleIsOpened}>
            <FontAwesomeIcon icon={faTimes} />
          </MenuDropdownCloseBtn>
          <MenuDropdownList>{props.children}</MenuDropdownList>
        </MenuDropdown>
      )}
    </MenuWrapper>
  );
};

export default Menu;
