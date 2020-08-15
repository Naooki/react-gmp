import * as React from 'react';
import styled from 'styles/styled-components';
import { Link } from 'react-router-dom';

const TabLink = styled(Link)`
  display: block;
  padding: 0.8rem 0;
  font-size: 1rem;
  color: ${props => props.theme.text};
  text-decoration: none;
  text-transform: uppercase;
`;

const Tab = styled.li`
  display: block;
  margin-right: 1.5rem;
  margin-bottom: -3px;
  &.active {
    border-bottom: 3px solid ${props => props.theme.primary};
  }
`;

const TabsWrapper = styled.ul`
  display: flex;
  height: 100%;
  color: ${props => props.theme.text};
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

interface Props {
  tabs: any[];
  activeTab?: any;
  tabChange: (tab: any) => void;
}

const Tabs = (props: Props) => {
  return (
    <TabsWrapper>
      {props.tabs.map(tab => (
        <Tab
          key={tab.label}
          className={tab.label === props.activeTab.label ? 'active' : ''}
          onClick={() => props.tabChange(tab)}
        >
          <TabLink to={`search?genre=${tab.label}`}>{tab.label}</TabLink>
        </Tab>
      ))}
    </TabsWrapper>
  );
};

export default Tabs;
