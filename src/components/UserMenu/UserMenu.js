import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';

function UserMenu() {
  const { user } =  useAuth();
  const dispatch = useDispatch();

  return (
    <>
      <div>
       <p>Welcome, {user.name}</p>
        <button type="button" onClick={() => dispatch(logOut())}>
          Logout
        </button>
      </div>
    </>
  );
}
export default UserMenu;
