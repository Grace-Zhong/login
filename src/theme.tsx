import { createTheme } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 374, // phone
      md: 1024, // tablet
      lg: 1440, // desktop
      xl: 1920,
    },
  },
});


export default theme;