import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
 
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Projects', path: '/projects' },
    { title: 'Contact', path: '/contact' }
  ];

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between', background: "linear-gradient(to right,rgb(66, 176, 223), #203a43,rgb(11, 56, 75))"}}>
        <Typography 
        style={{fontWeight:'bold'}}
        variant="h6" component="div">
          Ayushi Jha 
        </Typography>

        {isMobile ? (
          <>
            <IconButton color="inherit" edge="end" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
              <Box sx={{ width: 250 }} onClick={toggleDrawer(false)}>
                <List>
                  {navLinks.map((item) => (
                    <ListItem button component={RouterLink} to={item.path} key={item.title}>
                      <ListItemText primary={item.title} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          <Box>
            {navLinks.map((item) => (
              <Button
              key={item.title}
              color="inherit"
              component={RouterLink}
              to={item.path}
              sx={{
                mx: 1,
                position: 'relative',
                fontWeight: 'bold',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.1)',
                  '&::after': {
                    width: '100%',
                  },
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  bottom: -2,
                  height: '2px',
                  width: '0%',
                  backgroundColor: 'white',
                  transition: 'width 0.3s ease',
                },
              }}
            >
              {item.title}
            </Button>
            
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
