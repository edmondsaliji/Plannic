import { Box } from '@mui/material';

function Layout({ children }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100%',
        m: 0,
        p: 0,
        overflowX: 'hidden'
      }}>
      <Box component='main' sx={{ width: '100%', overflowX: 'hidden' }}>
        {children}
      </Box>
    </Box>
  );
}

export default Layout;
