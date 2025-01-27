import Box from "@mui/material/Box";

import poster from "../../assets/76.png";
import net from "../../assets/1.png";
import text from "../../assets/3.png";

import { slideInTop, slideInRight, slideInLeft } from "../../theme/animations";

export default function ClubOwnerHero() {
  return (
    <Box
      id="home"
      sx={{
        position: "relative",
        height: "60rem",
        // marginBottom: {
        //   xl: "37.5rem",
        //   lg: "37.5rem",
        //   md: "35rem",
        //   sm: "210px",
        //   xs: "160px",
        // },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          height: {
            lg: "55rem",
            md: "55rem",
            sm: "55rem",
            xs: "55rem",
          },
          zIndex: 2,
          top: {
            lg: "3.5rem",
            md: "3.5rem",
            sm: "3.5rem",
            xs: "3.5rem",
          },
          width: "100%",
          animation: `${slideInTop} 1.5s ease-out`,
        }}
        component="img"
        src={net}
        alt="net"
      />

      <Box
        sx={{
          position: "absolute",
          top: {
            "2xl": "6rem",
            xl: "6rem",
            lg: "6rem",
            md: "6rem",
            sm: "10rem",
            xs: "18rem",
          },
          right: {
            "2xl": "8rem",
            xl: "8rem",
            lg: "8rem",
            md: "8rem",
            sm: "0rem",
            xs: "0rem",
          },
          width: {
            "2xl": "115rem",
            xl: "115rem",
            lg: "115rem",
            md: "115rem",
            sm: "100rem",
            xs: "70rem",
          },
          zIndex: 3,
          animation: `${slideInRight} 1.5s ease-out`,
        }}
        component="img"
        src={text}
        alt="text"
      />

      <Box
        sx={{
          position: "absolute",
          top: { md: "9rem", sm: "9rem", xs: "13rem" },
          left: { "2xl": "5%", sm: "10%", xs: "5%" },
          zIndex: 2,
          // width: {
          //   "2xl": "66rem",
          //   xl: "70rem",
          //   lg: "200px",
          //   md: "76rem",
          //   sm: "665px",
          //   xs: "365px",
          // },
          height: {
            xl: "49.5rem",
            lg: "49.5rem",
            md: "49.5rem",
            sm: "49.5rem",
            xs: "45.5rem",
          },
          animation: `${slideInLeft} 1.5s ease-out`,
        }}
        component="img"
        src={poster}
        alt="poster"
      />
    </Box>
  );
}

// export default function ClubOwnerHero() {
//   return (
//     <Box
//       id="home"
//       component="img"
//       autoPlay
//       src={banner}
//       sx={{
//         width: "100%",
//         height: { lg: "88vh" },
//         marginTop: { sm: "7rem", xs: "14rem" },
//       }}
//     />
//   );
// }
