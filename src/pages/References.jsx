import React, { useEffect, useRef } from 'react';
import { Box, Typography, Container, Card, CardMedia, CardContent } from '@mui/material';
import './References.css';

const projectsData = [
  {
    year: '2021',
    milestone: 'Expansion Year',
    projects: [
      {
        title: 'Mountain Lodge & Spa',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
        description: 'Luxury mountain retreat with modern amenities'
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
        description: 'Sustainable urban development project'
      },
      {
        title: 'Urban Regeneration Hub, Copenhagen',
        image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80',
        description: 'Mixed-use commercial and residential space'
      },
      {
        title: 'Urban Regeneration Hub, Copenhagen',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
        description: 'Contemporary office complex'
      },
      {
        title: 'Urban Regeneration Hub, Copenhagen',
        image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&q=80',
        description: 'Green building initiative'
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
        description: 'Our first major project'
      },
      {
        title: 'Residential Complex',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
        description: 'Modern living spaces'
      }
    ]
  }
];

export const References = () => {
  const timelineRefs = useRef([]);

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
          Projekte nach Jahren
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
    </Box>
  );
};
