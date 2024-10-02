

import React from 'react';
import { TextField, Button, Checkbox, FormControlLabel } from '@mui/material';
import PizzaImage from './PizzaImage';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Layout from './Layout';  
import '../static/Dashboard.css';

const Dashboard = () => {
  return (
    <Layout title="Pizza " showLeftPanelImage={true}>
      <div className="dashboard-container">
        <div className="left-panel">
          {/* Placeholder for left panel content */}
        </div>
        <div className="right-panel">
          <div className="image-title-container">
            <PizzaImage />
            {/* <h1 className="pizza-title">Pizza Admin Dashboard</h1> */}
          </div>
          <form className="form-container">
            <TextField label="Admin Name" variant="outlined" fullWidth className="text-field"/>
            <TextField label="Email address" variant="outlined" fullWidth className="text-field"/>
            <TextField label="Password" variant="outlined" type="password" fullWidth className="text-field"/>
            <TextField label="Confirm Password" variant="outlined" type="password" fullWidth className="text-field"/>
            <TextField label="Phone Number" variant="outlined" fullWidth className="text-field"/>
            <TextField label="Restaurant Name" variant="outlined" fullWidth className="text-field"/>
            <TextField label="Location" variant="outlined" fullWidth className="text-field"/>
            
            {/* Upload Button with Icon */}
            <Button
              variant="contained"
              color="primary"
              component="label"
              startIcon={<ArrowUpwardIcon />} 
              className="upload-button"
            >
              Upload Logo
              <input type="file" hidden />
            </Button>

            <FormControlLabel
              control={<Checkbox />}
              label="I agree to the Terms and Conditions"
              className="checkbox"
            />

            {/* Sign Up button with custom styling */}
            <Button variant="contained" className="sign-up-button" fullWidth>
              Sign Up
            </Button>

            <p>Already have an account? <a href="/login" className="login-button">Login</a></p>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;



// import React from 'react';
// import { TextField, Button, Checkbox, FormControlLabel } from '@mui/material';
// import '../static/Dashboard.css';
// import PizzaImage from './PizzaImage';
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

// const Dashboard = () => {
//   return (
//     <div className="dashboard-container">
//       <div className="left-panel">
//       <img src="/slice-of-pizza.svg" alt="Pizza" className="pizza-imageleft " />
//       </div>
//       <div className="right-panel">
//         {/* <img src="/slice-of-pizza.svg" alt="Pizza" className="pizza-image" /> */}
//         {/* <PizzaImage /> */}
//         <div className="image-title-container">
//           <PizzaImage />
//           <h1 className="pizza-title">Pizza</h1>
//         </div>
//         <form className="form-container">
//           <TextField label="Admin Name" variant="outlined" fullWidth />
//           <TextField label="Email address" variant="outlined" fullWidth />
//           <TextField label="Password" variant="outlined" type="password" fullWidth />
//           <TextField label="Confirm Password" variant="outlined" type="password" fullWidth />
//           <TextField label="Phone Number" variant="outlined" fullWidth />
//           <TextField label="Restaurant Name" variant="outlined" fullWidth />
//           <TextField label="Location" variant="outlined" fullWidth />
          
//            {/* Upload Button with Icon */}
//            <Button
//             variant="contained"
//             color="primary"
//             component="label"
//             startIcon={<ArrowUpwardIcon />} 
//             style={{ backgroundColor: 'orange', color: 'white' }}
//           >
//             Upload Logo
//             <input type="file" hidden />
//           </Button>
          
//           <FormControlLabel
//             control={<Checkbox />}
//             label="I agree to the Terms and Conditions"
//           />

//           {/* Sign Up button with custom styling */}
//           <Button variant="contained" className="sign-up-button" fullWidth>
//             Sign Up
//           </Button>

//           <p>Already have an account? <a href="/login" className="login-button">Login</a></p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
