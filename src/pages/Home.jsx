import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Container, Card, CardMedia, CardContent, Dialog, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './References.css';

const projectsData = [
  {
    year: '2021',
    milestone: 'Expansion Year',
    projects: [
      {
        title: 'Mountain Lodge & Spa',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
        description: 'Luxury mountain retreat with modern amenities',
        gallery: [
          'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80',
          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80',
          'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1920&q=80'
        ]
      }
    ]
  },
  {
    year: '2020',
    milestone: 'Innovation Era',
    projects: [
      {
        title: 'Urban Regeneration Hub, Copenhagen',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
        description: 'Sustainable urban development project',
        gallery: [
          'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80',
          'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80',
          'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80'
        ]
      },
      {
        title: 'Commercial District Development',
        image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80',
        description: 'Mixed-use commercial and residential space',
        gallery: [
          'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80',
          'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80',
          'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1920&q=80'
        ]
      }
    ]
  },
  {
    year: '2019',
    milestone: 'Company Founded',
    projects: [
      {
        title: 'First Commercial Building',
        image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800&q=80',
        description: 'Our first major project',
        gallery: [
          'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=1920&q=80',
          'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80',
          'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1920&q=80'
        ]
      }
    ]
  }
];

export const Home = () => {
  const timelineRefs = useRef([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const handleOpenDialog = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const handleNextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.gallery.length);
    }
  };

  const handlePrevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.gallery.length) % selectedProject.gallery.length);
    }
  };

  return (
    <Box className='references-container'>
      <Container maxWidth='xl'>
        <Typography
          variant='h2'
          className='references-title'
          sx={{
            fontFamily: 'Poppins, Montserrat, sans-serif',
            fontWeight: 600,
            textAlign: 'center',
            mb: 8,
            mt: 4,
            color: '#000',
            fontSize: { xs: '2rem', md: '3rem' }
          }}>
          Architecture Projects
        </Typography>

        <Box className='timeline'>
          {projectsData.map((yearData, yearIndex) => (
            <Box key={yearData.year} ref={(el) => (timelineRefs.current[yearIndex] = el)} className='timeline-section'>
              {/* Year Marker */}
              <Box className='year-marker'>
                <Box className='year-line' />
                <Typography variant='h1' className='year-number'>
                  {yearData.year}
                </Typography>
                {yearData.milestone && (
                  <Typography variant='subtitle1' className='year-milestone'>
                    {yearData.milestone}
                  </Typography>
                )}
              </Box>

              {/* Projects Grid */}
              <Box className='projects-grid'>
                {yearData.projects.map((project, projectIndex) => (
                  <Card
                    key={projectIndex}
                    className='project-card'
                    onClick={() => handleOpenDialog(project)}
                    sx={{
                      animationDelay: `${projectIndex * 0.15}s`
                    }}>
                    <CardMedia component='img' height='300' image={project.image} alt={project.title} className='project-image' />
                    <CardContent className='project-content'>
                      <Typography variant='h6' className='project-title' sx={{ fontFamily: 'Poppins, Montserrat, sans-serif', fontWeight: 500 }}>
                        {project.title}
                      </Typography>
                      <Typography variant='body2' color='text.secondary' sx={{ mt: 1 }}>
                        {project.description}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Container>

      {/* Image Gallery Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth='xl'
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: '#fff',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            maxHeight: '95vh',
            margin: 2
          }
        }}>
        <IconButton
          onClick={handleCloseDialog}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: '#000',
            zIndex: 1,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 1)'
            }
          }}>
          <CloseIcon />
        </IconButton>

        {selectedProject && (
          <Box className='gallery-container'>
            <Box className='gallery-main-image'>
              <IconButton
                onClick={handlePrevImage}
                className='gallery-nav-button gallery-prev'
                sx={{
                  position: 'absolute',
                  left: 16,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 2
                }}>
                ‹
              </IconButton>

              <img
                src={selectedProject.gallery[currentImageIndex]}
                alt={`${selectedProject.title} - ${currentImageIndex + 1}`}
                className='gallery-image'
              />

              <IconButton
                onClick={handleNextImage}
                className='gallery-nav-button gallery-next'
                sx={{
                  position: 'absolute',
                  right: 16,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 2
                }}>
                ›
              </IconButton>
            </Box>

            <Box className='gallery-info'>
              <Typography variant='h5' sx={{ fontFamily: 'Poppins, Montserrat, sans-serif', textAlign: 'center', mb: 1 }}>
                {selectedProject.title}
              </Typography>

              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
                <Typography variant='body2' sx={{ textAlign: 'center' }}>
                  {selectedProject.description}
                </Typography>
                <Typography variant='body2' className='gallery-counter' sx={{ whiteSpace: 'nowrap' }}>
                  {currentImageIndex + 1} / {selectedProject.gallery.length}
                </Typography>
              </Box>
            </Box>

            <Box className='gallery-thumbnails'>
              {selectedProject.gallery.map((img, index) => (
                <Box
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`gallery-thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                  sx={{
                    backgroundImage: `url(${img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
              ))}
            </Box>
          </Box>
        )}
      </Dialog>
    </Box>
  );
};
