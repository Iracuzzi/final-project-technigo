import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import user from 'reducer/user';
import MainContent from 'components/MainPage';
import LoginPage from 'components/LoginPage';
import SignupPage from 'components/SignupPage';
import PorfilePage from 'components/PorfilePage';
import CharacterPage from 'components/CharacterPage';
import CharacterList from 'components/CharacterList';

const reducer = combineReducers({
  user: user.reducer,
});
const store = configureStore({reducer});

export const App = () => {
  return (
    <>
    <Provider store={store}>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/porfile" element={<PorfilePage />} />
        <Route path="/character" element={<CharacterPage />} />
        <Route path="/character-list" element={<CharacterList />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
    </Provider>
    </>
  );
}