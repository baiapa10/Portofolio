import React from "react";
import { Button, Typography, ThemeProvider, createTheme } from "@mui/material";
// import Welcome from "./pages/Welcome";
// import PortfolioSection from "./pages/components/Porto";
// import VerticalLinearStepper from "./pages/components/Portofolio";
import Portofolio from "./pages/porto/Portofolio";

// Buat tema kustom
const theme = createTheme({
  palette: {
    primary: {
      main: "#1A237E", // Warna biru
    },
    secondary: {
      main: "#37474F", // Warna mint
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Welcome/> */}
      <Portofolio/>
    </ThemeProvider>
  );
}

export default App;
