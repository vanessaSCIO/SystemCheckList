import React from "react";

import { AppBar, Toolbar, Container, Grid } from "@material-ui/core";
import MenuPerfil from "./MenuPerfil/MenuPerfil";
import logoScio from "../../resources/images/scio.png";
import CustomSelect from "../Select/Select";
import useStyles from "./style";

export default function CustomAppBar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.appbar} position="relative">
      <Toolbar className={classes.toolbar} disableGutters>
        <Container maxWidth="xl" className={classes.container}>
          <Grid
            container
            alignItems="center"
            wrap="nowrap"
            className={classes.h100}
          >
            <Grid item className={classes.logoItem}>
              <img src={logoScio} alt="SCIO" height="44" />
            </Grid>
            <Grid className={classes.menuSelect}>
              <CustomSelect />
            </Grid>
            <Grid item className={classes.menuPerfil}>
              <MenuPerfil />
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
