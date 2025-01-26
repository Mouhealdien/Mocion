import { Box, Button, Typography } from "@mui/material";

import login from "../assets/login.png";
import logo from "../assets/LOGO.png";
import { useState } from "react";

import colors from "../theme/colors";
import { useNavigate } from "react-router-dom";

const LogInAndRegister = () => {
  const [activeButton, setActiveButton] = useState("register");
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const [activeButton2, setActiveButton2] = useState("privacy");
  const handleButtonClick2 = (buttonName) => {
    setActiveButton2(buttonName);
  };

  const navigate = useNavigate();

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
            height: "70%",
            boxShadow: " 0px 3.65px 18.26px 0px #72727233",
          }}
        >
          <Box component="img" src={logo} alt="logo" sx={{ width: "12rem" }} />
          <Typography
            variant="h4"
            sx={{
              fontFamily: "'Open Sans', sans-serif !important",
              textAlign: "center",
              fontSize: { sm: "2.5rem", xs: "2.5rem" },
              color: colors.TEXT,
            }}
          >
            Welcome to Mocion
          </Typography>
          <Box
            sx={{
              fontFamily: "'Open Sans', sans-serif !important",
              display: "flex",
              columnGap: "4rem",
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
          >
            <Button
              variant="text"
              sx={{
                color: activeButton === "register" ? colors.RED : colors.TEXT,
                fontWeight: 400,
                fontSize: { lg: "1.5rem", md: "1.5rem", xs: "2.2rem" },
                textTransform: "none",
                height: "32px",
                padding: "0",
                textWrap: "nowrap",
                fontFamily: "'Open Sans', sans-serif !important",
                minWidth: "unset",
                transition: "none",
                backgroundColor: "transparent",
              }}
              disableRipple
              onClick={() => handleButtonClick("register")}
            >
              Register
            </Button>
            <Button
              variant="text"
              sx={{
                color: activeButton === "login" ? colors.RED : colors.TEXT,
                fontWeight: 400,
                fontSize: { lg: "1.5rem", md: "1.5rem", xs: "2.2rem" },
                textTransform: "none",
                height: "32px",
                padding: "0",
                textWrap: "nowrap",
                fontFamily: "'Open Sans', sans-serif !important",
                minWidth: "unset",
                transition: "none",
                backgroundColor: "transparent",
              }}
              disableRipple
              onClick={() => handleButtonClick("login")}
            >
              Log In
            </Button>
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
              height: { md: "5rem", xs: "6rem" },
              backgroundColor: colors.TEXT,
              borderRadius: "2rem",
            }}
            disableRipple
            onClick={() =>
              activeButton === "register"
                ? navigate("/register")
                : navigate("/login")
            }
          >
            Player {activeButton === "register" && "Registeration"}
            {activeButton === "login" && "Log In"}
          </Button>
          <Button
            variant="text"
            sx={{
              marginBottom: "2rem",
              color: colors.TEXT,
              fontWeight: 400,
              fontSize: { lg: "1.5rem", md: "1.5rem", xs: "2.2rem" },
              textTransform: "none",
              padding: "0",
              textWrap: "nowrap",
              fontFamily: "'Open Sans', sans-serif !important",
              minWidth: "unset",
              transition: "none",
              width: "80%",
              height: { md: "5rem", xs: "6rem" },
              backgroundColor: "white",
              border: `1px solid ${colors.TEXT}`,
              borderRadius: "2rem",
            }}
            disableRipple
            onClick={() =>
              activeButton === "register"
                ? navigate("/register")
                : navigate("/login")
            }
          >
            Club Owner {activeButton === "register" && "Registeration"}{" "}
            {activeButton === "login" && "Log In"}
          </Button>
          <Box sx={{ display: "flex", columnGap: "5rem" }}>
            <Button
              variant="text"
              sx={{
                color: activeButton2 === "privacy" ? colors.RED : colors.TEXT,
                fontWeight: 400,
                fontSize: { lg: "1.5rem", md: "1.5rem", xs: "2.2rem" },
                textTransform: "none",
                height: "32px",
                padding: "0",
                textWrap: "nowrap",
                fontFamily: "'Open Sans', sans-serif !important",
                minWidth: "unset",
                transition: "none",
                backgroundColor: "transparent",
              }}
              disableRipple
              onClick={() => handleButtonClick2("privacy")}
            >
              Privacy Policy
            </Button>
            <Button
              variant="text"
              sx={{
                color: activeButton2 === "terms" ? colors.RED : colors.TEXT,
                fontWeight: 400,
                fontSize: { lg: "1.5rem", md: "1.5rem", xs: "2.2rem" },
                textTransform: "none",
                height: "32px",
                padding: "0",
                textWrap: "nowrap",
                fontFamily: "'Open Sans', sans-serif !important",
                minWidth: "unset",
                transition: "none",
                backgroundColor: "transparent",
              }}
              disableRipple
              onClick={() => handleButtonClick2("terms")}
            >
              Terms
            </Button>
            <Button
              variant="text"
              sx={{
                color: activeButton2 === "help" ? colors.RED : colors.TEXT,
                fontWeight: 400,
                fontSize: { lg: "1.5rem", md: "1.5rem", xs: "2.2rem" },
                textTransform: "none",
                height: "32px",
                padding: "0",
                textWrap: "nowrap",
                fontFamily: "'Open Sans', sans-serif !important",
                minWidth: "unset",
                transition: "none",
                backgroundColor: "transparent",
              }}
              disableRipple
              onClick={() => handleButtonClick2("help")}
            >
              Help
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LogInAndRegister;
