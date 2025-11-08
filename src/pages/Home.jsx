import React, { useState } from 'react';
import { Box, Container, Typography, ToggleButton, Modal, Backdrop, Fade, IconButton, useMediaQuery, Grid, Card, CardContent } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import img1 from '../pics/1.jpeg';
import img2 from '../pics/2.jpeg';
import img3 from '../pics/3.jpeg';
import img4 from '../pics/4.jpeg';
import img5 from '../pics/5.jpeg';
import img6 from '../pics/6.jpeg';
import { motion } from 'framer-motion';

const yearData = {
  2020: [
    {
      featured: img1,
      title: 'Black Lava Fields Visitor Center, Dimmuborgir, Iceland 2019',
      description:
        'The initial concept behind the project, steems from traditional Icelandic architecture.\nWe use materials such as timber and turf in order to associate the Icelandic vernacular architecture (turf houses).\nThe courtyard typology is an intriguing story of exchanging feelings that comes from sounds, smells and textures of the dark castles lava fields, lake Myvatn and Hverijall volcano.',
      images: [img1, img2, img3]
    },
    {
      featured: img2,
      title: 'Urban Regeneration Hub, Copenhagen 2020',
      description: 'A multifunctional public space in repurposed industrial buildings focused on community and sustainability.',
      images: [img2, img3]
    }
  ],
  2021: [
    {
      featured: img4,
      title: 'Mountain Lodge & Spa',
      description: 'A secluded mountain lodge offering panoramic views and sustainable eco-luxury built with timber and stone materials.',
      images: [img4, img5, img6]
    },
    {
      featured: img2,
      title: 'Urban Regeneration Hub, Copenhagen 2020',
      description: 'A multifunctional public space in repurposed industrial buildings focused on community and sustainability.',
      images: [img2, img3]
    },
    {
      featured: img2,
      title: 'Urban Regeneration Hub, Copenhagen 2020',
      description: 'A multifunctional public space in repurposed industrial buildings focused on community and sustainability.',
      images: [img2, img3]
    },
    {
      featured: img2,
      title: 'Urban Regeneration Hub, Copenhagen 2020',
      description: 'A multifunctional public space in repurposed industrial buildings focused on community and sustainability.',
      images: [img2, img3]
    },
    {
      featured: img2,
      title: 'Urban Regeneration Hub, Copenhagen 2020',
      description: 'A multifunctional public space in repurposed industrial buildings focused on community and sustainability.',
      images: [img2, img3]
    },
    {
      featured: img2,
      title: 'Urban Regeneration Hub, Copenhagen 2020',
      description: 'A multifunctional public space in repurposed industrial buildings focused on community and sustainability.',
      images: [img2, img3]
    },
    {
      featured: img2,
      title: 'Urban Regeneration Hub, Copenhagen 2020',
      description: 'A multifunctional public space in repurposed industrial buildings focused on community and sustainability.',
      images: [img2, img3]
    },
    {
      featured: img2,
      title: 'Urban Regeneration Hub, Copenhagen 2020',
      description: 'A multifunctional public space in repurposed industrial buildings focused on community and sustainability.',
      images: [img2, img3]
    },
    {
      featured: img2,
      title: 'Urban Regeneration Hub, Copenhagen 2020',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys',
      images: [img2, img3]
    },
    {
      featured: img2,
      title: 'Urban Regeneration Hub, Copenhagen 2020',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrysLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrysLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys',
      images: [img2, img3]
    },
    {
      featured: img2,
      title: 'Loren ispum ',
      description:
        '112 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrysLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys',
      images: [img2, img3]
    }
  ]
};

export const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [selectedYear, setSelectedYear] = useState('2020');
  const [selectedProject, setSelectedProject] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setImageIndex(0);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handlePrev = () => {
    setImageIndex((prev) => (prev > 0 ? prev - 1 : selectedProject.images.length - 1));
  };

  const handleNext = () => {
    setImageIndex((prev) => (prev < selectedProject.images.length - 1 ? prev + 1 : 0));
  };

  return (
    <Box sx={{ py: 6 }}>
      <Container>
        <Typography variant='h4' textAlign='center' fontWeight='bold' gutterBottom>
          Projekte nach Jahren
        </Typography>

        <Box
          sx={{
            display: 'flex',
            overflowX: 'auto',
            gap: 1,
            justifyContent: isMobile ? 'flex-start' : 'center',
            py: 2,
            px: 1,
            '&::-webkit-scrollbar': { display: 'none' },
            scrollbarWidth: 'none'
          }}>
          {Object.keys(yearData).map((year) => (
            <ToggleButton
              key={year}
              value={year}
              selected={selectedYear === year}
              onClick={() => setSelectedYear(year)}
              sx={{
                minWidth: 90,
                flex: '0 0 auto',
                px: 2,
                py: 1,
                fontWeight: selectedYear === year ? 'bold' : 'normal',
                backgroundColor: selectedYear === year ? 'primary.main' : '#f5f5f5',
                color: selectedYear === year ? 'white' : 'text.primary',
                borderRadius: 2,
                '&:hover': {
                  backgroundColor: selectedYear === year ? 'primary.dark' : '#e0e0e0'
                }
              }}>
              {year}
            </ToggleButton>
          ))}
        </Box>

        <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {yearData[selectedYear].map((project, idx) => (
            <Box
              key={idx}
              onClick={() => handleOpen(project)}
              sx={{
                cursor: 'pointer',
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: 3
              }}>
              <Box
                component='img'
                src={project.featured}
                alt={project.title}
                sx={{ width: '100%', height: 'auto', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.02)' } }}
              />
              <Box sx={{ p: 2 }}>
                <Typography fontWeight='bold'>{project.title}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>

      {selectedProject && (
        <Modal open={open} onClose={handleClose} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{ timeout: 500 }}>
          <Fade in={open}>
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '95vw',
                maxWidth: 1500,
                maxHeight: '100vh',
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 2,
                borderRadius: 2,
                overflowY: 'auto',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 3
              }}>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  maxHeight: { xs: '60vh', md: '80vh' },
                  flex: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: 'hidden',
                  borderRadius: 2
                }}>
                <IconButton
                  onClick={handlePrev}
                  sx={{
                    position: 'absolute',
                    left: 8,
                    zIndex: 1,
                    backgroundColor: 'rgba(255,255,255,0.7)',
                    '&:hover': { backgroundColor: 'rgba(255,255,255,0.9)' }
                  }}>
                  <ChevronLeftIcon />
                </IconButton>

                <Box
                  component='img'
                  src={selectedProject.images[imageIndex]}
                  alt='Project image'
                  sx={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    borderRadius: 2
                  }}
                />

                <IconButton
                  onClick={handleNext}
                  sx={{
                    position: 'absolute',
                    right: 8,
                    zIndex: 1,
                    backgroundColor: 'rgba(255,255,255,0.7)',
                    '&:hover': { backgroundColor: 'rgba(255,255,255,0.9)' }
                  }}>
                  <ChevronRightIcon />
                </IconButton>
              </Box>

              {/* Info section */}
              <Box sx={{ flex: 1, mt: { xs: 2, md: 0 } }}>
                <Typography variant='h6' fontWeight='bold' gutterBottom>
                  {selectedProject.title}
                </Typography>
                <Typography variant='subtitle1' fontWeight='bold' gutterBottom>
                  Description
                </Typography>
                <Typography variant='body2' sx={{ whiteSpace: 'pre-line' }}>
                  {selectedProject.description}
                </Typography>
              </Box>
            </Box>
          </Fade>
        </Modal>
      )}

      <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5', py: 8 }}>
        <Container maxWidth='lg'>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Typography variant='h2' component='h1' gutterBottom align='center' sx={{ mb: 4 }}>
              Willkommen bei Plannic
            </Typography>
            <Typography variant='h5' align='center' color='text.secondary' sx={{ mb: 6 }}>
              Ihre Experten für CAD-Services und Architektur
            </Typography>

            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant='h5' component='h2' gutterBottom>
                      CAD Services
                    </Typography>
                    <Typography variant='body1' color='text.secondary'>
                      Professionelle CAD-Dienstleistungen für Ihre Projekte
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant='h5' component='h2' gutterBottom>
                      Architecture
                    </Typography>
                    <Typography variant='body1' color='text.secondary'>
                      Innovative architektonische Lösungen
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};
