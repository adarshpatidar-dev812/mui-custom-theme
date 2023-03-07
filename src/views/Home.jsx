import React from "react";
// MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
// Custom
import ThemeTogglerButton from "../theme/ThemeTogglerButton";

const Home = () => {
  return (
    <Box sx={{ width: "100%", height: "100%", py: 3 }}>
      <Container maxWidth={false} sx={{ height: "100%" }}>
        <Card sx={{ width: "100%", height: "100%" }}>
          <CardContent sx={{ width: "100%", height: "100%" }}>
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="center"
              spacing={2}
              sx={{ width: "100%", height: "100%" }}
            >
              <Typography variant="h2">Material UI Customize Theme</Typography>
              <Typography variant="h3" textAlign="center">
                Theme Toggle Button
                <Typography
                  variant="caption"
                  component="p"
                  sx={{ pt: 1, color: ({ palette }) => palette.text.secondary }}
                >
                  Toggle button To Change Between Light & Dark Mode
                </Typography>
              </Typography>
              <Box pt={1}>
                <ThemeTogglerButton />
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Home;
