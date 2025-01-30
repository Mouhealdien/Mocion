import { Box, Typography } from "@mui/material";

import poster from "../..//assets/76.png";

import colors from "../../theme/colors";
import SearchGrid from "./SearchGrid";

const MatchSearch = () => {
  return (
    <Box
      id="play-match"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: { sm: "row", xs: "column" },
        backgroundColor: colors.TEXT,
        columnGap: { sm: "10rem", xs: "0rem" },
        paddingX: { sm: "0px", xs: "40px" },
      }}
    >
      <Box
        component="img"
        src={poster}
        alt="poster"
        sx={{
          width: {
            // "2xl": "615px",
            // lg: "460px",
            // md: "400px",
            sm: "30rem",
            xs: "280px",
          },
          //height: { "2xl": "100%", md: "100%", sm: "100%", xs: "100%" },
          paddingBottom: { sm: "0px", xs: "16px" },
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          rowGap: { sm: "1rem", xs: "15px" },
          width: { sm: "40%", xs: "100%" },
          height: "100%",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: { "2xl": "35px", sm: "15px", xs: "15px" },
            // paddingTop: { "2xl": "80px", md: "15%", sm: "40px" },
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Open Sans', sans-serif !important",
              fontWeight: 700,
              color: colors.YELLOW,
              fontSize: {
                sm: "2rem",
                xs: "32px",
              },
            }}
          >
            Let&apos;s Play A Padel Match
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Open Sans', sans-serif !important",
              color: colors.GREY,
              fontWeight: 400,
              fontSize: {
                sm: "1.5rem",
                xs: "12px",
              },
            }}
          >
            Choose what you want for your padel game.
          </Typography>
        </Box>

        <SearchGrid />
      </Box>
    </Box>
  );
};

export default MatchSearch;
