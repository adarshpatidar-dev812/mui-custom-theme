import React from "react";
// MUI
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// Route
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  const getCurrentYear = new Date().getFullYear();

  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          <Typography variant="h4">MUI Theme</Typography>
        </Toolbar>
      </AppBar>
      <Box
        comonent="main"
        pt={8}
        sx={{ width: "100%", height: "calc(100vh - 64px)", px: 1 }}
      >
        <Outlet />
      </Box>
      <Box
        component="footer"
        sx={{
          bgcolor: ({ palette }) =>
            palette.mode === "light"
              ? palette.primary.light
              : palette.grey[900],
        }}
      >
        <Toolbar>
          <Typography variant="overline">
            &#169; {getCurrentYear} Design & Developed By Appiy.
          </Typography>
        </Toolbar>
      </Box>
    </React.Fragment>
  );
};

export default PublicLayout;
