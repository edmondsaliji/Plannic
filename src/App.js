import React from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';

import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';
import theme from './theme';

function AppContent() {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100%',
        overflowX: 'hidden'
      }}>
      {!isLandingPage && <Header />}
      <Box
        component='main'
        sx={{
          flex: 1,
          width: '100%',
          px: 0,
          py: 0,
          pt: isLandingPage ? 0 : '64px',
          overflowX: 'hidden'
        }}>
        <AppRoutes />
      </Box>
      {!isLandingPage && <Footer />}
    </Box>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
