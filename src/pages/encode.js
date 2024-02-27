import React, { useState } from "react";
import axios from 'axios'; 
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Box,
  TextField,
} from "@mui/material";

import FileUploadComponent from "../components/body/fileUpload";
import DropdownTextField from "../components/body/algorithmType";
import DownloadComponent from "../components/body/downloadFile";

import "./steps.css";

const VerticalStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    text: "",
    file: null,
    algorithm: "",
    password: ""
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleInputChange = (name, value) => {
    if (name === "file") {
      // If the input is a file, update the formData with the file object and its name
      setFormData((prevFormData) => ({
        ...prevFormData,
        file: value,
        fileName: value ? value.name : null, // Add the file name to the formData
      }));
    } else if (name === "algorithm") {
      // If the input is an algorithm, directly update the formData
      setFormData((prevFormData) => ({
        ...prevFormData,
        algorithm: value,
      }));
    } else {
      // For other inputs, directly update the formData
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };
  
  

  
  const handleSubmit = async () => { // Remove the event parameter
    try {
      // Simulate successful response locally
      console.log('Form Data:', formData);
      console.log('Form submitted successfully');
      // Handle success 
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error 
    }
  };
  
  const handleDownload = async () => {
    console.log("Download button clicked");
    try {
      await handleSubmit(); // Call handleSubmit without passing event
      console.log("Form submitted successfully and files downloaded");
    } catch (error) {
      console.error('Error downloading files:', error);
    }
  };
  
  
  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box className="step0-text-area">
            <TextField
              label="Enter Text"
              className="textField-custom" 
              multiline
              rows={3}
              fullWidth
              variant="outlined"
              value={formData.text}
              onChange={(e) => handleInputChange("text", e.target.value)}
              InputProps={{ style: { color: 'white' } }} 
              InputLabelProps={{
                style: { color: 'grey', fontSize: 14 }
              }}
            />
            <Box className="step0-button">
              <Button
                variant="contained"
                onClick={handleNext}
                disabled={activeStep === steps.length - 1}
              >
                Next
              </Button>
            </Box>
          </Box>
        );
  
      case 1:
        return (
          <Box className="step1-file-upload">
            <FileUploadComponent
              onFileChange={(file) => handleInputChange("file", file)}
            />
            <Box className="step1-button">
              <Button
                variant="contained"
                onClick={handleNext}
                disabled={activeStep === steps.length - 1}
              >
                Next
              </Button>
            </Box>
          </Box>
        );
  
      case 2:
        return (
          <Box className="step2-dropdown">
            <DropdownTextField
              onSelect={(value) => handleInputChange("algorithm", value)}
            />
            <Box className="step2-button">
              <Button
                variant="contained"
                onClick={handleNext}
                disabled={activeStep === steps.length - 1}
              >
                Next
              </Button>
            </Box>
          </Box>
        );
  
      case 3:
        return (
          <Box className="step3-password step0-text-area">
            <TextField
              className="textField-custom"
              label="Enter Password"
              type="password"
              fullWidth
              variant="outlined"
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              InputProps={{ style: { color: 'white' } }} 
              InputLabelProps={{
                style: { color: 'grey', fontSize: 14 }
              }}
            />
            <Box className="step1-button">
              <Button
                variant="contained"
                onClick={handleNext}
                disabled={activeStep === steps.length -1}
              >
                Next
              </Button>
            </Box>
          </Box>
        );
  
      case 4:
        return (
          <Box>
            <DownloadComponent />
            <Box className="step4-button">
              <Button
                variant="contained"
                onClick={handleDownload}
                disabled={activeStep === steps.length}
              >
                Download
              </Button>
            </Box>
          </Box>
        );
  
      default:
        return "Unknown step";
    }
  };
  
  const steps = ["Text Area", "Choose Files", "Algorithm", "Password", "Download Files"];

  return (
    <form onSubmit={handleSubmit}>
      <Box className="vertical-stepper-container">
        <Typography variant="h6" className="stepper-title">
         Encode your message
        </Typography>
        
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>
                <Box className="step-label-box">{label}</Box>
              </StepLabel>
              {activeStep === index && (
                <Box className="step-content-box">
                  {getStepContent(index)}
                </Box>
              )}
            </Step>
          ))}
        </Stepper>
      </Box>
    </form>
  );
};

export default VerticalStepper;
