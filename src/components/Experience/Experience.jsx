import { Box, Typography } from "@mui/material";

import colors from "../../theme/colors";

const Experience = () => {
  return (
    <Box
      id="about-us"
      sx={{
        width: { md: "30%", sm: "30%", xs: "auto" },
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "column",
        paddingLeft: { md: "8rem", sm: "6rem", xs: "3rem" },
        //paddingRight: { sm: "0px", xs: "24px" },
        rowGap: { md: "1.5rem", sm: "14px", xs: "18px" },
        marginTop: { sm: "5%", xs: "2rem" },
        marginBottom: { sm: "0", xs: "16px" },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          display: { sm: "flex", xs: "none" },
          color: colors.TEXT,
          fontWeight: 700,
          fontSize: {
            lg: "4rem",
            sm: "3rem",
            xs: "4rem",
          },
          lineHeight: {
            lg: "6rem",
            sm: "5rem",
            xs: "6rem",
          },
          textWrap: "nowrap",
          fontFamily: "'Open Sans', sans-serif !important",
        }}
      >
        A New Way to <br /> Experience Padel
      </Typography>
      <Typography
        variant="body1"
        sx={{
          display: { sm: "flex", xs: "none" },
          color: colors.TEXT,
          fontWeight: 400,
          fontSize: {
            lg: "1.5rem",
            sm: "1.3rem",
            xs: "2.2rem",
          },
          //fontSize: { '2xl': '24px', xl: '20px', lg: '18px', md: '14px', sm: '10px', xs: '16px' },
          lineHeight: {
            md: "3rem",
            sm: "2.5rem",
            xs: "5rem",
          },
          textWrap: "nowrap",
          fontFamily: "'Open Sans', sans-serif !important",
        }}
      >
        Welcome to Mocion, the integrated platform <br /> designed to connect
        court owners, players, <br /> and coaches seamlessly. <br /> Whether you
        are a beginner or a professional <br /> padel player.
      </Typography>
      {/* <Button
        variant="text"
        sx={{
          color: colors.YELLOW,
          width: { sm: "22.5rem", xs: "36rem" },
          height: { sm: "4.5rem", xs: "8rem" },
          backgroundColor: colors.TEXT,
          fontFamily: "'Open Sans', sans-serif !important",
          fontWeight: 700,
          fontSize: { sm: "1.5rem", xs: "2rem" },
          textTransform: "none",
          paddingX: "2rem",
          paddingY: "1rem",
          borderRadius: { sm: "0.5rem", xs: "1rem" },
          textWrap: "nowrap",
          minWidth: "unset",
          transition: "none",
        }}
      >
        Get Started With Mocion
      </Button> */}

      <Typography
        variant="h2"
        sx={{
          display: { sm: "none", xs: "flex" },
          color: colors.TEXT,
          fontWeight: 700,
          fontSize: {
            lg: "4rem",
            sm: "3rem",
            xs: "5rem",
          },
          lineHeight: {
            lg: "6rem",
            sm: "5rem",
            xs: "6rem",
          },
          fontFamily: "'Open Sans', sans-serif !important",
        }}
      >
        A New Way to Experience Padel
      </Typography>
      <Typography
        variant="body1"
        sx={{
          display: { sm: "none", xs: "flex" },
          color: colors.TEXT,
          fontWeight: 400,
          fontSize: {
            lg: "1.5rem",
            sm: "1.3rem",
            xs: "3rem",
          },
          //fontSize: { '2xl': '24px', xl: '20px', lg: '18px', md: '14px', sm: '10px', xs: '16px' },
          lineHeight: {
            md: "3rem",
            sm: "2.5rem",
            xs: "5rem",
          },
          fontFamily: "'Open Sans', sans-serif !important",
        }}
      >
        Welcome to Mocion, the integrated platform <br /> designed to connect
        court owners, players, <br /> and coaches seamlessly. <br /> Whether you
        are a beginner or a <br /> professional padel player.
      </Typography>
    </Box>
  );
};

export default Experience;
