import React, { useState } from "react";
import {
  FormControl,
  Grid,
  Button,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import logoScio from "../../resources/images/LogoScio.png";
import TextFieldInput from "../../components/input/TextFieldInput";
import useStyles from "./style";

export default function Login() {
  const [state, setState] = useState({
    checkedUser: true,
  });
  const classes = useStyles();

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className={classes.container}>
      <Grid container wrap="nowrap">
        <FormControl className={classes.form}>
          <img className={classes.logo} alt="SCIO" src={logoScio} />
          <Grid
            container
            direction="column"
            justify="center"
            wrap="nowrap"
            spacing={2}
            className={classes.formContainer}
          >
            <Grid item wrap="nowrap" alignItems="flex-end">
              <TextFieldInput label="Usuário" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextFieldInput label="Senha" fullWidth password />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleChange}
                    name="checkedUser"
                    color="primary"
                  />
                }
                label=" Lembrar Usuário"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                className={classes.btn}
                variant="contained"
                color="primary"
              >
                ENTRAR
              </Button>
            </Grid>
          </Grid>
        </FormControl>
      </Grid>
    </div>
  );
}
