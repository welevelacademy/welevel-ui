import { Button, Paper, Typography } from "@material-ui/core";
import { Meta, Story } from "@storybook/react";

import { createWelevelUITheme, lightTheme } from "../../utilities";
import {
  WelevelUIThemeProvider,
  WelevelUIThemeProviderProperties,
} from "./WelevelUIThemeProvider";

export default {
  component: WelevelUIThemeProvider,
  title: "Theme/WelevelUIThemeProvider",
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<WelevelUIThemeProviderProperties> = (args) => (
  <WelevelUIThemeProvider theme={args.theme}>
    <div
      style={{
        display: "flex",
        backgroundColor: args.theme.palette.background.default,
        padding: `${args.theme.spacing(2)}px`,
      }}
    >
      <Paper
        elevation={1}
        style={{
          display: "flex",
          gap: `${args.theme.spacing(1)}px`,
          flex: "0 0 auto",
          padding: `${args.theme.spacing(2)}px`,
          flexDirection: "column",
        }}
      >
        <Typography>
          Create a new theme with the
          <br />
          <b>createWelevelUITheme()</b> method.
        </Typography>

        <Typography>
          Generate a new color palette with the
          <br />
          <b>
            theme.palette.augmentColor{`({ main: "#0a644c" })`}
          </b> method, <br />
          this will add the light, dark and contrastText shade.
        </Typography>

        <Typography variant="body2" color="textSecondary">
          * Properties in array like shadows will be completely replaced.
          <br />
          Thank you for reading
        </Typography>

        <div
          style={{
            paddingTop: `${args.theme.spacing(2)}px`,
            display: "flex",
            gap: `${args.theme.spacing(1)}px`,
            flex: "1 1 auto",
            justifyContent: "flex-end",
          }}
        >
          <Button variant="outlined" color="primary">
            Restyled Button
          </Button>
          <Button variant="contained" color="primary">
            Restyled Button
          </Button>
        </div>
      </Paper>
    </div>
  </WelevelUIThemeProvider>
);

export const Base = Template.bind({});

// Necessary for creating a new color palette with dark and light shade
const newPrimaryPalette = lightTheme.palette.augmentColor({ main: "#0a644c" });

Base.args = {
  theme: createWelevelUITheme({
    type: "light",
    customLightTheme: {
      palette: {
        primary: {
          ...newPrimaryPalette,
        },
        background: {
          paper: "#ffebe9",
          default: "#fffaf4",
        },
      },
      typography: {
        body1: {
          color: "rgba(0,0,0,0.72)",
        },
      },
      shadows: [
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
      ],
      overrides: {
        MuiButton: {
          contained: {
            borderRadius: "800px",
          },
          outlined: {
            borderRadius: "800px",
          },
        },
      },
    },
  }),
};
