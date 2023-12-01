import React from "react";
import { Container, Box, CssBaseline, Typography, Button } from "@mui/material";
import CoffeeIcon from "@mui/icons-material/Coffee";

const FooterComponent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "orange",
      }}
    >
      <CssBaseline />

      <Box
        component="footer"
        sx={{
          p: 1.5,
          backgroundColor: "#111111",
          textAlign: "center",
          width: "60%",
          ml: "8%",
          position: "fixed",
          bottom: 0,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          align: "center",
        }}
      >
        <Typography variant="body1" sx={{ marginRight: "16px" }}>
          Built & developed by team Pixel Secret
        </Typography>
        <Button
          variant="contained"
          startIcon={<CoffeeIcon />}
          sx={{
            mt: "8px",
            backgroundColor: "#0C0C0C",
            color: "white",
          }}
        >
          Buy me a coffee
        </Button>
      </Box>
    </Box>
  );
};

export default FooterComponent;
