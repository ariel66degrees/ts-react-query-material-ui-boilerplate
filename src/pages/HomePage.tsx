// src/pages/HomePage.tsx
import React from "react";
import { Box, Container, Paper, Typography } from "@mui/material";
import AddUserForm from "../components/AddUserForm";
import UserList from "../components/UserList";

const HomePage: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          marginTop: 4,
        }}
      >
        <Typography variant="h4" gutterBottom>
          User Management
        </Typography>
        <Box sx={{ display: "flex", gap: 4, width: "100%" }}>
          <Paper elevation={3} sx={{ padding: 3, flex: 1 }}>
            <AddUserForm />
          </Paper>
          <Paper elevation={3} sx={{ padding: 3, flex: 1 }}>
            <UserList />
          </Paper>
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;
