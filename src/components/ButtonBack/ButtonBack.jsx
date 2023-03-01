import { useLocation } from 'react-router-dom';
import { ButtonLink } from './ButtonBack.styled';

export const ButtonBack = ({ defLink }) => {
  //console.log('Button', defLink.from);
  const location = useLocation();
  const defRef = location.state?.from ?? defLink.from;
  return (
    <div>
      <ButtonLink to={defRef}> Go Back </ButtonLink>
    </div>
  );
};
