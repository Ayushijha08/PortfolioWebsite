import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio built with React and Material-UI to showcase skills and projects.',
    image: '/portfolio.png',
    link: 'https://your-portfolio.vercel.app',
  },
  {
    title: 'To-Do App',
    description: 'A simple and intuitive To-Do list application built using React and localStorage.',
    image: '/todo.png',
    link: 'https://github.com/yourusername/todo-app',
  },
  // Add more projects here
];

function Projects() {
  return (
    <Container id="projects" sx={{ py: 10 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', mb: 6, color: '#1976d2' }}>
          My Projects
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="img"
                    height="160"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href={project.link} target="_blank" rel="noopener" color="primary">
                      View
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
}

export default Projects;
