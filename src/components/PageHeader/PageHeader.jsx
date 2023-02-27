import { Container, Link } from './PageHeader.styled';

export const PageHeader = () => {
  return (
    <Container>
      <Link className="navLink" to="/" replace>
        Home
      </Link>
      <Link className="navLink" to="/movies" replace>
        Movies
      </Link>
    </Container>
  );
};
export default PageHeader;
