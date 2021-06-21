import React from "react";
import { Link } from "react-router-dom";

import {
  MenuItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@material-ui/core";

import useStyles from "./style";

export default function CustomMenuItem({
  text,
  icon: Icon,
  button,
  linkTo,
  onClick,
}) {
  const classes = useStyles();

  return (
    <MenuItem
      disableRipple
      disableElevation
      disableFocusRipple
      button={!button}
      component={linkTo && Link}
      className={!button ? classes.item : classes.btnItem}
      to={linkTo}
      onClick={onClick}
    >
      {button ? (
        <Button
          fullWidth
          className={classes.btn}
          color="primary"
          variant="contained"
        >
          <Icon className={classes.btnIcon} />
          <span>{text}</span>
        </Button>
      ) : (
        <>
          <ListItemIcon className={classes.itemIcon}>
            <Icon className={classes.icon} />
          </ListItemIcon>

          <ListItemText primary={text} className={classes.itemText} />
        </>
      )}
    </MenuItem>
  );
}
