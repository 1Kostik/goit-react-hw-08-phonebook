import { Navigation } from '../Navigation/Navigation';
import  UserMenu  from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth'; 
import {Header,Nav} from './AppBar.styled';
import { slide as Menu } from 'react-burger-menu'


export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Header> 
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};