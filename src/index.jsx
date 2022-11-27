import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './styles/globalStyles';
import { theme } from "./styles/theme"
import Home from './pages/Home';
import Router from './router/Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Router>
          <Home />
        </Router>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
