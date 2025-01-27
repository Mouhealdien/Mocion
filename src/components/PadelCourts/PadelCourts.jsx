import { Box, Typography } from "@mui/material";

import colors from "../../theme/colors";

import personsign from "../../assets/personsign.png";

import data from "./data";

const PadelCourts = () => {
  const getCardStyles = (index, id) => {
    const baseStyles = {
      position: "sticky",
      top: { md: "20%", sm: "20%", xs: "20%" },
      width: { md: "90%", sm: "90%", xs: "90%" },
      height: { md: "60vh", sm: "55vh", xs: "60vh" },
      transition: "transform 1s",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom:
        id < 5 ? { sm: "6rem", xs: "16rem" } : { sm: "6rem", xs: "16rem" },
      marginTop:
        id < 2 ? { lg: "8rem", md: "6rem", sm: "4rem", xs: "10rem" } : "0rem",
      flexDirection: { sm: "row", xs: "column" },
      backgroundColor: colors.GREY,
      backgroundImage: `url(${personsign})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right bottom",
      backgroundSize: { sm: "18%", xs: "0%" },
      columnGap: "5%",
      rowGap: "2rem",
    };
    return baseStyles;
  };

  return (
    <Box
      id="booking-system"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: { sm: "row", xs: "column" },
        backgroundColor: colors.GREY,
        columnGap: "5rem",
        marginTop: {
          xl: "16rem",
          lg: "12rem",
          md: "0rem",
          sm: "0rem",
          xs: "48rem",
        },
        marginBottom: "2rem",
      }}
    >
      <Box
        sx={{
          marginTop: { sm: "2rem", xs: "4rem" },
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {data.map((item, index) => (
          <Box key={item.id} sx={getCardStyles(index, item.id)}>
            <Box
              component="img"
              src={item.imgURL}
              sx={{
                width: { sm: "50%", xs: "80%" },
                //height: { xl: '36rem' }
              }}
            />
            <Box
              sx={{
                width: { sm: "35%", xs: "80%" },
                display: "flex",
                flexDirection: "column",
                rowGap: "2rem",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  color: colors.TEXT,
                  //textWrap: 'nowrap',
                  textTransform: "capitalize",
                  fontWeight: 700,
                  fontSize: { lg: "5rem", md: "4rem", sm: "3rem", xs: "4rem" },
                  fontFamily: "'Open Sans', sans-serif !important",
                }}
              >
                {item.h1}
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  color: colors.TEXT,
                  textTransform: "capitalize",
                  fontWeight: 400,
                  fontSize: { md: "1.5rem", xs: "1.8rem" },
                  lineHeight: { md: "3rem", xs: "3rem" },
                  fontFamily: "'Open Sans', sans-serif !important",
                  paddingBottom: { md: "4rem" },
                }}
              >
                {item.content}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PadelCourts;
