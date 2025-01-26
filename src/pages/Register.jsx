import { useState } from "react";
import { Box, FormControl, Select, Typography, MenuItem } from "@mui/material";

import { styled } from "@mui/system";

import login from "../assets/login.png";
import logo from "../assets/LOGO.png";
import eyeclosed from "../assets/EYECLOSED.svg";
import more from "../assets/more.svg";
import arrow from "../assets/arrow.svg";

import colors from "../theme/colors";
import Registerinput from "../components/Register/Registerinput";
import PrivacyPolicy from "../components/Register/PrivacyPolicy";
import PhoneNumberInput from "../components/Register/PhoneNumberInput";

const Register = () => {
  const [gender, setGender] = useState("");

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  const StyledSelect = styled(Select)({
    "& .MuiSelect-icon": {
      display: "none",
    },
    color: colors.TEXT,
    fontSize: "1.2rem",
    fontFamily: "'Open Sans', sans-serif !important",
  });

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: { lg: "space-around", xs: "center" },
      }}
    >
      <Box
        component="img"
        src={login}
        alt="login"
        sx={{
          height: "100%",
          display: { lg: "flex", xs: "none" },
        }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          right: { "2xl": "5%", lg: "2%", xs: "0%" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            rowGap: "1rem",
            borderRadius: "3rem",
            width: { lg: "50rem", xs: "60rem" },
            height: { lg: "95%", md: "95%", sm: "75rem", xs: "90rem" },
            paddingY: { md: "0rem", xs: "1.5rem" },
            boxShadow: " 0px 3.65px 18.26px 0px #72727233",
          }}
        >
          <Box component="img" src={logo} alt="logo" sx={{ width: "12rem" }} />
          <Typography
            variant="h4"
            sx={{
              fontFamily: "'Open Sans', sans-serif !important",
              textAlign: "center",
              fontSize: { sm: "1.5rem", xs: "2rem" },
              color: colors.TEXT,
            }}
          >
            Enter Your Information To Get Started
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "Center",
              alignItems: "center",
              fontFamily: "'Open Sans', sans-serif !important",
              rowGap: "1rem",
              height: {
                xl: "14rem",
                lg: "14rem",
                md: "30rem",
                sm: "40rem",
                xs: "55rem",
              },
              width: "100%",
              overflowY: "scroll",
              scrollBehavior: "smooth",
              paddingTop: {
                xl: "220px",
                lg: "220px",
                md: "18rem",
                sm: "20rem",
                xs: "22rem",
              },
            }}
          >
            <Registerinput type="text" width="80%" title="Enter first name" />
            <Registerinput type="text" width="80%" title="Enter last name" />
            <Registerinput type="email" width="80%" title="Enter your email" />
            <FormControl
              fullWidth
              sx={{
                width: "80%",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "4px",
                  backgroundColor: "#F3F3F3",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            >
              <StyledSelect
                labelId="gender-select-label"
                value={gender}
                onChange={handleChange}
                displayEmpty
                renderValue={(selected) =>
                  selected ? (
                    selected
                  ) : (
                    <Typography
                      variant="h4"
                      sx={{
                        marginLeft: "auto",
                        color: colors.TEXT,
                        fontSize: "1.5rem",
                        fontFamily: "'Open Sans', sans-serif",
                        fontWeight: 400,
                      }}
                    >
                      Select your gender
                    </Typography>
                  )
                }
              >
                {/* <MenuItem value="" disabled>
                  Select your gender
                </MenuItem> */}
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </StyledSelect>

              <Box
                component="img"
                src={more}
                alt="more-icon"
                sx={{
                  position: "absolute",
                  right: "1rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  height: "3rem",
                  width: "3rem",
                  pointerEvents: "none",
                }}
              />
              <Box
                component="img"
                src={arrow}
                alt="custom-icon"
                sx={{
                  position: "absolute",
                  right: "5rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  height: "2rem",
                  width: "2rem",
                  pointerEvents: "none",
                }}
              />
            </FormControl>
            <Box
              sx={{
                width: "80%",
                display: "flex",
                flexDirection: "row",
                columnGap: "0.5rem",
              }}
            >
              <Registerinput
                type="number"
                width="45rem"
                title="Enter your phone"
              />
              <PhoneNumberInput phone={true} />
            </Box>
            <Registerinput
              width="80%"
              icon={eyeclosed}
              title="Enter your password"
            />
            <Registerinput
              width="80%"
              icon={eyeclosed}
              title="Confirm password"
            />
            <Box
              sx={{
                width: "80%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Typography
                  variant="h4"
                  sx={{
                    color: colors.TEXT,
                    fontSize: "1.5rem",
                    fontFamily: "'Open Sans', sans-serif",
                    fontWeight: 400,
                  }}
                >
                  Date of Birth
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    color: colors.RED,
                    fontSize: "1.5rem",
                    fontFamily: "'Open Sans', sans-serif",
                    fontWeight: 400,
                  }}
                >
                  *
                </Typography>
              </Box>
              <Box component="img" src={more} />
            </Box>
            <Box
              sx={{
                width: "80%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <Registerinput width="30%" title="Day*" />
              <Registerinput width="30%" title="Month*" />
              <Registerinput width="30%" title="Year*" />
            </Box>
            <PhoneNumberInput title="Select your Nationality" />
          </Box>
          <PrivacyPolicy />
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
