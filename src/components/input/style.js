import { makeStyles } from "@material-ui/core/styles";

const style = makeStyles(() => ({
  root: {
    borderRadius: "50px !important",
    background: "#EFF2F7",
  },
  iconButtonStyle: {
    "&:hover": { backgroundColor: "transparent" },
  },
  inputAdornmentStyle: {
    marginLeft: "-2.5rem",
  },
  vIcon: { fontSize: 20, display: "flex" },
  erroSpan: { color: "#ff4444", fontSize: "12px" },
}));

export default style;
