import { Loader } from 'components/Loader/Loader';
import { Header } from './SharedLayoutStyled';
import { Navigation } from 'components/Navigation/Navigation';
import { Menu } from 'components/Menu/Menu';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/Authorization/Selectors';

export function SharedLayout() {
  return (
    <div>
      <Header>
        <h1>Phonebook</h1>
        {useSelector(selectIsLoggedIn) ? <Menu /> : <Navigation />}
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
