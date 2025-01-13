import { Box } from "@mui/material";
import header from "../../assets/headerimg.png";

import Experience from "../Experience/Experience";

import personsign from "../../assets/personsignred.png";

import { slideInTop } from "../../theme/animations";

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
          animation: `${slideInTop} 1.5s ease-out`,
          // width: "auto",
          maxWidth: {
            lg: "68%",
            md: "65%",
            sm: "58%",
            xs: "100%",
          },
          objectFit: "contain",
          marginTop: { lg: "10rem", md: "8rem", sm: "60px", xs: "16rem" },
        }}
      />
    </Box>
  );
};

export default Hero;
