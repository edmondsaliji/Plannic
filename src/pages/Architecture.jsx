import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import CountUp from '../components/CountUp';
import Waves from '../components/Waves';
import './Architecture.css';

function Architecture() {
  const stats = [
    { number: 18, suffix: '+', label: 'Years of Experience', delay: 0 },
    { number: 150, suffix: '+', label: 'Projects Completed', delay: 0.2 },
    { number: 95, suffix: '%', label: 'Client Satisfaction', delay: 0.4 }
  ];

  const services = [
    {
      image: require('../pics/service-01.png'),
      title: 'ARCHITECTURE',
      description: 'Innovative architectural design that harmonizes form, function, and sustainability for modern living spaces.'
    },
    {
      image: require('../pics/service-02.png'),
      title: 'INTERIOR',
      description: 'Thoughtfully curated interior spaces that reflect your personality while maximizing comfort and aesthetics.'
    },
    {
      image: require('../pics/service-03.png'),
      title: 'PLANNING',
      description: 'Strategic urban development solutions that create vibrant, sustainable communities for future generations.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
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

      {/* What We Offer Section with Image */}
      <Container maxWidth='lg' sx={{ py: { xs: 6, md: 10 } }}>
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems='center'>
          <Grid item xs={12} md={6}>
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <Box
                component='img'
                src='https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                alt='Architecture'
                sx={{
                  width: '100%',
                  height: { xs: '300px', sm: '400px', md: '500px' },
                  objectFit: 'cover',
                  borderRadius: 3,
                  boxShadow: '0 20px 60px rgba(0,0,0,0.2)'
                }}
              />
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <Typography
                variant='overline'
                sx={{
                  color: '#888',
                  fontSize: '0.875rem',
                  letterSpacing: '2px',
                  fontWeight: 600,
                  mb: 2,
                  display: 'block'
                }}>
                WE ARE PLANNIC
              </Typography>
              <Typography
                variant='h2'
                gutterBottom
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' },
                  mb: 3,
                  lineHeight: 1.2
                }}>
                Our buildings are inspired by the challenge of balancing function & beauty
              </Typography>
              <Typography
                variant='body1'
                paragraph
                sx={{
                  lineHeight: 1.8,
                  color: '#666',
                  fontSize: { xs: '0.95rem', sm: '1rem' },
                  mb: 2
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
                  fontSize: { xs: '0.95rem', sm: '1rem' },
                  mb: 4
                }}>
                From residential homes to commercial complexes, we approach each project with fresh eyes and a commitment to excellence,
                sustainability, and functionality.
              </Typography>
              <Button
                variant='outlined'
                size='large'
                href='/contact'
                sx={{
                  px: 4,
                  py: 1.5,
                  borderColor: '#000',
                  color: '#000',
                  '&:hover': {
                    borderColor: '#000',
                    backgroundColor: '#000',
                    color: '#fff'
                  }
                }}>
                Contact us →
              </Button>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Stats Section with CountUp */}
      <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#f8f8f8' }}>
        <Container maxWidth='lg'>
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: stat.delay }}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography
                      variant='h2'
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: '3rem', md: '4rem' },
                        mb: 1,
                        color: '#000'
                      }}>
                      <CountUp from={0} to={stat.number} duration={2} separator=',' />
                      {stat.suffix}
                    </Typography>
                    <Typography
                      variant='body1'
                      sx={{
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        color: '#666',
                        fontSize: '0.875rem',
                        fontWeight: 500
                      }}>
                      {stat.label}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Services Section - Our Specialization */}
      <Box
        className='services-section-dark'
        sx={{
          py: { xs: 8, md: 12 },
          position: 'relative',
          backgroundColor: '#1a1a1a',
          overflow: 'hidden'
        }}>
        {/* Waves Background */}
        <Waves
          lineColor='rgba(255, 255, 255, 0.08)'
          backgroundColor='transparent'
          waveSpeedX={0.0125}
          waveSpeedY={0.005}
          waveAmpX={40}
          waveAmpY={20}
          xGap={12}
          yGap={35}
          friction={0.925}
          tension={0.005}
          maxCursorMove={120}
        />

        <Container maxWidth='xl' sx={{ position: 'relative', zIndex: 1 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', lg: 'row' },
              alignItems: { xs: 'center', lg: 'center' },
              gap: { xs: 6, sm: 7, md: 8, lg: 4, xl: 6 }
            }}>
            {/* Left Column - Heading */}
            <Box
              sx={{
                flex: { lg: '0 0 280px', xl: '0 0 320px' },
                textAlign: { xs: 'center', lg: 'left' },
                width: { xs: '100%', lg: 'auto' }
              }}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}>
                <Typography
                  variant='overline'
                  sx={{
                    color: '#888',
                    fontSize: { xs: '0.65rem', sm: '0.7rem' },
                    letterSpacing: '3px',
                    fontWeight: 600,
                    mb: { xs: 2, md: 3 },
                    display: 'block'
                  }}>
                  WHAT WE DO
                </Typography>
                <Typography
                  variant='h2'
                  sx={{
                    color: '#FFFFFF',
                    fontSize: { xs: '2.5rem', sm: '3rem', md: '3.25rem', lg: '3rem', xl: '3.5rem' },
                    fontWeight: 700,
                    lineHeight: 1.1,
                    letterSpacing: '-0.5px'
                  }}>
                  Our
                  <br />
                  Specialization
                </Typography>
              </motion.div>
            </Box>

            {/* Right Column - Service Cards */}
            <Box
              sx={{
                flex: '1',
                display: 'flex',
                flexWrap: 'wrap',
                gap: { xs: 3, sm: 3.5, md: 4, lg: 2.5, xl: 3.5 },
                justifyContent: { xs: 'center', sm: 'center', md: 'center', lg: 'flex-start' },
                width: '100%'
              }}>
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}>
                  <Box
                    className='media-service-card'
                    sx={{
                      width: { xs: '260px', sm: '240px', md: '230px', lg: '210px', xl: '240px' },
                      height: { xs: '260px', sm: '240px', md: '230px', lg: '210px', xl: '240px' },
                      backgroundColor: 'white',
                      position: 'relative',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      p: 4,
                      cursor: 'pointer',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
                        '& .corner-line': {
                          width: '40px',
                          height: '40px',
                          opacity: 1
                        },
                        '& .service-image': {
                          transform: 'scale(1.08)'
                        }
                      }
                    }}>
                    {/* Top Left Corner Line */}
                    <Box
                      className='corner-line'
                      sx={{
                        position: 'absolute',
                        top: '20px',
                        left: '20px',
                        width: '25px',
                        height: '25px',
                        borderTop: '1px solid #000',
                        borderLeft: '1px solid #000',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        opacity: 0.6
                      }}
                    />

                    {/* Bottom Right Corner Line */}
                    <Box
                      className='corner-line'
                      sx={{
                        position: 'absolute',
                        bottom: '20px',
                        right: '20px',
                        width: '25px',
                        height: '25px',
                        borderBottom: '1px solid #000',
                        borderRight: '1px solid #000',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        opacity: 0.6
                      }}
                    />

                    {/* Service Icon/Image */}
                    <Box
                      component='img'
                      src={service.image}
                      alt={service.title}
                      className='service-image'
                      sx={{
                        width: '100px',
                        height: '100px',
                        objectFit: 'contain',
                        mb: 3,
                        transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        filter: 'grayscale(0%)'
                      }}
                    />

                    {/* Service Title */}
                    <Typography
                      variant='h6'
                      sx={{
                        fontWeight: 700,
                        fontSize: '1rem',
                        letterSpacing: '1px',
                        color: '#000',
                        textAlign: 'center',
                        textTransform: 'uppercase'
                      }}>
                      {service.title}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Container maxWidth='lg' sx={{ py: { xs: 6, md: 10 }, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}>
          <Typography
            variant='h3'
            gutterBottom
            sx={{
              fontWeight: 600,
              mb: 3,
              fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' }
            }}>
            Ready to Start Your Project?
          </Typography>
          <Typography variant='body1' paragraph sx={{ color: '#666', mb: 4, maxWidth: '600px', mx: 'auto' }}>
            Let's collaborate to bring your architectural vision to life. Contact us today for a consultation.
          </Typography>
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
                backgroundColor: '#333',
                transform: 'scale(1.05)'
              },
              transition: 'all 0.3s ease'
            }}>
            Get in Touch
          </Button>
        </motion.div>
      </Container>
    </Layout>
  );
}

export default Architecture;
