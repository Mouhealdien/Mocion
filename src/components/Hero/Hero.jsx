import { Box } from "@mui/material";
import header from "../../assets/headerimg.svg";

import Experience from "../Experience/Experience";

import personsign from "../../assets/personsignred.png";

const Hero = () => {
  return (
    <Box
      sx={{
        height: { xl: "650px", lg: "550px", md: "380px", sm: "280px" },
        width: "100%",
        display: "flex",
        flexDirection: { sm: "row", xs: "column-reverse" },
        justifyContent: "center",
        alignItem: "center",
        backgroundImage: `url(${personsign})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: { sm: "left bottom", xs: "right bottom" },
        backgroundSize: { "2xl": "20%", md: "20%", sm: "25%", xs: "30%" },
      }}
    >
      <Experience />
      <Box
        id="home"
        component="img"
        loading="lazy"
        src={header}
        sx={{
          height: { lg: "100%", md: "320px", sm: "85%" },
          width: {
            md: "65%",
            sm: "65%",
            xs: "100%",
          },
          marginTop: { lg: "3rem", md: "5rem", sm: "36px", xs: "16rem" },
        }}
      />
    </Box>
  );
};

export default Hero;
