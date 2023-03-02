import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ButtonLink } from './ButtonBack.styled';

export const ButtonBack = () => {
  const location = useLocation();
  const [backLink, setBackLink] = useState('');

  useEffect(() => {
    setBackLink(location.state?.from ?? '/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <ButtonLink to={backLink}> Go Back </ButtonLink>
    </div>
  );
};
