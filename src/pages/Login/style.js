import { makeStyles } from "@material-ui/core/styles";
import loginImg from "../../resources/images/FundoImgScio.png";

const style = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${loginImg})`,
    height: "100%",
  },
  content: {
    width: 324,
    margin: "0 16px",
    boxShadow: "5px 0px 6px 0px rgba(112, 112, 112, 0.25)",

    [theme.breakpoints.up("md")]: {
      width: 750,
      height: 500,
      margin: 0,
    },
  },
  logo: {
    width: 310,
    paddingBottom: 12,
    paddingTop: 8,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginLeft: "20%",
    borderRadius: 5,
  },
  formContainer: {
    padding: "20px 20px",
    borderStyle: "solid",
    borderColor: "#3f51b5",
    borderRadius: 20,
    backgroundColor: "#ffff",
  },
  btn: {
    borderRadius: 36,
    marginTop: 20,

    textTransform: "uppercase",
  },
  error: { fontSize: 15 },
  backgroundImg: {
    height: "100%",
    width: 416,
    backgroundImage: `url(${loginImg})`,
    borderRadius: 0,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,

    "& img": {
      display: "block",
      marginLeft: "auto",
      paddingTop: 20,
      paddingRight: 20,
    },

    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export default style;
