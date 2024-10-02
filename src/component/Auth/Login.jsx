import React from 'react';
import { TextField, Button, Checkbox, FormControlLabel } from '@mui/material';
import Layout from '../Dashboard/Layout'; 
import '../static/Login.css';

const Login = () => {
  return (
    <Layout title="Login" showLeftPanelImage={true}> 
      <TextField label="Email Address" variant="outlined" fullWidth />
      <TextField label="Password" variant="outlined" type="password" fullWidth />
      <FormControlLabel control={<Checkbox />} label="Remember me" />
      <Button variant="contained" color="primary" fullWidth className="login-button">
        Login
      </Button>
      <p>Don't have an account? <a href="/signup" className='sign-up-text'>Sign Up</a></p>
    </Layout>
  );
};

export default Login;


