import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio built with React and Material-UI to showcase skills and projects.',
    image: `${process.env.PUBLIC_URL}/portfolio.png`,
    link: 'https://ayushijha08.github.io/PortfolioWebsite/',
  },
  {
    title: 'Task Manager',
    description: 'A simple and intuitive To-Do list application built using React and localStorage.',
    image: `${process.env.PUBLIC_URL}/todo.png`,
    link: 'https://ayushijha08.github.io/TaskManager/',
  },
  // Add more projects here
];

function Projects() {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleImageClick = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

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
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden', cursor: 'pointer' }}
                    onClick={() => handleImageClick(project)}
                  >
                    <CardMedia
                      component="img"
                      height="160"
                      image={project.image}
                      alt={project.title}
                      sx={{ transition: 'transform 0.3s ease', width: '100%', objectFit: 'cover' }}
                    />
                  </motion.div>

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

      {/* Zoom Modal */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {selectedProject?.title}
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <img
            src={selectedProject?.image}
            alt={selectedProject?.title}
            style={{ width: '100%', height: 'auto', borderRadius: 8 }}
          />
          <Typography variant="body1" sx={{ mt: 2 }}>
            {selectedProject?.description}
          </Typography>
        </DialogContent>
      </Dialog>
    </Container>
  );
}

export default Projects;
