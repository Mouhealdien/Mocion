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
        height: { lg: "60vh", md: "55vh", sm: "40vh", xs: "45vh" },
        marginBottom: { lg: "33rem", md: "28rem", sm: "34rem", xs: "50rem" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          //marginBottom: "2rem",
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
            fontSize: { sm: "4rem", xs: "4rem" },
          }}
        >
          Benefits For Court Owner
        </Typography>
        <Typography
          sx={{
            textWrap: "nowrap",
            color: colors.RED,
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
              sx={{ width: { sm: "1rem", xs: "1rem" } }}
            />
            <Typography
              sx={{
                color: colors.TEXT,
                paddingTop: "0.2rem",
                fontSize: "1.5rem",
                fontWeight: 700,
                fontFamily: "'Open Sans', sans-serif !imoprtant",
              }}
            >
              Boost Visibility
            </Typography>
          </Box>
          <Typography
            sx={{
              color: colors.TEXT,
              textWrap: { sm: "nowrap", xs: "wrap" },
              fontSize: { md: "1.3rem", sm: "1.2rem", xs: "1.8rem" },
            }}
          >
            Get discovered by thousands of local players on our app.
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
              sx={{ width: { sm: "1rem", xs: "1rem" } }}
            />
            <Typography
              sx={{
                color: colors.TEXT,
                paddingTop: "0.2rem",
                fontSize: "1.5rem",
                fontWeight: 700,
              }}
            >
              Endless Vibes in Courts
            </Typography>
          </Box>
          <Typography
            sx={{
              color: colors.TEXT,
              textWrap: { sm: "nowrap", xs: "wrap" },
              fontSize: { md: "1.3rem", sm: "1.2rem", xs: "1.8rem" },
            }}
          >
            Keep your courts busy and energetic.
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
              sx={{ width: { sm: "1rem", xs: "1rem" } }}
            />
            <Typography
              sx={{
                color: colors.TEXT,
                paddingTop: "0.2rem",
                fontSize: "1.5rem",
                fontWeight: 700,
              }}
            >
              Effortless Scheduling
            </Typography>
          </Box>
          <Typography
            sx={{
              color: colors.TEXT,
              textWrap: { sm: "nowrap", xs: "wrap" },
              fontSize: { md: "1.3rem", sm: "1.2rem", xs: "1.8rem" },
            }}
          >
            Easily Manage bookings, Academies, Events and payments from one{" "}
            <br />
            screen.
          </Typography>
        </Box>

        <Box
          component="img"
          src={frame2}
          sx={{
            width: { lg: "55%", md: "55%", sm: "55%", xs: "52rem" },
            height: { lg: "50rem", md: "50rem", sm: "50rem", xs: "40rem" },
            position: "absolute",
            overflow: "hidden",
            left: { sm: "100%", xs: "50%" },
            transform: { sm: "translateX(-100%)", xs: "translateX(-50%)" },
            top: { sm: 0, xs: "53rem" },
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
              sx={{ width: { sm: "1rem", xs: "1rem" } }}
            />
            <Typography
              sx={{
                color: colors.TEXT,
                paddingTop: "0.2rem",
                fontSize: "1.5rem",
                fontWeight: 700,
              }}
            >
              Smart Pricing
            </Typography>
          </Box>
          <Typography
            sx={{
              color: colors.TEXT,
              textWrap: { sm: "nowrap", xs: "wrap" },
              fontSize: { md: "1.3rem", sm: "1.2rem", xs: "1.8rem" },
            }}
          >
            Optimize revenue through dynamic rates and tailored memberships.
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
              sx={{ width: { sm: "1rem", xs: "1rem" } }}
            />
            <Typography
              sx={{
                color: colors.TEXT,
                textWrap: { sm: "nowrap", xs: "wrap" },
                paddingTop: "0.2rem",
                fontSize: "1.5rem",
                fontWeight: 700,
              }}
            >
              Data-Driven Decisions
            </Typography>
          </Box>
          <Typography
            sx={{
              color: colors.TEXT,
              textWrap: { sm: "nowrap", xs: "wrap" },
              fontSize: { md: "1.3rem", sm: "1.2rem", xs: "1.8rem" },
            }}
          >
            Track court occupancy, player behavior to optimize operations and{" "}
            <br />
            boost profits.
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
              sx={{ width: { sm: "1rem", xs: "1rem" } }}
            />
            <Typography
              sx={{
                color: colors.TEXT,
                textWrap: { sm: "nowrap", xs: "wrap" },
                paddingTop: "0.2rem",
                fontSize: "1.5rem",
                fontWeight: 700,
              }}
            >
              Host Epic Events
            </Typography>
          </Box>
          <Typography
            sx={{
              color: colors.TEXT,
              textWrap: { sm: "nowrap", xs: "wrap" },
              fontSize: { md: "1.3rem", sm: "1.2rem", xs: "1.8rem" },
            }}
          >
            Organize tournaments, leagues, and corporate events. Grow your{" "}
            <br />
            coaching coverage from one screen.
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
              sx={{ width: { sm: "1rem", xs: "1rem" } }}
            />
            <Typography
              sx={{
                color: colors.TEXT,
                textWrap: { sm: "nowrap", xs: "wrap" },
                paddingTop: "0.2rem",
                fontSize: "1.5rem",
                fontWeight: 700,
              }}
            >
              Seamless Operations
            </Typography>
          </Box>
          <Typography
            sx={{
              color: colors.TEXT,
              textWrap: { sm: "nowrap", xs: "wrap" },
              fontSize: { md: "1.3rem", sm: "1.2rem", xs: "1.8rem" },
            }}
          >
            Automate your facility’s operations, finance, and HR with no hassle.
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
            top: { md: "45rem", sm: "43rem", xs: "80rem" },
            display: "flex",
            width: "100%",
            height: { md: "16rem", xs: "16rem" },
            backgroundColor: colors.TEXT,
            backgroundImage: `url(${group})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left top",
            backgroundSize: { md: "10rem", sm: "10%", xs: "13%" },
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
