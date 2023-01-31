import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import user from 'reducer/user';
import MainContent from 'components/MainPAge/MainPage';
import LoginPage from 'components/LoginPage/LoginPage';
import SignupPage from 'components/SignupPage/SignupPage';
import CharacterPage from 'components/CharacterPage/CharacterPage';
import ShowCharPage from 'components/ShowCharPage/ShowCharPage';

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
        <Route path="/character" element={<CharacterPage />} />
        <Route path="/character-list" element={<ShowCharPage />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
    </Provider>
    </>
  );
}