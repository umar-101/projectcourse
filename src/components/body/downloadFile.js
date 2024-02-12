import React from "react";
import { Typography, Button, Container, Box } from "@mui/material";

const DownloadComponent = () => {
  const handleDownload = () => {
    // Implement your download logic here
    console.log("Download button clicked");
  };

  return (
    <Container maxWidth="sm">
      <Box display="flex" flexDirection="column" alignItems="flex-end">
        <Typography variant="body1" sx={{ marginBottom: 2, fontSize: 14 , color: 'grey'}}>
          Your files are loaded successfully and are ready to encrypt.
        </Typography>
        
      </Box>
    </Container>
  );
};

export default DownloadComponent;
