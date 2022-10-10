import { createTheme, responsiveFontSizes, PaletteOptions } from "@mui/material/styles";

// interface MyPalette extends PaletteOptions {
//   primary: {
//     lime: string;
//   }
// }

// declare module "@mui/material/styles" {
//   interface PaletteColorOptions  {
//     lime?:string;
//     light?: string;
//     main: string;
//     dark?: string;
//     contrastText?: string;
//   }
// }

// Color Constants
const limeColor = "#6FCA28";
const darkGreenColor = "#033630";
// const primaryColor = "#169658";
const primaryColor = "#FDC03C";
// const primaryColor = "#FE933F";
const primaryColorLight = limeColor;
const primaryColorDark = darkGreenColor;
const orangeColor = "#FF8C38";
const yellowColor = "#FDE513";
const brownColor = "#774B11";
const brownColorLight = "#AC635B";
const brownBorderColor = "#482F00";
const darkBlueColor = "#1E2E49";

// Font Contants
const myFavouriteHorror = "MyFavouriteHorror";
const dishOut = "DishOut";
const bloodnGuts = "BloodnGuts";
const RubixLight = "RubixLight";
const RubixMedium = "RubixMedium";
const RubixBold = "RubixBold";
const Springwood = "Springwood";
const WendyOne = "WendyOne";
const SlimeBall = "SlimeBall";
const FlyingSlimeReguler = "FlyingSlimeReguler";

const fontOrigin = "Origin";
const fontMontserrat = "'Montserrat', sans-serif";

// Theme Object
let theme = createTheme({
  palette: {
    primary: {
      light: primaryColorLight,
      main: primaryColor,
      dark: primaryColorDark,
    },
    secondary: {
      main: yellowColor,
      dark: darkBlueColor,
    },
    green: {
      main: darkGreenColor,
      dark: darkGreenColor,
    },
    text: {
      primary: "#fff",
      secondary: orangeColor,
    },
    lime: {
      main: limeColor,
    },
    brown: {
      light: brownColorLight,
      main: brownColor,
      dark: brownBorderColor,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1280,
      xl: 1920,
      mobile: 0,
      tablet: 640,
      laptopHD: 1024,
      laptopFHD: 1200,
      laptop2K: 1500,
      laptop4K: 2100,
    },
  },
  components: {
    MuiDrawer: {
      defaultProps: {
        PaperProps: {
          sx: {
            backgroundColor: primaryColor,
            // boxShadow: "none",
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          color: "#fff",
        }
      }
    },

    MuiTypography: {
      variants: [
        {
          props: { variant: "myFavouriteHorrorFonts" },
          style: {
            fontFamily: myFavouriteHorror,
          },
        },
        {
          props: { variant: "dishOut" },
          style: {
            fontFamily: dishOut,
          },
        },
        {
          props: { variant: "bloodnGuts" },
          style: {
            fontFamily: bloodnGuts,
          },
        },
        {
          props: { variant: "RubixLight" },
          style: {
            fontFamily: RubixLight,
          },
        },
        {
          props: { variant: "RubixMedium" },
          style: {
            fontFamily: RubixMedium,
          },
        },
        {
          props: { variant: "RubixBold" },
          style: {
            fontFamily: RubixBold,
          },
        },
        {
          props: { variant: "Springwood" },
          style: {
            fontFamily: Springwood,
          },
        },
        {
          props: { variant: "WendyOne" },
          style: {
            fontFamily: WendyOne,
          },
        },
        {
          props: { variant: "SlimeBall" },
          style: {
            fontFamily: SlimeBall,
          },
        },
        {
          props: { variant: "FlyingSlimeReguler" },
          style: {
            fontFamily: FlyingSlimeReguler,
          },
        },
      ],
    },
  },
  fonts: [
    myFavouriteHorror,
    dishOut,
    bloodnGuts,
    RubixLight,
    RubixMedium,
    RubixBold,
    Springwood,
    WendyOne,
    SlimeBall,
    FlyingSlimeReguler,
  ],
});
theme = responsiveFontSizes(theme, {
  factor: 1.5,
});

export default theme;
