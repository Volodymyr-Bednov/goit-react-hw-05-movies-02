import styled from 'styled-components';

export const MovieWrap = styled.div`
  display: flex;
  border-bottom: 1px solid #b3b3b3;
`;

export const HeaderPage = styled.h1`
  margin-left: 20px;
  font-weight: 500;
`;

export const ImageBlock = styled.div`
  margin-right: 20px;
`;

export const TextBlock = styled.div`
  //margin-left: 20px;
  //font-weight: 500;
`;

export const AddationBlock = styled.div`
  border-bottom: 1px solid #b3b3b3;
`;

export const GenresList = styled.ul`
  display: flex;
`;

export const GenresItem = styled.li`
  list-style-type: none;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
