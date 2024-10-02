import React from 'react';
import { TextField, Button } from '@mui/material';
import Layout from '../Dashboard/Layout'; 
import '../static/SignUp.css';

const SignUp = () => {
  return (
    <Layout title="Add Admin">
      <TextField label="Admin Name" variant="outlined" fullWidth className="text-field" />
      <TextField label="Email Address" variant="outlined" fullWidth className="text-field" />
      <TextField label="Phone Number" variant="outlined" fullWidth className="text-field" />
      <TextField label="Password" variant="outlined" type="password" fullWidth className="text-field" />
      <TextField label="Confirm Password" variant="outlined" type="password" fullWidth className="text-field" />
      <Button variant="contained" color="primary" fullWidth className="continue-button">
        Continue
      </Button>
    </Layout>
  );
};

export default SignUp;


