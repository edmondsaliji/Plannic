import React from 'react';
import { Box, Typography, Container } from '@mui/material';

function Footer() {
  return (
    <Box
      component='footer'
      sx={{
        backgroundColor: '#f9f9f9',
        borderTop: '1px solid #e0e0e0',
        mt: 'auto',
        py: 4,
        px: 2
      }}>
      <Container maxWidth='lg'>
        {/* Obere Sektion: Kontaktspalten */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'center' },
            gap: { xs: 3, md: 0 }
          }}>
          {/* Spalte 1 */}
          <Box>
            <Typography variant='subtitle2' fontWeight='bold' gutterBottom>
              Mobil
            </Typography>
            <Typography variant='body2'>+41 (0) 79 175 20 80</Typography>
          </Box>

          {/* Spalte 2 */}
          <Box>
            <Typography variant='subtitle2' fontWeight='bold' gutterBottom>
              E-Mail
            </Typography>
            <Typography variant='body2'>info@plannic.ch</Typography>
          </Box>

          {/* Spalte 3 */}
          <Box>
            <Typography variant='subtitle2' fontWeight='bold' gutterBottom>
              Unsere Adresse
            </Typography>
            <Typography variant='body2'>Thurfeldstrasse 17a</Typography>
            <Typography variant='body2'>9215 Schönenberg</Typography>
          </Box>
        </Box>

        {/* Untere Sektion: Copyright */}
        <Box sx={{ mt: 4, borderTop: '1px solid #e0e0e0', textAlign: 'center' }}>
          <Typography variant='caption' color='textSecondary'>
            © {new Date().getFullYear()} Plannic GmbH – Alle Rechte vorbehalten.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
