import React, { useState } from "react";
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
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleInputChange = (name, value) => {
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));


  };

  const [password, setPassword] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Password:", password);
    // Add your logic here, such as sending the password to the server
  };

 

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box className="step0-text-area">
            <TextField
              label="Enter Text"
              multiline
              rows={3}
              fullWidth
              variant="outlined"
              value={formData.text}
              onChange={(e) => handleInputChange("text", e.target.value)}
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
              <Box className="step3-password">
                <TextField
                  label="Enter Password"
                  type="password"
                  fullWidth
                  variant="outlined"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <Button variant="contained" onClick={handleBack}>
                  Back
                </Button>
                <Button variant="contained" onClick={handleSubmit}>
                  Next
                </Button>
              </Box>
            );

      case 4:
        return (
          <Box>
            <DownloadComponent />
            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          </Box>
        );

      default:
        return "Unknown step";
    }
  };

  const steps = ["Text Area", "Choose Files", "Algorithm","Password", "Download Files"];

  return (
    <form onSubmit={handleSubmit}>
      <Box className="vertical-stepper-container">
        <Typography variant="h6" className="stepper-title">
         Encode your message
        </Typography>
        {/* <Typography variant="body2" className="stepper-subtitle">
          Simple, fast, secure client-side file encryption
        </Typography> */}
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