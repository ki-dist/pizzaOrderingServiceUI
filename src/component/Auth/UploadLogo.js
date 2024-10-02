import React, { useState } from 'react';
import { Button, LinearProgress } from '@mui/material';
import UploadService from '../../services/UploadService'; 
function UploadLogo() {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleLogoUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    
    setUploading(true);
    try {
      await UploadService.uploadFile(file, (progressEvent) => {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        setProgress(percentCompleted);
      });
    } catch (err) {
      console.error('File upload failed:', err);
    }
    setUploading(false);
  };

  return (
    <div>
      <Button variant="contained" component="label" color="secondary">
        Upload Logo
        <input hidden accept="image/*" type="file" onChange={handleLogoUpload} />
      </Button>
      {uploading && <LinearProgress variant="determinate" value={progress} />}
    </div>
  );
}

export default UploadLogo;
