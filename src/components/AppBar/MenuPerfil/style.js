import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(({ palette }) => ({
  menu: {
    minWidth: 196,
    boxShadow: "0px 0px 6px #70707029",
    borderRadius: 5,
  },
  root: {
    height: "100%",
    paddingLeft: 0,
    paddingRight: 0,
    "&:hover": { backgroundColor: "transparent !important" },
  },
  avatar: { width: 36, height: 36, marginRight: 12 },
  username: {
    fontSize: 16,
    color: palette.primary.contrastText,
    fontWeight: 600,
  },
  profileIcon: { color: palette.primary.contrastText, fontSize: 22 },
  popper: {
    zIndex: 2000,
    '&[x-placement*="bottom-end"] $arrow': {
      top: 0,
      left: 0,
      marginTop: -10,
      marginLeft: 4,
      marginRight: 4,
      "&::before": {
        transformOrigin: "0 100%",
      },
    },
  },
  arrow: {
    overflow: "hidden",
    position: "absolute",
    width: "1em",
    height: 10,
    boxSizing: "border-box",
    color: palette.background.paper,
    "&::before": {
      content: '""',
      margin: "auto",
      display: "block",
      width: "100%",
      height: "100%",
      backgroundColor: "currentColor",
      transform: "rotate(45deg)",
    },
  },
  item: {
    padding: "8px 16px",
    color: "#707070",

    "&:hover": {
      fontWeight: 500,
      color: "#000",
    },
  },
  btnItem: { padding: "8px 10px" },
  btn: {
    borderRadius: 34,
    padding: "4px 8px",
  },
  itemText: {
    margin: 0,
    "& span": { fontSize: 16, fontWeight: 500 },
  },
  itemIcon: { minWidth: 0, color: "currentColor", marginRight: 8 },
  icon: { fontSize: 20 },
  btnIcon: { fontSize: 20, marginRight: 8 },
}));
