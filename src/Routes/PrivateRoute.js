import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {
  selectIsLoggedIn,
  selectIsLoading,
} from 'redux/Authorization/Selectors';

export function PrivateRoute({ component: Component, redirectTo = '/' }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectIsLoading);

  if (!isLoggedIn && !isLoading) {
    return <Navigate to={redirectTo} />;
  }
  return Component;
}
