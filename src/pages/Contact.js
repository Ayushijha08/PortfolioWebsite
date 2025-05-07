import React from 'react';
import { Box, Container, Typography, Stack, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Email, LinkedIn, GitHub, Phone } from '@mui/icons-material';

const MotionButton = motion(Button);

function Contact() {
  return (
    <Box
      sx={{
        py: { xs: 6, sm: 8 },
        px: 2,
        background: 'linear-gradient(to right, #e0f7fa, #f5f5f5)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'top',
        justifyContent: 'center',
      }}
      id="contact"
    >
      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              textAlign: 'center',
              color: '#00796b',
            }}
          >
            Contact Me
          </Typography>

          <Typography
            variant="h6"
            sx={{
              mb: 4,
              textAlign: 'center',
              color: '#555',
            }}
          >
            I'm always open to new opportunities and collaboration. Reach out to me below!
          </Typography>

          <Stack spacing={2}>
            <MotionButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variant="contained"
              startIcon={<Email />}
              href="mailto:your-email@example.com"
              sx={{
                textTransform: 'none',
                borderRadius: '10px',
                backgroundColor: '#00796b',
                '&:hover': { backgroundColor: '#004d40' },
              }}
            >
              kumariayushi260804@gmail.com
            </MotionButton>

            <MotionButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variant="contained"
              startIcon={<LinkedIn />}
              href="https://www.linkedin.com/in/ayushi-kumari-26990b276"
              target="_blank"
              sx={{
                textTransform: 'none',
                borderRadius: '10px',
                backgroundColor: '#0077b5',
                '&:hover': { backgroundColor: '#005983' },
              }}
            >
              LinkedIn Profile
            </MotionButton>

            <MotionButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variant="contained"
              startIcon={<GitHub />}
              href="https://github.com/Ayushijha08"
              target="_blank"
              sx={{
                textTransform: 'none',
                borderRadius: '10px',
                backgroundColor: '#333',
                '&:hover': { backgroundColor: '#000' },
              }}
            >
              GitHub Profile
            </MotionButton>

            <MotionButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variant="contained"
              startIcon={<Phone />}
              href="tel:7256089852"
              sx={{
                textTransform: 'none',
                borderRadius: '10px',
                backgroundColor: '#0288d1',
                '&:hover': { backgroundColor: '#01579b' },
              }}
            >
              +91 7256089852
            </MotionButton>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Contact;
