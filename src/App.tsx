// src/App.tsx
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider, CssBaseline } from "@mui/material";
import HomePage from "./pages/HomePage";
import theme from "./common/theme";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HomePage />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
