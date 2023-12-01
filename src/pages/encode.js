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

const steps = ["Text Area", "Choose Files", "Algorithm", "Download Files"];

const VerticalStepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box sx={{ width: "600px", textAlign: "left" }}>
            <TextField
              label="Enter Text"
              multiline
              rows={4}
              fullWidth
              variant="outlined"
              // value={text}
              // onChange={handleTextChange}
              sx={{
                "& .MuiInputBase-input": {
                  color: "#7B7A7A", // Set the text color
                },
                "& .MuiInputLabel-root": {
                  color: "#4E4E4E", // Set the hint color
                },
                "& .MuiInput-underline:before": {
                  borderBottomColor: "#7B7A7A", // Set the underline color
                },
                "& .MuiInput-underline:hover:before": {
                  borderBottomColor: "#1F1F1F", // Set the underline color on hover
                },
              }}
            />

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "16px",
              }}
            >
              <Button
                sx={{
                  backgroundColor: "#353535",
                  "&:hover": {
                    backgroundColor: "#141414", // Set the background color on hover
                  },
                }}
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
          <Box sx={{ width: "600px", textAlign: "left" }}>
            <FileUploadComponent></FileUploadComponent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "16px",
              }}
            >
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{
                  backgroundColor: "#353535",
                  "&:hover": {
                    backgroundColor: "#141414", // Set the background color on hover
                  },
                }}
                disabled={activeStep === steps.length - 1}
              >
                Next
              </Button>
            </Box>
          </Box>
          // <Box sx={{ width: "400px", textAlign: "left" }}>
          //   <Typography>Step 2 Content</Typography>
          //   <label htmlFor="upload-button">
          //     <input
          //       style={{ display: "none" }}
          //       accept="image/*"
          //       id="upload-button"
          //       type="file"
          //     />
          //     <Button
          //       variant="contained"
          //       component="span"
          //       startIcon={<CloudUploadIcon />}
          //     >
          //       Upload Image
          //     </Button>
          //   </label>
          //   <TextField
          //     label="Enter Text"
          //     variant="outlined"
          //     fullWidth
          //     margin="normal"
          //   />
          //   <Box
          //     sx={{
          //       display: "flex",
          //       justifyContent: "flex-end",
          //       marginTop: "16px",
          //     }}
          //   >
          //     <Button
          //       variant="contained"
          //       onClick={handleNext}
          //       disabled={activeStep === steps.length - 1}
          //     >
          //       Next
          //     </Button>
          //   </Box>
          // </Box>
        );

      case 2:
        return (
          <Box sx={{ width: "600px", textAlign: "left" }}>
            <DropdownTextField></DropdownTextField>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "16px",
              }}
            >
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{
                  backgroundColor: "#353535",
                  "&:hover": {
                    backgroundColor: "#141414", // Set the background color on hover
                  },
                }}
                disabled={activeStep === steps.length - 1}
              >
                Next
              </Button>
            </Box>
          </Box>
        );

      case 3:
        return (
          <Box sx={{ width: "600px", textAlign: "left" }}>
            <DownloadComponent></DownloadComponent>
          </Box>
        );

      default:
        return "Unknown step";
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        width: "50%", // Set the fixed width for the container
        margin: "auto", // Center the container horizontally
      }}
    >
      <Typography
        variant="h4"
        color="#7B7A7A"
        textAlign={"center"}
        sx={{ pt: "45px", pb: "0px" }}
      >
        Pixel Secrets
      </Typography>
      <Typography
        variant="body2"
        color="#7B7A7A"
        sx={{ pt: "15px", pb: "30px" }}
        textAlign={"center"}
      >
        Simple, fast, secure client-side file encryption
      </Typography>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "left",
                  color: "#7B7A7A",

                  // borderLeft:
                  //   activeStep === index ? "2px solid #bdbdbd" : "none",
                  // paddingLeft: "8px", // Adjust padding for the left border
                }}
              >
                {label}
              </Box>
            </StepLabel>
            {activeStep === index && (
              <Box
                sx={{ marginLeft: "50px", marginRight: "16px", width: "100%" }}
              >
                {getStepContent(index)}
              </Box>
            )}
          </Step>
        ))}
      </Stepper>
      {/* <Box sx={{ marginTop: "16px" }}>
        {activeStep !== steps.length - 1 && (
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1, backgroundColor: "#111111", color: "#FFFFFF" }}
            >
              Back
            </Button>
            <Button variant="contained" onClick={handleNext}>
              Next
            </Button>
          </Box>
        )}
      </Box> */}
    </Box>
  );
};

export default VerticalStepper;
