import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import Layout from '../components/Layout';
import './CADServices.css';

function CADServices() {
  return (
    <Layout>
      {/* Full-width Hero Section */}
      <Box className='hero-section'>
        <Box className='hero-overlay'>
          <Typography variant='h1' className='hero-title'>
            CAD SERVICES
          </Typography>
          <Typography variant='h5' className='hero-subtitle'>
            Professional Computer-Aided Design Solutions
          </Typography>
        </Box>
      </Box>

      {/* Content Section */}
      <Container maxWidth='lg' sx={{ py: { xs: 4, md: 8 }, px: { xs: 2, sm: 3 } }}>
        <Grid container spacing={{ xs: 4, md: 6 }}>
          <Grid item xs={12} md={6}>
            <Typography
              variant='h3'
              gutterBottom
              sx={{
                fontWeight: 600,
                fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' }
              }}>
              Our CAD Expertise
            </Typography>
            <Typography
              variant='body1'
              paragraph
              sx={{
                lineHeight: 1.8,
                color: '#666',
                fontSize: { xs: '0.95rem', sm: '1rem' }
              }}>
              We provide comprehensive CAD services for architectural projects, delivering precise and detailed technical drawings that bring your
              vision to life. Our team utilizes cutting-edge software to ensure accuracy and efficiency in every project.
            </Typography>
            <Typography
              variant='body1'
              paragraph
              sx={{
                lineHeight: 1.8,
                color: '#666',
                fontSize: { xs: '0.95rem', sm: '1rem' }
              }}>
              From initial concept sketches to detailed construction documents, we handle all aspects of CAD drafting and modeling with
              professionalism and attention to detail.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              component='img'
              src='https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt='CAD Services'
              sx={{
                width: '100%',
                height: { xs: '250px', sm: '350px', md: '400px' },
                objectFit: 'cover',
                borderRadius: 2,
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant='h4' gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
              Our Services Include
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box className='service-card'>
              <Typography variant='h6' gutterBottom sx={{ fontWeight: 600 }}>
                2D Technical Drawings
              </Typography>
              <Typography variant='body2' sx={{ color: '#666' }}>
                Detailed floor plans, elevations, sections, and construction details prepared to the highest standards.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box className='service-card'>
              <Typography variant='h6' gutterBottom sx={{ fontWeight: 600 }}>
                3D Modeling
              </Typography>
              <Typography variant='body2' sx={{ color: '#666' }}>
                Advanced 3D models for visualization, coordination, and clash detection throughout the design process.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box className='service-card'>
              <Typography variant='h6' gutterBottom sx={{ fontWeight: 600 }}>
                BIM Services
              </Typography>
              <Typography variant='body2' sx={{ color: '#666' }}>
                Building Information Modeling for comprehensive project management and coordination.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box className='service-card'>
              <Typography variant='h6' gutterBottom sx={{ fontWeight: 600 }}>
                As-Built Documentation
              </Typography>
              <Typography variant='body2' sx={{ color: '#666' }}>
                Accurate documentation of existing conditions and renovations.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box className='service-card'>
              <Typography variant='h6' gutterBottom sx={{ fontWeight: 600 }}>
                Rendering & Visualization
              </Typography>
              <Typography variant='body2' sx={{ color: '#666' }}>
                Photo-realistic renderings and animations to showcase your designs.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box className='service-card'>
              <Typography variant='h6' gutterBottom sx={{ fontWeight: 600 }}>
                Permit Drawings
              </Typography>
              <Typography variant='body2' sx={{ color: '#666' }}>
                Complete permit sets prepared to meet local building code requirements.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Button
            variant='contained'
            size='large'
            href='/contact'
            sx={{
              px: 6,
              py: 2,
              fontSize: '1.1rem',
              backgroundColor: '#000',
              '&:hover': {
                backgroundColor: '#333'
              }
            }}>
            Get a Quote
          </Button>
        </Box>
      </Container>
    </Layout>
  );
}

export default CADServices;
