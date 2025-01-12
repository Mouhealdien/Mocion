import Box from "@mui/material/Box";

import group from "../../assets/Group.png";

import colors from "../../theme/colors";

import Bottom from "./Bottom";
import Top from "./Top";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        backgroundColor: colors.TEXT,
        rowGap: { sm: "2rem", xs: "4rem" },
        paddingX: { sm: "6rem", xs: "4rem" },
        paddingY: { xs: "2rem" },
        backgroundImage: `url(${group})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right top",
        backgroundSize: {
          "2xl": "15rem",
          xs: "15%",
        },
      }}
    >
      <Top />

      <Bottom />
    </Box>
  );
};

export default Footer;
