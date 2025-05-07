import React from 'react';
import { Container, Typography, Grid, Avatar, Box, Chip, Paper } from '@mui/material';
import { motion } from 'framer-motion';

function About() {
  return (
    <Box
      id="about"
      sx={{
        py: 8,
        background: 'linear-gradient(to right, #e3f2fd, #fff)',
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#1976d2',
              mb: 4,
            }}
          >
            About Me
          </Typography>

          <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={4}>
                <Avatar
                  alt="Your Name"
                  src="/profile.jpg"
                  sx={{
                    width: 180,
                    height: 180,
                    mx: 'auto',
                    border: '3px solid #1976d2',
                  }}
                />
              </Grid>

              <Grid item xs={12} md={8}>
                <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.8 }}>
                  Hello! I'm a passionate web developer with a strong interest in building modern, responsive websites.
                  I enjoy turning complex problems into simple, beautiful, and intuitive designs. I'm currently focused
                  on React , and always open to learning new technologies.
                </Typography>

                <Box sx={{ mt: 3 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#1976d2', mb: 1 }}>
                    Skills:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {['JavaScript', 'React', 'Material UI', 'HTML', 'CSS', 'Git','c++','java'].map(skill => (
                      <Chip key={skill} label={skill} color="primary" variant="outlined" />
                    ))}
                  </Box>
                </Box>

                {/* Download Resume Button */}
                <Box sx={{ mt: 4 }}>
                  <a
                    href="/resume.pdf"
                    download
                    style={{ textDecoration: 'none' }}
                  >
                    <Box
                      component="button"
                      sx={{
                        bgcolor: '#1976d2',
                        color: '#fff',
                        px: 3,
                        py: 1,
                        border: 'none',
                        borderRadius: 2,
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        '&:hover': {
                          bgcolor: '#1565c0',
                        },
                      }}
                    >
                      Download Resume
                    </Box>
                  </a>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
}

export default About;
