import { Box, Button, Typography } from "@mui/material";

import colors from "../../theme/colors";
import { useState } from "react";

import yearlyData from "./yearlyData";
import monthlyData from "./monthlyData";
import MobilePlan from "./MobilePlan";

const Plan = () => {
  const [plan, setPlan] = useState("yearly");

  return (
    <Box
      id="plans"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: { sm: "0", xs: "4rem" },
        marginBottom: "2rem",
        color: colors.TEXT,
      }}
    >
      <Box
        sx={{
          width: "90%",
          display: "flex",
          justifyContent: "center",
          flexDirection: { sm: "row", xs: "column" },
          alignItems: { sm: "center", xs: "center" },
          rowGap: { sm: "0", xs: "1rem" },
          marginBottom: { sm: "2rem", xs: "3rem" },
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Open Sans', sans-serif !important",
            fontWeight: 700,
            fontSize: { sm: "4rem", xs: "3rem" },
            color: colors.TEXT,
            textAlign: "center",
          }}
        >
          Choose A Plan <br /> That Suits Your Needs
        </Typography>
        {/* <Typography
          sx={{
            fontFamily: "'Open Sans', sans-serif !important",
            fontWeight: 400,
            width: { sm: "32rem", xs: "90%" },
            fontSize: { sm: "2rem", xs: "2.2rem" },
            color: colors.TEXT,
          }}
        >
          Choose A Plan That Works Best For You, Feel Free To Contact Us
        </Typography> */}
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "2rem",
          gap: "2rem",
          border: `1px solid ${colors.TEXT}`,
          borderRadius: "1rem",
          paddingY: "1rem",
          paddingX: "2rem",
        }}
      >
        <Button
          variant="contained"
          onClick={() => setPlan("monthly")}
          sx={{
            boxShadow: "unset",
            width: "10rem",
            borderRadius: "1rem",
            backgroundColor: plan === "monthly" ? colors.TEXT : "white",
            color: plan === "monthly" ? colors.YELLOW : colors.TEXT,
            paddingY: "1rem",
            paddingX: "2rem",
            textTransform: "none",
            fontFamily: "'Open Sans', sans-serif !important",
            fontSize: "1.2rem",
            fontWeight: 700,
            "&:hover": {
              boxShadow: "unset",
            },
          }}
        >
          Monthly
        </Button>
        <Button
          variant="contained"
          onClick={() => setPlan("yearly")}
          sx={{
            boxShadow: "unset",
            width: "10rem",
            borderRadius: "1rem",
            backgroundColor: plan === "yearly" ? colors.TEXT : "white",
            color: plan === "yearly" ? colors.YELLOW : colors.TEXT,
            paddingY: "1rem",
            paddingX: "2rem",
            textTransform: "none",
            fontFamily: "'Open Sans', sans-serif !important",
            fontSize: "1.2rem",
            fontWeight: 700,
            "&:hover": {
              boxShadow: "unset",
            },
          }}
        >
          Yearly
        </Button>
      </Box>

      <Box sx={{ display: { sm: "flex", xs: "none" } }}>
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
              sx={{
                borderRadius: "2rem",
                display: "flex",
                alignItems: "center",
                gap: "2rem",
                flexDirection: "column",
                paddingTop: "4rem",
                width: { md: "32.5rem", sm: "30rem" },
                height: "50rem",
                background: `linear-gradient(to bottom, ${colors.CORRECT} 2rem, ${colors.GREY} 0)`,
              }}
            >
              <Typography
                sx={{ fontSize: "3rem", fontWeight: 700, color: colors.TEXT }}
              >
                {yearlyData[0].h1}
              </Typography>
              <Typography sx={{ fontSize: "2rem", color: colors.TEXT }}>
                {yearlyData[0].h2}
              </Typography>
              <Typography
                sx={{ fontSize: "3rem", fontWeight: 700, color: colors.TEXT }}
              >
                ${yearlyData[0].price}
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  color: colors.TEXT,
                  marginBottom: "7rem",
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
                display: "flex",
                alignItems: "center",
                gap: "2rem",
                flexDirection: "column",
                paddingTop: "4rem",
                width: { md: "32.5rem", sm: "30rem" },
                height: "50rem",
                background: `linear-gradient(to bottom, ${colors.YELLOW} 2rem, ${colors.TEXT} 0)`,
              }}
            >
              <Typography
                sx={{ fontSize: "3rem", fontWeight: 700, color: "white" }}
              >
                {yearlyData[1].h1}
              </Typography>
              <Typography sx={{ fontSize: "2rem", color: "white" }}>
                {yearlyData[1].h2}
              </Typography>
              <Typography
                sx={{ fontSize: "3rem", fontWeight: 700, color: "white" }}
              >
                ${yearlyData[1].price}
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  color: "white",
                  marginBottom: "7rem",
                }}
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
                display: "flex",
                alignItems: "center",
                gap: "2rem",
                flexDirection: "column",
                paddingTop: "4rem",
                width: { md: "32.5rem", sm: "30rem" },
                height: "50rem",
                background: `linear-gradient(to bottom, ${colors.RED} 2rem, ${colors.GREY} 0)`,
              }}
            >
              <Typography
                sx={{ fontSize: "3rem", fontWeight: 700, color: colors.TEXT }}
              >
                {yearlyData[2].h1}
              </Typography>
              <Typography sx={{ fontSize: "2rem", color: colors.TEXT }}>
                {yearlyData[2].h2}
              </Typography>
              <Typography
                sx={{ fontSize: "3rem", fontWeight: 700, color: colors.TEXT }}
              >
                ${yearlyData[2].price}
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  color: colors.TEXT,
                  marginBottom: "7rem",
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
              sx={{
                borderRadius: "2rem",
                display: "flex",
                alignItems: "center",
                gap: "2rem",
                flexDirection: "column",
                paddingTop: "4rem",
                width: { md: "32.5rem", sm: "30rem" },
                height: "50rem",
                background: `linear-gradient(to bottom, ${colors.CORRECT} 2rem, ${colors.GREY} 0)`,
              }}
            >
              <Typography
                sx={{ fontSize: "3rem", fontWeight: 700, color: colors.TEXT }}
              >
                {monthlyData[0].h1}
              </Typography>
              <Typography sx={{ fontSize: "2rem", color: colors.TEXT }}>
                {monthlyData[0].h2}
              </Typography>
              <Typography
                sx={{ fontSize: "3rem", fontWeight: 700, color: colors.TEXT }}
              >
                ${monthlyData[0].price}
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  color: colors.TEXT,
                  marginBottom: "7rem",
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
                display: "flex",
                alignItems: "center",
                gap: "2rem",
                flexDirection: "column",
                paddingTop: "4rem",
                width: { md: "32.5rem", sm: "30rem" },
                height: "50rem",
                background: `linear-gradient(to bottom, ${colors.YELLOW} 2rem, ${colors.TEXT} 0)`,
              }}
            >
              <Typography
                sx={{ fontSize: "3rem", fontWeight: 700, color: "white" }}
              >
                {monthlyData[1].h1}
              </Typography>
              <Typography sx={{ fontSize: "2rem", color: "white" }}>
                {monthlyData[1].h2}
              </Typography>
              <Typography
                sx={{ fontSize: "3rem", fontWeight: 700, color: "white" }}
              >
                ${monthlyData[1].price}
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  color: "white",
                  marginBottom: "7rem",
                }}
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
                display: "flex",
                alignItems: "center",
                gap: "2rem",
                flexDirection: "column",
                paddingTop: "4rem",
                width: { md: "32.5rem", sm: "30rem" },
                height: "50rem",
                background: `linear-gradient(to bottom, ${colors.RED} 2rem, ${colors.GREY} 0)`,
              }}
            >
              <Typography
                sx={{ fontSize: "3rem", fontWeight: 700, color: colors.TEXT }}
              >
                {monthlyData[2].h1}
              </Typography>
              <Typography sx={{ fontSize: "2rem", color: colors.TEXT }}>
                {monthlyData[2].h2}
              </Typography>
              <Typography
                sx={{ fontSize: "3rem", fontWeight: 700, color: colors.TEXT }}
              >
                ${monthlyData[2].price}
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  color: colors.TEXT,
                  marginBottom: "7rem",
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
          </Box>
        )}
      </Box>

      <MobilePlan plan={plan} />
    </Box>
  );
};

export default Plan;
