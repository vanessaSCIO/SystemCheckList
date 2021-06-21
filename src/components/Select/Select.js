import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { FormControl, Select, InputBase } from "@material-ui/core";
import useStyles from "./style";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(1),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "#ffff",
    color: "#5b90c5",
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
      backgroundColor: "#ffff",
    },
  },
}))(InputBase);

export default function CustomSelect() {
  const classes = useStyles();

  const [operation, setOperation] = useState("");

  const handleChange = (event) => {
    setOperation(event.target.value);
  };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <Select
        native
        value={operation}
        onChange={handleChange}
        label="Operação"
        input={<BootstrapInput />}
      >
        <option value={1}>CTI</option>
        <option value={2}>OMNI</option>
      </Select>
    </FormControl>
  );
}
