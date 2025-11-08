import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, useTheme } from '@mui/material';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import EngineeringIcon from '@mui/icons-material/Engineering';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';

const services = [
  {
    title: 'Architekturentwurf',
    icon: <ArchitectureIcon fontSize='large' />,
    description:
      'Ganzheitliche Entwürfe für Wohn-, Geschäfts- und öffentliche Räume unter Verwendung von CAD- und BIM-Technologien. Enthält 2D-Zeichnungen, 3D-Modelle und detaillierte Visualisierungen.'
  },
  {
    title: 'Innenarchitektur',
    icon: <DesignServicesIcon fontSize='large' />,
    description:
      'Konzeptionelle Innenraumplanung, Moodboards, Farbkonzepte, Materialauswahl und Möbelanordnung für optimale Ästhetik und Funktionalität.'
  },
  {
    title: 'Tragwerksplanung',
    icon: <EngineeringIcon fontSize='large' />,
    description:
      'Zusammenarbeit mit Ingenieuren für statische Analysen und Einhaltung der Sicherheitsstandards. Beinhaltet Lastberechnungen und technische Berichte.'
  },
  {
    title: 'Sanierung & Restaurierung',
    icon: <HomeRepairServiceIcon fontSize='large' />,
    description:
      'Erhaltung und Anpassung bestehender Bauten unter Berücksichtigung historischer Werte und moderner Designanforderungen. Inklusive Vor-Ort-Erhebungen und Planaktualisierungen.'
  },
  {
    title: 'Nachhaltiges Design',
    icon: <NaturePeopleIcon fontSize='large' />,
    description:
      'Umweltbewusste Planung mit Fokus auf passive Solartechniken, Energieeffizienz und nachhaltige Materialien. LEED-orientierte Vorgehensweise.'
  },
  {
    title: '3D-Visualisierung & CAD-Zeichnung',
    icon: <AutoAwesomeIcon fontSize='large' />,
    description:
      'Hochwertige Renderings, fotorealistische Rundgänge und technische CAD-Zeichnungen zur Visualisierung und Dokumentation Ihrer architektonischen Vision.'
  }
];

export const Services = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: 6, backgroundColor: '#fafafa' }}>
      <Container>
        <Typography variant='h4' textAlign='center' fontWeight='bold' gutterBottom>
          Unsere Leistungen
        </Typography>
        <Typography variant='subtitle1' textAlign='center' color='text.secondary' mb={4}>
          Wir bieten ein umfassendes Spektrum an architektonischen Dienstleistungen von der Konzeption bis zur Ausführung.
        </Typography>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card elevation={3} sx={{ p: 2, height: '100%' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    {service.icon}
                    <Typography variant='h6' fontWeight='bold' ml={2}>
                      {service.title}
                    </Typography>
                  </Box>
                  <Typography variant='body2' color='text.secondary'>
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
