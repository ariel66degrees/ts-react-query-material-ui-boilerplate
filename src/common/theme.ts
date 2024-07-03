// src/theme.ts
import { createTheme } from "@mui/material/styles";
import { green } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: green[700],
    },
  },
});

export default theme;
