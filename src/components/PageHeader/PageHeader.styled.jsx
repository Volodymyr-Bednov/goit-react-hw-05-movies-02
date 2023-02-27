import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding: 0 10px;

  background-color: rgb(196, 204, 223);
`;

export const Link = styled(NavLink)`
  display: inline-block;
  padding: 20px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 700;
  font-size: 18px;
  &:not(:last-child) {
    margin-right: 16px;
  }
  &.active {
    color: orangered;
  }
`;
