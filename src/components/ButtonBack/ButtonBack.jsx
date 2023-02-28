import { useLocation } from 'react-router-dom';
import { ButtonLink } from './ButtonBack.styled';

export const ButtonBack = () => {
  const location = useLocation();
  return (
    <div>
      <ButtonLink to={location.state.from}> Go Back </ButtonLink>
    </div>
  );
};
