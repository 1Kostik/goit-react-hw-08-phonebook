import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout';
import Container from '@mui/material/Container';
import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/authOperations';
import { lazy, useEffect } from 'react';

const HomePage = lazy(() => import('../../pages/Home/Home'));
const RegisterPage = lazy(() => import('../../pages/Register/Register'));
const LoginPage = lazy(() => import('../../pages/Login/Login'));
const ContactsPage = lazy(() => import('../../pages/Contacts/Contacts'));

export function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {!isRefreshing && (
        <Container maxWidth="xl">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<RegisterPage />}
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<LoginPage />}
                  />
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
                }
              />
            </Route>
          </Routes>
        </Container>
      )}
    </>
  );
}
