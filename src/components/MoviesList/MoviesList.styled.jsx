import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderPage = styled.h1`
  margin-left: 20px;
  font-weight: 500;
`;

export const ListItem = styled.li`
  margin-top: 8px;
`;

export const MovieLink = styled(Link)`
  padding: 0 16px;
  text-decoration: none;
  font-weight: 500;
  color: #144470;
`;
