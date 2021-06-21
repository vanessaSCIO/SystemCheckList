import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  appbar: { boxShadow: "none" },
  toolbar: { minHeight: 64 },
  container: { height: 64 },
  h100: { height: "100%" },
  logoItem: { marginRight: 24, width: 88 },
  menuPerfil: {
    maxWidth: 256,
    marginLeft: "68%",
    height: "100%",
  },
  menuSelect: {
    marginLeft: 30,
  },
}));
