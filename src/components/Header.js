import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const Header = () =>  {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" style={{textAlign:"center"}}>
              Honey Supply Chain Provenance App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}