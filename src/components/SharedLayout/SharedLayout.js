import { Loader } from 'components/Loader/Loader';
import { Header, Title } from './SharedLayoutStyled';
import { Navigation } from 'components/Navigation/Navigation';
import { Menu } from 'components/Menu/Menu';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/Authorization/Selectors';
import { Box } from 'Box';

export function SharedLayout() {
  return (
    <Box>
      <Header>
        <Title>Phonebook</Title>
        {useSelector(selectIsLoggedIn) ? <Menu /> : <Navigation />}
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Box>
  );
}
