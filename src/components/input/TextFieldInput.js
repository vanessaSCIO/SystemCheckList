import React, { useCallback, useState } from "react";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import {
  VisibilityOff as VisibilityOffIcon,
  Visibility as VisibilityIcon,
} from "@material-ui/icons";

import useStyles from "./style";

export default function CustomTextField({
  inputClassName,
  startAdornment,
  endAdornment,
  password,
  error,
  fullWidth,
  type,
  name,
  ...props
}) {
  const classes = useStyles();
  const [hide, setHide] = useState(true);

  const toggleHandler = useCallback(() => setHide(!hide), [hide]);

  return (
    <>
      <TextField
        {...props}
        id={`${name}-input`}
        name={name}
        fullWidth={fullWidth}
        type={type || (password && hide ? "password" : "text")}
        InputLabelProps={{ htmlFor: `${name}-input` }}
        InputProps={{
          fullWidth,
          startAdornment,
          classes: { input: inputClassName },
          endAdornment: (
            <>
              {!password && endAdornment}

              {password && (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    className={classes.iconButtonStyle}
                    onClick={toggleHandler}
                  >
                    {hide && <VisibilityOffIcon className={classes.vIcon} />}
                    {!hide && <VisibilityIcon className={classes.vIcon} />}
                  </IconButton>
                </InputAdornment>
              )}
            </>
          ),
        }}
        FormHelperTextProps={{ classes: { root: classes.helper } }}
      />

      {error && <span className={classes.erroSpan}>{error}</span>}
    </>
  );
}
