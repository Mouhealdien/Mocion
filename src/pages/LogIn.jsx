import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";

import login from "../assets/login.png";
import logo from "../assets/LOGO.png";
import eyeclosed from "../assets/EYECLOSED.svg";
import or from "../assets/or.svg";
import facebook_logo from "../assets/facebook_logo.svg";
import google_logo from "../assets/google_logo.svg";
import apple_logo from "../assets/apple_logo.svg";

import colors from "../theme/colors";

const LogIn = () => {
  const [activeButton, setActiveButton] = useState("register");
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  const [showPassword, setShowPassword] = useState(false);

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
            rowGap: "1.5rem",
            borderRadius: "3rem",
            width: { lg: "50rem", xs: "60rem" },
            height: { lg: "55rem", md: "60rem", xs: "65rem" },
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
              marginTop: "2rem",
              width: "100%",
            }}
          >
            <TextField
              type="text"
              placeholder="Enter Your Email"
              variant="outlined"
              fullWidth
              sx={{
                width: "80%",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "4px",
                  backgroundColor: "#F3F3F3",
                  border: `1px solid ${colors.GREY}`,
                },
                "& .MuiOutlinedInput-root:hover": {
                  borderColor: colors.GREY,
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "& .MuiOutlinedInput-root.Mui-focused": {
                  border: `1px solid ${colors.GREY}}`,
                  boxShadow: "none",
                },
              }}
              InputProps={{
                style: {
                  color: colors.TEXT,
                  fontSize: "1.2rem",
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: 400,
                },
                // endAdornment: icon && (
                //   <InputAdornment position="end">
                //     <Box
                //       component="img"
                //       src={icon}
                //       alt="icon"
                //       style={{
                //         height: iconSize,
                //         width: iconSize,
                //       }}
                //     />
                //   </InputAdornment>
                // ),
              }}
            />
            <TextField
              type={showPassword ? "text" : "password"}
              placeholder="Enter Your Password"
              variant="outlined"
              fullWidth
              sx={{
                width: "80%",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "4px",
                  backgroundColor: "#F3F3F3",
                  border: `1px solid ${colors.GREY}`,
                },
                "& .MuiOutlinedInput-root:hover": {
                  borderColor: colors.GREY,
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "& .MuiOutlinedInput-root.Mui-focused": {
                  border: `1px solid ${colors.GREY}}`,
                  boxShadow: "none",
                },
              }}
              InputProps={{
                style: {
                  color: colors.TEXT,
                  fontSize: "1.2rem",
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: 400,
                },
                endAdornment: (
                  <InputAdornment position="end">
                    <Box
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                      component="img"
                      src={eyeclosed}
                      alt="icon"
                      style={{
                        height: "3rem",
                        width: "3rem",
                        cursor: "pointer",
                      }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box
            sx={{
              width: "80%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleCheckboxChange}
                  sx={{
                    color: colors.TEXT,
                    "&.Mui-checked": {
                      color: colors.TEXT,
                    },
                  }}
                />
              }
              label="Remember me"
              sx={{
                ".MuiTypography-root": {
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  fontFamily: "'Open Sans', sans-serif !important",
                  color: colors.TEXT,
                },
              }}
            />
            <Link
              sx={{
                fontSize: "1.5rem",
                fontWeight: 400,
                fontFamily: "'Open Sans', sans-serif !important",
                color: colors.RED,
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Forgot Email?
            </Link>
            <Link
              sx={{
                fontSize: "1.5rem",
                fontWeight: 400,
                fontFamily: "'Open Sans', sans-serif !important",
                color: colors.RED,
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Forgot Password?
            </Link>
          </Box>
          <Button
            variant="text"
            sx={{
              fontFamily: "'Open Sans', sans-serif",
              color: "white",
              fontWeight: 400,
              fontSize: { lg: "1.5rem", md: "1.5rem", xs: "2.2rem" },
              textTransform: "none",
              padding: "0",
              textWrap: "nowrap",
              minWidth: "unset",
              transition: "none",
              width: "80%",
              height: { md: "6rem", xs: "6rem" },
              backgroundColor: colors.TEXT,
              borderRadius: "5rem",
            }}
            disableRipple
          >
            Next
          </Button>
          <Box
            sx={{ width: "80%", marginTop: "1rem" }}
            component="img"
            src={or}
          />
          <Box
            sx={{
              width: "80%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "1rem",
            }}
          >
            <Box
              sx={{
                border: `1px solid ${colors.color02}`,
                width: "8rem",
                borderRadius: "1rem",
                height: "6rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src={google_logo}
                sx={{ width: "3rem", borderRadius: "50vh", cursor: "pointer" }}
              />
            </Box>
            <Box
              sx={{
                border: `1px solid ${colors.color02}`,
                width: "8rem",
                borderRadius: "1rem",
                height: "6rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src={apple_logo}
                sx={{ width: "3rem", borderRadius: "50vh", cursor: "pointer" }}
              />
            </Box>
            <Box
              sx={{
                border: `1px solid ${colors.color02}`,
                width: "8rem",
                borderRadius: "1rem",
                height: "6rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src={facebook_logo}
                sx={{ width: "3rem", borderRadius: "50vh", cursor: "pointer" }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LogIn;
