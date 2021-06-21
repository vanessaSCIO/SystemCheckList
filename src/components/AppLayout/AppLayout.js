import React from "react";

// Material UI
import { Box, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: { backgroundColor: "#F8F8F8" },
  container: { minHeight: "100vh", marginTop: -72 },
  containerFull: { minHeight: "100vh" },
}));

export default function AppLayout({
  children,
  noMarginTop,
  noMarginBottom,
  fullscreen,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container
        maxWidth="lg"
        className={fullscreen ? classes.containerFull : classes.container}
      >
        <Box
          paddingTop={noMarginTop ? 0 : 10}
          paddingBottom={noMarginBottom ? 0 : 5}
        >
          {children}
        </Box>
      </Container>
    </div>
  );
}
