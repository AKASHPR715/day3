import React, { useState } from 'react';
import { TextField, Button, Box, Grid } from '@mui/material';

function Add() {
  const [formData, setFormData] = useState({
    movieName: '',
    director: '',
    category: '',
    releaseYear: '',
    image: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle form submission, e.g., sending data to a server or performing any necessary actions
    console.log(formData); // For demonstration, you can log the form data to console
    // Reset form after submission if needed
    setFormData({
      movieName: '',
      director: '',
      category: '',
      releaseYear: '',
      image: ''
    });
  };

  return (
    <Box
      component="form"
      sx={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '16px' }}
      onSubmit={handleSubmit}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="movieName"
            name="movieName"
            label="Movie Name"
            variant="filled"
            value={formData.movieName}
            onChange={handleInputChange}
            InputProps={{ sx: { backgroundColor: 'white' } }}
            InputLabelProps={{ sx: { color: 'black' } }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="director"
            name="director"
            label="Director"
            variant="filled"
            value={formData.director}
            onChange={handleInputChange}
            InputProps={{ sx: { backgroundColor: 'white' } }}
            InputLabelProps={{ sx: { color: 'black' } }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="category"
            name="category"
            label="Category"
            variant="filled"
            value={formData.category}
            onChange={handleInputChange}
            InputProps={{ sx: { backgroundColor: 'white' } }}
            InputLabelProps={{ sx: { color: 'black' } }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="releaseYear"
            name="releaseYear"
            label="Release Year"
            variant="filled"
            value={formData.releaseYear}
            onChange={handleInputChange}
            InputProps={{ sx: { backgroundColor: 'white' } }}
            InputLabelProps={{ sx: { color: 'black' } }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="image"
            name="image"
            label="Image URL"
            variant="filled"
            value={formData.image}
            onChange={handleInputChange}
            InputProps={{ sx: { backgroundColor: 'white' } }}
            InputLabelProps={{ sx: { color: 'black' } }}
          />
        </Grid>
      </Grid>
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </Box>

    
  );
}

export default Add;
