import Box from "@mui/material/Box";
import player from "../../assets/player.png";
import net from "../../assets/net.png";
import text from "../../assets/TEXT.png";

import { slideInLeft, slideInRight, slideInTop } from "../../theme/animations";

export default function PlayerHero() {
  return (
    <Box
      id="hero"
      sx={{
        position: "relative",
        marginBottom: {
          xl: "45rem",
          lg: "40rem",
          md: "35rem",
          sm: "35rem",
          xs: "50rem",
        },
      }}
    >
      <Box
        sx={{
          height: {
            "2xl": "20rem",
            xl: "20rem",
            lg: "20rem",
            md: "20rem",
            sm: "20rem",
            xs: "20rem",
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            height: {
              "2xl": "25rem",
              xl: "25rem",
              lg: "25rem",
              md: "20rem",
              sm: "16rem",
              xs: "80%",
            },
            zIndex: 2,
            top: {
              "2xl": "30rem",
              xl: "35rem",
              lg: "30rem",
              md: "32rem",
              sm: "32rem",
              xs: "42rem",
            },
            width: "100%",
            animation: `${slideInTop} 1.5s ease-out`,
          }}
          component="img"
          src={net}
          alt="net"
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: { "2xl": 200, xl: 200, lg: 130, md: 100, sm: 100, xs: "25rem" },
          right: {
            "2xl": "10%",
            xl: "10%",
            lg: "10%",
            md: "10%",
            sm: "10%",
            xs: "8%",
          },
          width: {
            "2xl": 558,
            xl: "30%",
            lg: "30%",
            md: "35%",
            sm: "29.5%",
            xs: "35%",
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
          top: { "2xl": 120, xl: 120, lg: 80, sm: 50, xs: "16rem" },
          left: { "2xl": "6.5%", sm: "6%", xs: "6.5%" },
          zIndex: 1,
          width: {
            "2xl": 558,
            xl: "30%",
            lg: "28%",
            md: "28%",
            sm: "28%",
            xs: "35%",
          },
          height: "auto",
          animation: `${slideInLeft} 1.5s ease-out`,
        }}
        component="img"
        src={player}
        alt="player"
      />
    </Box>
  );
}
