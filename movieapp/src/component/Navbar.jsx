import React from 'react';
import Button from '@mui/material/Button';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', mt: 2 }}>
      <AppBar 
        position="static" 
        sx={{ 
          width: '500%', // Adjust the width as needed
          maxWidth: '1200px', // Set a maximum width for larger screens
          height: '64px', // Adjust the height as needed
          borderRadius: 1, 
          boxShadow: 3, 
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          top: '100px', // Adjust the top position
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Movie App
          </Typography>
          <Button 
            component={Link} 
            to="/view" 
            color="inherit" 
            sx={{ 
              background: 'rgba(255, 255, 255, 0.1)', 
              borderRadius: 1, 
              px: 2, 
              '&:hover': {
                background: 'rgba(255, 255, 255, 0.2)'
              }
            }}
          >
            View
          </Button>
          <Button 
            component={Link} 
            to="/add" 
            color="inherit" 
            sx={{ 
              ml: 1, 
              background: 'rgba(255, 255, 255, 0.1)', 
              borderRadius: 1, 
              px: 2, 
              '&:hover': {
                background: 'rgba(255, 255, 255, 0.2)'
              }
            }}
          >
            Add
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
