import PageHeader from 'components/PageHeader/PageHeader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './MainLayout.styled';

const MainLayout = () => {
  return (
    <>
      <PageHeader />
      <Container>
        <Suspense fallback={<div>...Loading</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default MainLayout;
