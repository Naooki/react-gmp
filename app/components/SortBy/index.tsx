import * as React from 'react';
import styled from 'styles/styled-components';

const triangleSize = 0.3;

const Wrapper = styled.button`
  position: relative;
  background: transparent;
  border: none;
  font-size: 1rem;
  color: ${props => props.theme.text};
  text-transform: uppercase;
  margin-right: 1rem;
  cursor: pointer;
  outline: none;
  :after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-right: ${triangleSize}rem solid transparent;
    border-left: ${triangleSize}rem solid transparent;
    right: -0.7rem;
  }
  &.desc {
    :after {
      border-top: ${triangleSize}rem solid ${props => props.theme.primary};
      border-bottom: ${triangleSize}rem solid transparent;
      top: calc(50% - ${triangleSize}rem);
    }
  }
  &.asc {
    :after {
      border-top: ${triangleSize}rem solid transparent;
      border-bottom: ${triangleSize}rem solid ${props => props.theme.primary};
    }
  }
`;

interface Props {
  label: string;
  orderChange: (type: SortType) => void;
}

export enum SortType {
  Default = 'default',
  Ascending = 'asc',
  Descending = 'desc',
}

const sortTypes = Object.values(SortType);

function SortBy(props: Props) {
  const [orderIndex, setOrderIndex] = React.useState(0);
  const orderChangeClick = () => {
    const index = (orderIndex + 1) % sortTypes.length;
    setOrderIndex(index);
    props.orderChange(sortTypes[index]);
  };

  return (
    <Wrapper className={sortTypes[orderIndex]} onClick={orderChangeClick}>
      {props.label}
    </Wrapper>
  );
}

export default SortBy;
