import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Loader } from './Loader/Loader';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { lazy } from 'react';
import { refreshUser } from 'redux/Authorization/Operations';
import { selectIsLoading } from 'redux/Authorization/Selectors';
import { PrivateRoute } from 'Routes/PrivateRoute';
import { PublicRoute } from 'Routes/PublicRoute';

const Home = lazy(() => import('Pages/Home/Home'));
const Login = lazy(() => import('Pages/Login/Login'));
const SignUp = lazy(() => import('Pages/SignUp/SignUp'));
const Contacts = lazy(() => import('Pages/Contacts/Contacts'));

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return useSelector(selectIsLoading) ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={<PublicRoute redirectTo="/contacts" component={<Home />} />}
        />
        <Route
          path="/login"
          element={<PublicRoute redirectTo="/contacts" component={<Login />} />}
        />
        <Route
          path="/register"
          element={
            <PublicRoute redirectTo="/contacts" component={<SignUp />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
    </Routes>
  );
}
