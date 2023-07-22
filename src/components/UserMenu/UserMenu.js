import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { UserMenuContainer,Text,Button} from './UserMenu.styled';



function UserMenu() {
  const { user } = useAuth();

  const dispatch = useDispatch();
 
  return (
    <>
     <UserMenuContainer>
       <Text>Welcome {user.name}</Text>
        <Button type="button" onClick={() => dispatch(logOut())}>
          Logout
        </Button>
      </UserMenuContainer>
    </>
  );
}
export default UserMenu;
