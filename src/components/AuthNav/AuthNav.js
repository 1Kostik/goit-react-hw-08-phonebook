import { AuthContainer, Nav } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthContainer>
      <Nav  to="/register">
        Register
      </Nav>
      <Nav to="/login">
        Log In
      </Nav>
    </AuthContainer>
  );
};
