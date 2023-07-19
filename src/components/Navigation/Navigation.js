import { useAuth } from 'hooks/useAuth';
import { Nav } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Nav to="/">Home</Nav>
      {isLoggedIn && <Nav to="/contacts">Contacts</Nav>}
    </nav>
  );
};
