import { useLocation } from 'react-router-dom';
import { ButtonLink } from './ButtonBack.styled';

export const ButtonBack = ({ defLink }) => {
  const location = useLocation();
  const defRef = '';
  if (!defLink.hasOwnProperty('from')) {
    console.log('From FROM');
  } else {
    console.log('Button', defLink);

    defRef = location.state?.from ?? (defLink?.from || '/');
    console.log('ButtonRef', defRef);
  }

  return (
    <div>
      <ButtonLink to={defRef}> Go Back </ButtonLink>
    </div>
  );
};
