import './styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Context from './context';
import { usePokedex } from './hooks';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Pokedex from './pages/pokedex';
import Pokemon from './pages/_pokemon';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import Profile from './pages/profile';

const Container = () => {
  const [pokedex, setPokedex] = usePokedex();

  return (
    <Context.Provider value={{ pokedex, setPokedex }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="pokedex" element={<Pokedex />} />
            <Route path=":pokemon" element={<Pokemon />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>
);
