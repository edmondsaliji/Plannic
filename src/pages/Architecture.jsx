import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import Layout from '../components/Layout';
import './Architecture.css';

function Architecture() {
  return (
    <Layout>
      {/* Full-width Hero Section */}
      <Box className='hero-section-arch'>
        <Box className='hero-overlay'>
          <Typography variant='h1' className='hero-title'>
            ARCHITECTURE
          </Typography>
          <Typography variant='h5' className='hero-subtitle'>
            Creating Spaces That Inspire
          </Typography>
        </Box>
      </Box>

      {/* Content Section */}
      <Container maxWidth='lg' sx={{ py: { xs: 4, md: 8 }, px: { xs: 2, sm: 3 } }}>
        <Grid container spacing={{ xs: 4, md: 6 }}>
          <Grid item xs={12} md={6}>
            <Box
              component='img'
              src='https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt='Architecture'
              sx={{
                width: '100%',
                height: { xs: '250px', sm: '350px', md: '400px' },
                objectFit: 'cover',
                borderRadius: 2,
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              variant='h3'
              gutterBottom
              sx={{
                fontWeight: 600,
                fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' }
              }}>
              Our Architectural Vision
            </Typography>
            <Typography
              variant='body1'
              paragraph
              sx={{
                lineHeight: 1.8,
                color: '#666',
                fontSize: { xs: '0.95rem', sm: '1rem' }
              }}>
              We believe that great architecture goes beyond aesthetics—it creates experiences, tells stories, and improves lives. Our team combines
              innovative design thinking with practical solutions to deliver projects that stand the test of time.
            </Typography>
            <Typography
              variant='body1'
              paragraph
              sx={{
                lineHeight: 1.8,
                color: '#666',
                fontSize: { xs: '0.95rem', sm: '1rem' }
              }}>
              From residential homes to commercial complexes, we approach each project with fresh eyes and a commitment to excellence, sustainability,
              and functionality.
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant='h4'
              gutterBottom
              sx={{
                fontWeight: 600,
                mt: { xs: 2, md: 4 },
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }
              }}>
              What We Offer
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box className='service-card'>
              <Typography variant='h6' gutterBottom sx={{ fontWeight: 600 }}>
                Residential Design
              </Typography>
              <Typography variant='body2' sx={{ color: '#666' }}>
                Custom homes designed to reflect your lifestyle, from modern minimalist to traditional elegance.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box className='service-card'>
              <Typography variant='h6' gutterBottom sx={{ fontWeight: 600 }}>
                Commercial Projects
              </Typography>
              <Typography variant='body2' sx={{ color: '#666' }}>
                Office buildings, retail spaces, and mixed-use developments that enhance business environments.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box className='service-card'>
              <Typography variant='h6' gutterBottom sx={{ fontWeight: 600 }}>
                Interior Architecture
              </Typography>
              <Typography variant='body2' sx={{ color: '#666' }}>
                Thoughtful interior spaces that balance form, function, and human experience.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box className='service-card'>
              <Typography variant='h6' gutterBottom sx={{ fontWeight: 600 }}>
                Renovation & Restoration
              </Typography>
              <Typography variant='body2' sx={{ color: '#666' }}>
                Breathing new life into existing structures while preserving their character and history.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box className='service-card'>
              <Typography variant='h6' gutterBottom sx={{ fontWeight: 600 }}>
                Sustainable Design
              </Typography>
              <Typography variant='body2' sx={{ color: '#666' }}>
                Eco-friendly architecture that minimizes environmental impact and maximizes efficiency.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box className='service-card'>
              <Typography variant='h6' gutterBottom sx={{ fontWeight: 600 }}>
                Urban Planning
              </Typography>
              <Typography variant='body2' sx={{ color: '#666' }}>
                Master planning and site analysis for developments of all scales.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Process Section */}
        <Box sx={{ mt: { xs: 6, md: 10 } }}>
          <Typography
            variant='h4'
            gutterBottom
            sx={{
              fontWeight: 600,
              textAlign: 'center',
              mb: { xs: 4, md: 6 },
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }
            }}>
            Our Design Process
          </Typography>
          <Grid container spacing={{ xs: 3, md: 4 }}>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Box
                  sx={{
                    width: { xs: 60, sm: 70, md: 80 },
                    height: { xs: 60, sm: 70, md: 80 },
                    borderRadius: '50%',
                    backgroundColor: '#000',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                    fontWeight: 700,
                    margin: '0 auto 1rem'
                  }}>
                  1
                </Box>
                <Typography
                  variant='h6'
                  gutterBottom
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: '1.1rem', sm: '1.25rem' }
                  }}>
                  Discovery
                </Typography>
                <Typography
                  variant='body2'
                  sx={{
                    color: '#666',
                    fontSize: { xs: '0.9rem', sm: '0.95rem' }
                  }}>
                  Understanding your vision, needs, and project goals
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Box
                  sx={{
                    width: { xs: 60, sm: 70, md: 80 },
                    height: { xs: 60, sm: 70, md: 80 },
                    borderRadius: '50%',
                    backgroundColor: '#000',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                    fontWeight: 700,
                    margin: '0 auto 1rem'
                  }}>
                  2
                </Box>
                <Typography
                  variant='h6'
                  gutterBottom
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: '1.1rem', sm: '1.25rem' }
                  }}>
                  Concept
                </Typography>
                <Typography
                  variant='body2'
                  sx={{
                    color: '#666',
                    fontSize: { xs: '0.9rem', sm: '0.95rem' }
                  }}>
                  Developing initial design concepts and exploring possibilities
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Box
                  sx={{
                    width: { xs: 60, sm: 70, md: 80 },
                    height: { xs: 60, sm: 70, md: 80 },
                    borderRadius: '50%',
                    backgroundColor: '#000',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                    fontWeight: 700,
                    margin: '0 auto 1rem'
                  }}>
                  3
                </Box>
                <Typography
                  variant='h6'
                  gutterBottom
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: '1.1rem', sm: '1.25rem' }
                  }}>
                  Development
                </Typography>
                <Typography
                  variant='body2'
                  sx={{
                    color: '#666',
                    fontSize: { xs: '0.9rem', sm: '0.95rem' }
                  }}>
                  Refining designs and preparing detailed documentation
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Box
                  sx={{
                    width: { xs: 60, sm: 70, md: 80 },
                    height: { xs: 60, sm: 70, md: 80 },
                    borderRadius: '50%',
                    backgroundColor: '#000',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                    fontWeight: 700,
                    margin: '0 auto 1rem'
                  }}>
                  4
                </Box>
                <Typography
                  variant='h6'
                  gutterBottom
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: '1.1rem', sm: '1.25rem' }
                  }}>
                  Realization
                </Typography>
                <Typography
                  variant='body2'
                  sx={{
                    color: '#666',
                    fontSize: { xs: '0.9rem', sm: '0.95rem' }
                  }}>
                  Supporting construction and bringing your vision to life
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ textAlign: 'center', mt: { xs: 6, md: 8 } }}>
          <Button
            variant='contained'
            size='large'
            href='/contact'
            sx={{
              px: { xs: 4, sm: 6 },
              py: { xs: 1.5, sm: 2 },
              fontSize: { xs: '1rem', sm: '1.1rem' },
              backgroundColor: '#000',
              '&:hover': {
                backgroundColor: '#333',
                transform: 'scale(1.05)'
              },
              transition: 'all 0.3s ease'
            }}>
            Start Your Project
          </Button>
        </Box>
      </Container>
    </Layout>
  );
}

export default Architecture;
