import { Loader } from 'components/Loader/Loader';
import { Header, Title, Container } from './SharedLayoutStyled';
import { Navigation } from 'components/Navigation/Navigation';
import { Menu } from 'components/Menu/Menu';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/Authorization/Selectors';

export function SharedLayout() {
  return (
    <Container>
      <Header>
        <Title>Phonebook</Title>
        {useSelector(selectIsLoggedIn) ? <Menu /> : <Navigation />}
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
}
