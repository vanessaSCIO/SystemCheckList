import React, { useCallback, useRef, useState } from "react";

import {
  Button,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuList,
  Avatar,
} from "@material-ui/core";

import {
  ArrowDropDown as ArrowIcon,
  ExitToAppRounded as ExitIcon,
} from "@material-ui/icons";

import MenuItem from "./MenuItem";

import useStyles from "./style";

export default function MenuPerfil() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [arrowRef, setArrowRef] = useState();
  const anchorRef = useRef();

  const toggleHandler = useCallback(() => setOpen((prevOpen) => !prevOpen), []);

  const closeHandler = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) return;
    setOpen(false);
  };

  return (
    <>
      <Button
        ref={anchorRef}
        aria-controls="menu-perfil"
        aria-haspopup="true"
        disableElevation
        disableRipple
        disableTouchRipple
        disableFocusRipple
        onClick={toggleHandler}
        className={classes.root}
      >
        <Avatar alt="profile picture" className={classes.avatar} />

        <span className={classes.username}>Vanessa</span>

        <ArrowIcon className={classes.profileIcon} />
      </Button>

      <Popper
        transition
        disablePortal
        open={open}
        placement="bottom-end"
        className={classes.popper}
        anchorEl={anchorRef.current}
        role={undefined}
        modifiers={{ arrow: { enabled: true, element: arrowRef } }}
      >
        {({ TransitionProps }) => (
          <Grow {...TransitionProps} style={{ transformOrigin: "center top" }}>
            <ClickAwayListener onClickAway={closeHandler}>
              <Paper className={classes.menu}>
                <span className={classes.arrow} ref={setArrowRef} />

                <MenuList autoFocusItem={open} id="menu-perfil">
                  <MenuItem text="Sair" icon={ExitIcon} />
                </MenuList>
              </Paper>
            </ClickAwayListener>
          </Grow>
        )}
      </Popper>
    </>
  );
}
