import { useState, useEffect, useRef } from "react";

import { Box, Typography } from "@mui/material";

import colors from "../../theme/colors";

import hand from "../../assets/hand.png";
import googleplay from "../../assets/googleplay.png";
import appstore from "../../assets/Appstore.png";

import { slideInBottom } from "../../theme/animations";
import PlayerComments from "../Comments/PlayerComments";

const Store = () => {
  // this state is for adding fadeInBottom when the img is reached
  const [inView, setInView] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Box
      id="app"
      sx={{
        display: "flex",
        flexDirection: { sm: "row", xs: "column" },
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: "2.75rem",
        rowGap: "2rem",
        width: "90%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          columnGap: "5rem",
          backgroundColor: colors.YELLOW,
          borderRadius: "2.75rem",
          width: { sm: "65%", xs: "100%" },
          height: "35rem",
        }}
      >
        <Box
          ref={elementRef}
          component="img"
          src={hand}
          sx={{
            width: "fit-content",
            height: "30rem",
            paddingLeft: { sm: "2rem", xs: "2rem" },
            paddingTop: "5rem",
            animation: inView ? `${slideInBottom} 1.5s ease-out` : "none",
          }}
        />
        <Box
          sx={{
            display: "flex",
            paddingRight: { lg: "4rem", md: "2rem", sm: "1rem", xs: "1rem" },
            marginLeft: { sm: 0, xs: "0rem" },
            flexDirection: "column",
            rowGap: "1.4rem",
          }}
        >
          <Box sx={{ paddingY: "1rem", width: { sm: "100%", xs: "100%" } }}>
            <Typography
              sx={{
                fontFamily: "'Open Sans', sans-serif",
                color: colors.TEXT,
                fontWeight: 700,
                fontSize: { md: "3rem", sm: "2.5rem", xs: "2.5rem" },
              }}
            >
              Now Available In App Store
            </Typography>
            <Typography
              sx={{
                display: { md: "flex", sm: "none", xs: "none" },
                fontFamily: "'Open Sans', sans-serif",
                color: colors.TEXT,
                fontWeight: 400,
                fontSize: { md: "1.5rem", sm: "1.2rem", xs: "1.5rem" },
              }}
            >
              Mocion app is available on App Store and Google <br /> Play.
              Download it now!
            </Typography>
            <Typography
              sx={{
                display: { md: "none", sm: "flex", xs: "flex" },
                fontFamily: "'Open Sans', sans-serif",
                color: colors.TEXT,
                fontWeight: 400,
                fontSize: { md: "1.5rem", sm: "1.5rem", xs: "2rem" },
              }}
            >
              Mocion app is available on App Store and Google Play. Download it
              now!
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "1.4rem" }}>
            <Box
              component="img"
              src={appstore}
              sx={{ width: { md: "12rem", xs: "12rem" } }}
              onClick={() => console.log("aa")}
            />
            <Box
              component="img"
              src={googleplay}
              sx={{ width: { md: "12rem", xs: "12rem" } }}
              onClick={() => console.log("bb")}
            />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          borderRadius: "2.75rem",
          width: { sm: "33%", xs: "100%" },
          backgroundColor: colors.TEXT,
          height: "35rem",
        }}
      >
        <PlayerComments />
      </Box>
    </Box>
  );
};

export default Store;
