import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, loggedIn, loggedOut } from '../../redux/actions';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation('common');
  const counter = useSelector(state => state.counterReducer);
  const isLogged = useSelector(state => state.loggedReducer);
  const dispatch = useDispatch();

  return (
    <header>
      <h2>Counter {counter}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <p>{t('header.h1')}</p> : <p>{t('header.p')}</p>}
      <button onClick={() => dispatch(loggedIn())}>Log in</button>
      <button onClick={() => dispatch(loggedOut())}>Log out</button>
    </header>
  );
}

export default Header;
