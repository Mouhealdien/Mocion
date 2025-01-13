import { Box, Typography, Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import colors from "../../theme/colors";

import yearlyData from "./yearlyData";
import monthlyData from "./monthlyData";
import { useState } from "react";

const MobilePlan = ({ plan }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  return (
    <Box
      sx={{
        display: { md: "none", sm: "none", xs: "flex" },
      }}
    >
      {plan === "yearly" && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
            borderRadius: "1rem",
          }}
        >
          <Box
            onClick={handlePrev}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              left: "0",
              top: "0",
              transform: "translateY(-50%)",
              backgroundColor: colors.TEXT,
              color: "white",
              width: "6rem",
              height: "6rem",
              zIndex: 3,
              borderRadius: "5rem",
            }}
          >
            <ArrowBackIosIcon sx={{ width: "2rem", height: "2rem" }} />
          </Box>

          <Box
            sx={{
              borderRadius: "2rem",
              display: activeIndex === 0 ? "flex" : "none",
              alignItems: "center",
              gap: "2rem",
              flexDirection: "column",
              paddingTop: "4rem",
              width: "35rem",
              height: "80rem",
              background: `linear-gradient(to bottom, ${colors.CORRECT} 2rem, ${colors.GREY} 0)`,
            }}
          >
            <Typography
              sx={{ fontSize: "5rem", fontWeight: 700, color: colors.TEXT }}
            >
              {yearlyData[0].h1}
            </Typography>
            <Typography sx={{ fontSize: "3rem", color: colors.TEXT }}>
              {yearlyData[0].h2}
            </Typography>
            <Typography
              sx={{ fontSize: "4rem", fontWeight: 700, color: colors.TEXT }}
            >
              ${yearlyData[0].price}
            </Typography>
            <Typography
              sx={{
                fontSize: "2rem",
                color: colors.TEXT,
                marginBottom: "25rem",
              }}
            >
              {yearlyData[0].perks}
            </Typography>
            <Button
              sx={{
                color: "white",
                paddingY: "1rem",
                paddingX: "5rem",
                borderRadius: "4rem",
                backgroundColor: colors.TEXT,
                fontSize: "2rem",
                textTransform: "none",
              }}
            >
              Subscribe Now
            </Button>
          </Box>
          <Box
            sx={{
              borderRadius: "2rem",
              display: activeIndex === 1 ? "flex" : "none",
              alignItems: "center",
              gap: "2rem",
              flexDirection: "column",
              paddingTop: "4rem",
              width: "35rem",
              height: "80rem",
              background: `linear-gradient(to bottom, ${colors.YELLOW} 2rem, ${colors.TEXT} 0)`,
            }}
          >
            <Typography
              sx={{ fontSize: "5rem", fontWeight: 700, color: "white" }}
            >
              {yearlyData[1].h1}
            </Typography>
            <Typography sx={{ fontSize: "3rem", color: "white" }}>
              {yearlyData[1].h2}
            </Typography>
            <Typography
              sx={{ fontSize: "4rem", fontWeight: 700, color: "white" }}
            >
              ${yearlyData[1].price}
            </Typography>
            <Typography
              sx={{ fontSize: "2rem", color: "white", marginBottom: "25rem" }}
            >
              {yearlyData[1].perks}
            </Typography>
            <Button
              sx={{
                color: colors.TEXT,
                paddingY: "1rem",
                paddingX: "5rem",
                borderRadius: "4rem",
                backgroundColor: colors.YELLOW,
                fontSize: "2rem",
                textTransform: "none",
              }}
            >
              Subscribe Now
            </Button>
          </Box>
          <Box
            sx={{
              borderRadius: "2rem",
              display: activeIndex === 2 ? "flex" : "none",
              alignItems: "center",
              gap: "2rem",
              flexDirection: "column",
              paddingTop: "4rem",
              width: "35rem",
              height: "80rem",
              background: `linear-gradient(to bottom, ${colors.RED} 2rem, ${colors.GREY} 0)`,
            }}
          >
            <Typography
              sx={{ fontSize: "5rem", fontWeight: 700, color: colors.TEXT }}
            >
              {yearlyData[2].h1}
            </Typography>
            <Typography sx={{ fontSize: "3rem", color: colors.TEXT }}>
              {yearlyData[2].h2}
            </Typography>
            <Typography
              sx={{ fontSize: "4rem", fontWeight: 700, color: colors.TEXT }}
            >
              ${yearlyData[2].price}
            </Typography>
            <Typography
              sx={{
                fontSize: "2rem",
                color: colors.TEXT,
                marginBottom: "25rem",
              }}
            >
              {yearlyData[2].perks}
            </Typography>
            <Button
              sx={{
                color: "white",
                paddingY: "1rem",
                paddingX: "5rem",
                borderRadius: "4rem",
                backgroundColor: colors.TEXT,
                fontSize: "2rem",
                textTransform: "none",
              }}
            >
              Subscribe Now
            </Button>
          </Box>

          <Box
            onClick={handleNext}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              left: "0",
              top: "0",
              transform: "translateY(-50%)",
              backgroundColor: colors.TEXT,
              color: "white",
              width: "6rem",
              height: "6rem",
              zIndex: 3,
              borderRadius: "5rem",
            }}
          >
            <ArrowForwardIosIcon sx={{ width: "2rem", height: "2rem" }} />
          </Box>
        </Box>
      )}

      {plan === "monthly" && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
            borderRadius: "1rem",
          }}
        >
          <Box
            onClick={handlePrev}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              left: "0",
              top: "0",
              transform: "translateY(-50%)",
              backgroundColor: colors.TEXT,
              color: "white",
              width: "6rem",
              height: "6rem",
              zIndex: 3,
              borderRadius: "5rem",
            }}
          >
            <ArrowBackIosIcon sx={{ width: "2rem", height: "2rem" }} />
          </Box>
          <Box
            sx={{
              borderRadius: "2rem",
              display: activeIndex === 0 ? "flex" : "none",
              alignItems: "center",
              gap: "2rem",
              flexDirection: "column",
              paddingTop: "4rem",
              width: "35rem",
              height: "80rem",
              background: `linear-gradient(to bottom, ${colors.CORRECT} 2rem, ${colors.GREY} 0)`,
            }}
          >
            <Typography
              sx={{ fontSize: "5rem", fontWeight: 700, color: colors.TEXT }}
            >
              {monthlyData[0].h1}
            </Typography>
            <Typography sx={{ fontSize: "3rem", color: colors.TEXT }}>
              {monthlyData[0].h2}
            </Typography>
            <Typography
              sx={{ fontSize: "4rem", fontWeight: 700, color: colors.TEXT }}
            >
              ${monthlyData[0].price}
            </Typography>
            <Typography
              sx={{
                fontSize: "2rem",
                color: colors.TEXT,
                marginBottom: "25rem",
              }}
            >
              {monthlyData[0].perks}
            </Typography>
            <Button
              sx={{
                color: "white",
                paddingY: "1rem",
                paddingX: "5rem",
                borderRadius: "4rem",
                backgroundColor: colors.TEXT,
                fontSize: "2rem",
                textTransform: "none",
              }}
            >
              Subscribe Now
            </Button>
          </Box>
          <Box
            sx={{
              borderRadius: "2rem",
              display: activeIndex === 1 ? "flex" : "none",
              alignItems: "center",
              gap: "2rem",
              flexDirection: "column",
              paddingTop: "4rem",
              width: "35rem",
              height: "80rem",
              background: `linear-gradient(to bottom, ${colors.YELLOW} 2rem, ${colors.TEXT} 0)`,
            }}
          >
            <Typography
              sx={{ fontSize: "5rem", fontWeight: 700, color: "white" }}
            >
              {monthlyData[1].h1}
            </Typography>
            <Typography sx={{ fontSize: "3rem", color: "white" }}>
              {monthlyData[1].h2}
            </Typography>
            <Typography
              sx={{ fontSize: "4rem", fontWeight: 700, color: "white" }}
            >
              ${monthlyData[1].price}
            </Typography>
            <Typography
              sx={{ fontSize: "2rem", color: "white", marginBottom: "25rem" }}
            >
              {monthlyData[1].perks}
            </Typography>
            <Button
              sx={{
                color: colors.TEXT,
                paddingY: "1rem",
                paddingX: "5rem",
                borderRadius: "4rem",
                backgroundColor: colors.YELLOW,
                fontSize: "2rem",
                textTransform: "none",
              }}
            >
              Subscribe Now
            </Button>
          </Box>
          <Box
            sx={{
              borderRadius: "2rem",
              display: activeIndex === 2 ? "flex" : "none",
              alignItems: "center",
              gap: "2rem",
              flexDirection: "column",
              paddingTop: "4rem",
              width: "35rem",
              height: "80rem",
              background: `linear-gradient(to bottom, ${colors.RED} 2rem, ${colors.GREY} 0)`,
            }}
          >
            <Typography
              sx={{ fontSize: "5rem", fontWeight: 700, color: colors.TEXT }}
            >
              {monthlyData[2].h1}
            </Typography>
            <Typography sx={{ fontSize: "3rem", color: colors.TEXT }}>
              {monthlyData[2].h2}
            </Typography>
            <Typography
              sx={{ fontSize: "4rem", fontWeight: 700, color: colors.TEXT }}
            >
              ${monthlyData[2].price}
            </Typography>
            <Typography
              sx={{
                fontSize: "2rem",
                color: colors.TEXT,
                marginBottom: "25rem",
              }}
            >
              {monthlyData[2].perks}
            </Typography>
            <Button
              sx={{
                color: "white",
                paddingY: "1rem",
                paddingX: "5rem",
                borderRadius: "4rem",
                backgroundColor: colors.TEXT,
                fontSize: "2rem",
                textTransform: "none",
              }}
            >
              Subscribe Now
            </Button>
          </Box>

          <Box
            onClick={handleNext}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              left: "0",
              top: "0",
              transform: "translateY(-50%)",
              backgroundColor: colors.TEXT,
              color: "white",
              width: "6rem",
              height: "6rem",
              zIndex: 3,
              borderRadius: "5rem",
            }}
          >
            <ArrowForwardIosIcon sx={{ width: "2rem", height: "2rem" }} />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default MobilePlan;
