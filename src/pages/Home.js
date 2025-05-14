import React, { useRef } from 'react';
import {
  Container,
  Typography,
  Button,
  Box,
  Stack,
  Avatar,
  Grid,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Home() {
  const navigate = useNavigate();
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(to right, rgb(38, 25, 52), rgb(38, 95, 194))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          px: 2,
          position: 'relative',
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Avatar
              alt="Ayushi Jha"
              src={`${process.env.PUBLIC_URL}/profile.jpg`}
              sx={{
                width: 200,
                height: 200,
                mx: 'auto',
                mb: 2,
                border: '3px solid white',
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
              Hello, I'm Ayushi
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Typography variant="h6" sx={{ mb: 4 }}>
              <span style={{ color: '#00e6e6', fontWeight: 'bold' }}>
                <Typewriter
                  words={['Mern Stack Enthusiast👨‍💻', 'React Enthusiast ⚛️', 'UI/UX Designer 🎨']}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Button
                variant="contained"
                onClick={() => navigate('/projects')}
                sx={{
                  bgcolor: 'white',
                  color: '#2575fc',
                  borderRadius: '50px',
                  px: 4,
                  py: 1.5,
                  fontWeight: 'bold',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: '#f0f0f0',
                    transform: 'scale(1.05)',
                  },
                }}
              >
                View Projects
              </Button>

              <Button
                variant="outlined"
                onClick={() => navigate('/contact')}
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  borderRadius: '50px',
                  px: 4,
                  py: 1.5,
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'scale(1.05)',
                  },
                }}
              >
                Contact Me
              </Button>
            </Stack>
          </motion.div>
        </Container>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          style={{
            position: 'absolute',
            bottom: 20,
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'white',
            cursor: 'pointer',
          }}
          onClick={scrollToAbout}
        >
          <KeyboardArrowDownIcon fontSize="large" />
        </motion.div>
      </Box>

      {/* A Bit About Me Section */}
      <Box ref={aboutRef} sx={{ minHeight: '100vh', backgroundColor: '#f7f7f7', py: 10 }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Grid container spacing={6} alignItems="center">
              {/* Image Left */}
              <Grid item xs={12} md={5}>
                <Avatar
        src={`${process.env.PUBLIC_URL}/profile.jpg`}         
         alt="Ayushi Jha"
                  sx={{
                    width: { xs: 200, md: 250 },
                    height: { xs: 200, md: 250 },
                    mx: 'auto',
                    border: '4px solid #2575fc',
                    boxShadow: 4,
                  }}
                />
              </Grid>

              {/* Content Right */}
              <Grid item xs={12} md={7}>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 'bold', color: '#333', mb: 2 }}
                >
                  A Bit About Me
                </Typography>
                <Typography variant="h6" sx={{ color: '#666', mb: 1 }}>
                  Web Developer | Designer | Problem Solver
                </Typography>
                <Typography variant="body1" sx={{ color: '#555' }}>
                  I'm a web developer passionate about creating dynamic and user-friendly websites.
                  I work with React, JavaScript, and UI libraries like Material-UI to build beautiful,
                  accessible, and fast applications. I'm always learning and love working on projects
                  that challenge and inspire me.
                </Typography>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>
    </>
  );
}

export default Home;
