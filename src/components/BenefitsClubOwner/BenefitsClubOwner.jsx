import { Box, Typography } from "@mui/material";

import group from "../../assets/Group.png";
import frame2 from "../../assets/website2.png";
import reddot from "../../assets/reddot.png";

import colors from "../../theme/colors";

const BenefitsClubOwner = () => {
  return (
    <Box
      id="benefits"
      sx={{
        position: "relative",
        marginTop: { "2xl": "0rem", xl: "0rem" },
        height: { lg: "80vh", md: "70vh", sm: "40vh", xs: "45vh" },
        marginBottom: { md: "32rem", sm: "32rem", xs: "50rem" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          marginBottom: "2rem",
          flexDirection: "column",
          paddingLeft: "5rem",
        }}
      >
        <Typography
          sx={{
            textWrap: "nowrap",
            color: colors.TEXT,
            fontFamily: "'Open Sans', sans-serif !imoprtant",
            fontWeight: 700,
            fontSize: { sm: "5rem", xs: "4rem" },
          }}
        >
          Benefits For Court Owner
        </Typography>
        <Typography
          sx={{
            textWrap: "nowrap",
            color: colors.TEXT,
            fontFamily: "MyCustomFont",
            fontWeight: 400,
            fontSize: { sm: "4.5rem", xs: "4rem" },
          }}
        >
          Mocion has powerful features for court owners.
        </Typography>
      </Box>

      <Box
        sx={{
          marginBottom: "4rem",
          display: "flex",
          flexDirection: "column",
          rowGap: "1rem",
          maxHeight: { md: "50rem", xs: "55rem" },
          position: "relative",
          height: "100%",
        }}
      >
        <Box sx={{ paddingLeft: "5rem" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              columnGap: "0.5rem",
            }}
          >
            <Box
              component="img"
              src={reddot}
              sx={{ width: { sm: "auto", xs: "1rem" } }}
            />
            <Typography
              sx={{
                color: colors.TEXT,
                paddingTop: "0.2rem",
                fontSize: "2rem",
                fontWeight: 700,
                fontFamily: "'Open Sans', sans-serif !imoprtant",
              }}
            >
              Comprehensive Booking System
            </Typography>
          </Box>
          <Typography
            sx={{
              color: colors.TEXT,
              textWrap: { sm: "nowrap", xs: "wrap" },
              fontSize: { md: "1.5rem", sm: "1.2rem", xs: "1.8rem" },
            }}
          >
            Manage schedules, reservations, and payments effortlessly from one
            <br />
            dashboard.
          </Typography>
        </Box>

        <Box sx={{ paddingLeft: "5rem" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              columnGap: "0.5rem",
            }}
          >
            <Box
              component="img"
              src={reddot}
              sx={{ width: { sm: "auto", xs: "1rem" } }}
            />
            <Typography
              sx={{
                color: colors.TEXT,
                paddingTop: "0.2rem",
                fontSize: "2rem",
                fontWeight: 700,
              }}
            >
              Dynamic Pricing Options
            </Typography>
          </Box>
          <Typography
            sx={{
              color: colors.TEXT,
              textWrap: { sm: "nowrap", xs: "wrap" },
              fontSize: { md: "1.5rem", sm: "1.2rem", xs: "1.8rem" },
            }}
          >
            Offer promotions, peak pricing, or special discounts to attract more{" "}
            <br /> players.
          </Typography>
        </Box>

        <Box
          sx={{
            paddingLeft: "5rem",
            //paddingBottom: { md: "31rem", sm: "22rem", xs: "42rem" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              columnGap: "0.5rem",
            }}
          >
            <Box
              component="img"
              src={reddot}
              sx={{ width: { sm: "auto", xs: "1rem" } }}
            />
            <Typography
              sx={{
                color: colors.TEXT,
                paddingTop: "0.2rem",
                fontSize: "2rem",
                fontWeight: 700,
              }}
            >
              Player Insights and Analytics
            </Typography>
          </Box>
          <Typography
            sx={{
              color: colors.TEXT,
              textWrap: { sm: "nowrap", xs: "wrap" },
              fontSize: { md: "1.5rem", sm: "1.2rem", xs: "1.8rem" },
            }}
          >
            Track court usage, bookings, and performance to optimize operations.
          </Typography>
        </Box>

        <Box
          component="img"
          src={frame2}
          sx={{
            width: { xl: "65rem", md: "65rem", sm: "52rem", xs: "52rem" },
            height: { xl: "55rem", md: "55rem", sm: "50rem", xs: "40rem" },
            position: "absolute",
            overflow: "hidden",
            left: { sm: "100%", xs: "50%" },
            transform: { sm: "translateX(-100%)", xs: "translateX(-50%)" },
            top: { sm: 0, xs: "48rem" },
            zIndex: 2,
            borderTopLeftRadius: "3rem",
            borderBottomLeftRadius: "3rem",
            borderTopRightRadius: { sm: "0rem", xs: "3rem" },
            borderBottomRightRadius: { sm: "0rem", xs: "3rem" },
          }}
        />

        <Box sx={{ paddingLeft: "5rem" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              columnGap: "0.5rem",
            }}
          >
            <Box
              component="img"
              src={reddot}
              sx={{ width: { sm: "auto", xs: "1rem" } }}
            />
            <Typography
              sx={{
                color: colors.TEXT,
                paddingTop: "0.2rem",
                fontSize: "2rem",
                fontWeight: 700,
              }}
            >
              Event Management Tools
            </Typography>
          </Box>
          <Typography
            sx={{
              color: colors.TEXT,
              textWrap: { sm: "nowrap", xs: "wrap" },
              fontSize: { md: "1.5rem", sm: "1.2rem", xs: "1.8rem" },
            }}
          >
            Organize Tournaments, Leagues, And Corporate With Ease.
          </Typography>
        </Box>

        <Box sx={{ paddingLeft: "5rem" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              columnGap: "0.5rem",
            }}
          >
            <Box
              component="img"
              src={reddot}
              sx={{ width: { sm: "auto", xs: "1rem" } }}
            />
            <Typography
              sx={{
                color: colors.TEXT,
                textWrap: { sm: "nowrap", xs: "wrap" },
                paddingTop: "0.2rem",
                fontSize: "2rem",
                fontWeight: 700,
              }}
            >
              Payment Processing
            </Typography>
          </Box>
          <Typography
            sx={{
              color: colors.TEXT,
              textWrap: { sm: "nowrap", xs: "wrap" },
              fontSize: { md: "1.5rem", sm: "1.2rem", xs: "1.8rem" },
            }}
          >
            Secure And Automated Payment System To Streamline Collections.
          </Typography>
        </Box>

        <Box sx={{ paddingLeft: "5rem" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              columnGap: "0.5rem",
            }}
          >
            <Box
              component="img"
              src={reddot}
              sx={{ width: { sm: "auto", xs: "1rem" } }}
            />
            <Typography
              sx={{
                color: colors.TEXT,
                textWrap: { sm: "nowrap", xs: "wrap" },
                paddingTop: "0.2rem",
                fontSize: "2rem",
                fontWeight: 700,
              }}
            >
              Push Notifications
            </Typography>
          </Box>
          <Typography
            sx={{
              color: colors.TEXT,
              textWrap: { sm: "nowrap", xs: "wrap" },
              fontSize: { md: "1.5rem", sm: "1.2rem", xs: "1.8rem" },
            }}
          >
            Keep Players Informed About Schedules, Cancellations, Or Promotions.
          </Typography>
        </Box>

        {/* <Box
          component="img"
          src={frame2}
          sx={{
            width: { xl: "65rem", md: "60rem", sm: "45rem", xs: "45rem" },
            position: "absolute",
            right: { sm: 0, xs: "10rem" },
            top: { md: "55rem", sm: "45rem", xs: "87rem" },
            zIndex: 2,
          }}
        /> */}

        <Box
          sx={{
            position: "absolute",
            top: { md: "45rem", sm: "40rem", xs: "75rem" },
            display: "flex",
            width: "100%",
            height: { md: "20rem", xs: "16rem" },
            backgroundColor: colors.TEXT,
            backgroundImage: `url(${group})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left top",
            backgroundSize: { md: "13rem", sm: "10%", xs: "13%" },
          }}
        />
        {/* <Box
          sx={{
            position: "absolute",
            top: { md: "85rem", sm: "65rem", xs: "105rem" },
            display: "flex",
            width: "100%",
            height: { md: "20rem", xs: "16rem" },
            backgroundColor: colors.TEXT,
            backgroundImage: `url(${group})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left top",
            backgroundSize: { md: "13rem", sm: "10%", xs: "13%" },
          }}
        /> */}
      </Box>
    </Box>
  );
};

export default BenefitsClubOwner;
