import { Box, Button, Grid, MenuItem, Select, TextField, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import React, { useState } from 'react';
import backgroundImage from '../../Assets/1.jpeg';

const Career = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (event) => {
    setSelectedClass(event.target.value);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement the logic to upload the selected file
    if (selectedFile) {
      console.log('Uploading file:', selectedFile);
      // Add your upload logic here
    } else {
      console.log('No file selected');
    }
  };

  return (
    <Box className="relative flex justify-center items-center" sx={{ minHeight: '100vh', overflow: 'hidden' }}>
      <Box className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-full object-cover opacity-100 blur-md"
          style={{ margin: 0, padding: 0 }}
        />
      </Box>
      <Box className="relative z-10 p-8 max-w-2xl mx-auto" sx={{ paddingTop: 0 }}>
        <Typography
          variant="h4"
          component="h2"
          className="font-bold text-center mb-4"
          sx={{
            fontFamily: 'Arial Black',
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#000000',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' // Add text shadow
          }}
        >
          Job Application Form
        </Typography><br/>
        <form className="space-y-6 bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="name"
                label="Name"
                type="text"
                variant="outlined"
                margin="normal"
                fullWidth
                required
                className="mb-2"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="email"
                label="Email"
                type="email"
                variant="outlined"
                margin="normal"
                fullWidth
                required
                className="mb-2"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="phone"
                label="Phone"
                type="tel"
                variant="outlined"
                margin="normal"
                fullWidth
                required
                className="mb-2"
              />
            </Grid>
            <Grid item xs={12} sm={6} style={{ marginTop: '16px' }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Applied Post</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectedClass}
                  label="Class"
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="PRT">PRT</MenuItem>
                  <MenuItem value="PGT">PGT</MenuItem>
                  <MenuItem value="TGT">TGT</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <label htmlFor="resume" className="block text-sm font-medium text-gray-700 ml-0 mb-2">Upload Resume</label>
              <div className="mt-1">
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
}

export default Career;