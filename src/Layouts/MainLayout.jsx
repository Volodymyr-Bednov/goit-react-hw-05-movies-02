import PageHeader from 'components/PageHeader/PageHeader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, LoaderDiv } from './MainLayout.styled';

const MainLayout = () => {
  return (
    <>
      <PageHeader />
      <Container>
        <Suspense
          fallback={
            <LoaderDiv>
              <p>...Loading</p>
            </LoaderDiv>
          }
        >
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default MainLayout;
