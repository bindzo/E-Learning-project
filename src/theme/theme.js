import { createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#f7c7cf",
      main: "#ffffff",
      dark: "#6c737e",
    },
    secondary: {
      main: "#ec5252",
    },
    backgound: {
      grey: {
        main: "#607d8b",
      },
      red: {},
    },
    text: {
      primary: "#135364",
      secondary: "#000000",
      red: "#ff0000",
    },
  },
  typography: {
    subtitle1: {
      fontSize: "16",
      fontWeight: "300",
    },
  },
  spacing: 10,
});

export default theme;
