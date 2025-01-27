import {
  Box,
  Button,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";

import logo from "../../assets/icon1.svg";
import exit from "../../assets/exit.svg";
import contact from "../../assets/contact.svg";
import welcome from "../../assets/welcome.svg";
import newsletter from "../../assets/newsletter.svg";
import clip from "../../assets/clip.svg";
import email from "../../assets/email.svg";
import profile from "../../assets/PROFILE.svg";
import emailIcon from "../../assets/EMAILICON.png";

import colors from "../../theme/colors";
import { useEffect, useState } from "react";

import { slideInBottom } from "../../theme/animations";
import { InputAdornment, TextField, useMediaQuery } from "@mui/material";
import { useLocation } from "react-router-dom";

const Top = () => {
  const [emailForm, setEmailForm] = useState(false);
  const [newsLetter, setNewsLetter] = useState(false);
  const [selectedRole, setSelectedRole] = useState("player");

  const smallScreen = useMediaQuery("(min-width:600px)");
  const mediumScreen = useMediaQuery("(min-width:900px)");
  const largeScreen = useMediaQuery("(min-width:1200px)");
  const xlargScreen = useMediaQuery("(min-width:1536px)");
  const xxlargScreen = useMediaQuery("(min-width:1920px)");

  const location = useLocation();

  useEffect(() => {
    console.log(location.hash);
    if (location.hash === "#contact-us") {
      setEmailForm(true);
      setNewsLetter(false);
    } else setEmailForm(false);
  }, [location.hash]);

  const iconSize = xxlargScreen
    ? "2.5rem"
    : xlargScreen
    ? "2.5rem"
    : largeScreen
    ? "2.5rem"
    : mediumScreen
    ? "2.5rem"
    : smallScreen
    ? "2.5rem"
    : "20px";

  return (
    <Box
      id="contact-us"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: { xs: "column", sm: "row" },
        rowGap: { sm: "0px", xs: "13px" },
      }}
    >
      {/* Left Subsection */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: { xl: "20px", lg: "16px", md: "12px", sm: "10px", xs: "8px" },
        }}
      >
        <Box
          sx={{
            height: { xl: "74px", md: "50px", sm: "32px", xs: "40px" },
            width: { xl: "172px", md: "120px", sm: "75px", xs: "90px" },
          }}
        >
          <img src={logo} alt="logo" width="100%" height="100%" />
        </Box>
        <Typography
          variant="h6"
          sx={{
            color: colors.WHITE,
            fontSize: {
              sm: "1.5rem",
              xs: "12px",
            },
            lineHeight: {
              "2xl": "33px",
              xl: "28px",
              lg: "24px",
              md: "18px",
              sm: "14px",
              xs: "16px",
            },
            fontFamily: "'Open Sans', sans-serif !important",
            fontWeight: "400",
          }}
        >
          We will happily answer your queries if you need any help or
          clarification.
        </Typography>
      </Box>

      {/* Right Subsection */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: { sm: "center", xs: "flex-start" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            onClick={() => {
              setEmailForm(false);
              setNewsLetter(true);
            }}
            sx={{
              marginRight: "1.5rem",
              //backgroundColor: colors.YELLOW,
              color: colors.YELLOW,
              fontWeight: 700,
              fontFamily: "'Open Sans', sans-serif !important",
              fontSize: { sm: "1.5rem", xs: "2rem" },
              paddingX: "0rem",
              border: `1px solid ${colors.YELLOW}`,
              width: { sm: "20rem", xs: "25rem" },
              height: { sm: "4.5rem", xs: "5rem" },
              borderRadius: "8px",
              textTransform: "none",
            }}
          >
            Join Our Newsletter
          </Button>
          {newsLetter && (
            <Box
              sx={{
                zIndex: 4,
                width: "27.5rem",
                height: {
                  lg: "40.8rem",
                  md: "42.8rem",
                  sm: "45rem",
                  xs: "50rem",
                },
                left: { md: "70rem", sm: "50rem", xs: "2rem" },
                borderRadius: "1rem",
                backgroundColor: "white",
                position: "absolute",
                bottom: "10rem",
                animation: newsLetter
                  ? `${slideInBottom} 1.5s ease-out`
                  : "none",
              }}
            >
              <Box
                sx={{
                  borderTopRightRadius: "1rem",
                  borderTopLeftRadius: "1rem",
                  display: "flex",
                  justifyContent: "space-between",
                  aligItems: "center",
                  paddingX: "1rem",
                  paddingY: "0.5rem",
                  backgroundColor: colors.TEXT,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    gap: "0.5rem",
                  }}
                >
                  <Box
                    component="img"
                    src={emailIcon}
                    sx={{ width: "2.5rem" }}
                  />
                  <Typography
                    sx={{
                      color: "white",
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: "1.2rem",
                    }}
                  >
                    join our newsletter
                  </Typography>
                </Box>
                <Box
                  onClick={() => setNewsLetter(false)}
                  component="img"
                  src={exit}
                  sx={{ cursor: "pointer", height: iconSize, width: iconSize }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  aligItems: "center",
                  marginTop: "1rem",
                }}
              >
                <Box
                  component="img"
                  src={newsletter}
                  sx={{ width: "9rem", marginBottom: { xs: "1rem" } }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  aligItems: "center",
                  marginTop: "1rem",
                }}
              >
                <TextField
                  type="text"
                  variant="outlined"
                  placeholder="Enter Your Name"
                  sx={{
                    boxShadow: "4.56px 3.64px 18.22px 0px #00000021",
                    width: "90%",
                    borderRadius: "2rem",
                    fontSize: { sm: "1rem", xs: "1.5rem" },
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "2rem",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                    "& .MuiOutlinedInput-root.Mui-focused": {
                      boxShadow: "4.56px 3.64px 18.22px 0px #00000021",
                    },
                  }}
                  InputProps={{
                    style: {
                      color: "#747474",
                      fontSize: { md: "1.5rem", sm: "1.2rem", xs: "1.5rem" },
                      fontFamily: "'Open Sans', sans-serif",
                      fontWeight: 400,
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <Box
                          component="img"
                          src={profile}
                          alt="icon"
                          style={{
                            height: iconSize,
                            width: iconSize,
                          }}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  aligItems: "center",
                  marginTop: "1rem",
                }}
              >
                <TextField
                  type="text"
                  variant="outlined"
                  placeholder="Enter Your Email"
                  sx={{
                    boxShadow: "4.56px 3.64px 18.22px 0px #00000021",
                    width: "90%",
                    borderRadius: "2rem",
                    fontSize: { sm: "1rem", xs: "1.5rem" },
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "2rem",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                    "& .MuiOutlinedInput-root.Mui-focused": {
                      boxShadow: "4.56px 3.64px 18.22px 0px #00000021",
                    },
                  }}
                  InputProps={{
                    style: {
                      color: "#747474",
                      fontSize: { md: "1.5rem", sm: "1.2rem", xs: "1.5rem" },
                      fontFamily: "'Open Sans', sans-serif",
                      fontWeight: 400,
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <Box
                          component="img"
                          src={email}
                          alt="icon"
                          style={{
                            height: iconSize,
                            width: iconSize,
                          }}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    color: colors.TEXT,
                    fontWeight: 700,
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: { lg: "1.5rem", xs: "1.2rem" },
                    marginTop: { lg: "3rem", xs: "2rem" },
                    marginBottom: "1rem",
                    marginLeft: "2rem",
                  }}
                >
                  Persona Type?
                </Typography>
              </Box>
              <RadioGroup
                row
                value={selectedRole}
                onChange={(event) => setSelectedRole(event.target.value)}
                sx={{
                  marginTop: "1rem",
                  marginBottom: "1rem",
                  marginLeft: "2rem",
                }}
              >
                <FormControlLabel
                  value="player"
                  control={
                    <Radio
                      sx={{
                        color: colors.TEXT,
                        "&.Mui-checked": {
                          color: colors.TEXT,
                        },
                      }}
                    />
                  }
                  label="Player"
                  sx={{
                    color: colors.TEXT,
                    fontWeight: 400,
                    fontSize: "1.5rem",
                    fontFamily: "'Open Sans', sans-serif !important",
                  }}
                />
                <FormControlLabel
                  value="clubOwner"
                  control={
                    <Radio
                      sx={{
                        color: colors.TEXT,
                        "&.Mui-checked": {
                          color: colors.TEXT,
                        },
                      }}
                    />
                  }
                  label="Club Owner"
                  sx={{
                    color: colors.TEXT,
                    fontWeight: 400,
                    fontSize: "1.5rem",
                    fontFamily: "'Open Sans', sans-serif !important",
                  }}
                />
              </RadioGroup>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  aligItems: "center",
                  marginTop: { lg: "1rem", xs: "1rem" },
                }}
              >
                <Button
                  sx={{
                    fontSize: "1.5rem",
                    textTransform: "none",
                    color: colors.TEXT,
                    borderRadius: "3rem",
                    width: "90%",
                    backgroundColor: colors.YELLOW,
                  }}
                >
                  Send
                </Button>
              </Box>
            </Box>
          )}
          <Button
            onClick={() => {
              setEmailForm(true);
              setNewsLetter(false);
            }}
            sx={{
              backgroundColor: colors.YELLOW,
              color: colors.TEXT,
              fontWeight: 700,
              fontFamily: "'Open Sans', sans-serif !important",
              fontSize: { sm: "1.5rem", xs: "2rem" },
              paddingX: "0rem",
              width: { sm: "20rem", xs: "25rem" },
              height: { sm: "4.5rem", xs: "5rem" },
              borderRadius: "8px",
              textTransform: "none",
            }}
          >
            Let&apos;s Connect Now
          </Button>
          {emailForm && (
            <Box
              sx={{
                width: "27.5rem",
                height: { lg: "45rem", md: "46rem", sm: "45rem", xs: "47rem" },
                borderRadius: "1rem",
                backgroundColor: "white",
                position: "absolute",
                bottom: "10rem",
                right: { sm: "2rem", xs: "17rem" },
                animation: emailForm
                  ? `${slideInBottom} 1.5s ease-out`
                  : "none",
              }}
            >
              <Box
                sx={{
                  borderTopRightRadius: "1rem",
                  borderTopLeftRadius: "1rem",
                  display: "flex",
                  justifyContent: "space-between",
                  aligItems: "center",
                  paddingX: "1rem",
                  paddingY: "0.5rem",
                  backgroundColor: colors.TEXT,
                }}
              >
                <Box component="img" src={contact} sx={{ width: "9rem" }} />
                <Box
                  onClick={() => setEmailForm(false)}
                  component="img"
                  src={exit}
                  sx={{ cursor: "pointer", height: iconSize, width: iconSize }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  aligItems: "center",
                  marginTop: "1rem",
                }}
              >
                <Box
                  component="img"
                  src={welcome}
                  sx={{ width: "9rem", marginBottom: { xs: "1rem" } }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  aligItems: "center",
                  marginTop: "1rem",
                }}
              >
                <TextField
                  type="text"
                  variant="outlined"
                  placeholder="Write Your Email"
                  sx={{
                    boxShadow: "4.56px 3.64px 18.22px 0px #00000021",
                    width: "90%",
                    borderRadius: "2rem",
                    fontSize: { sm: "1rem", xs: "1.5rem" },
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "2rem",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                    "& .MuiOutlinedInput-root.Mui-focused": {
                      boxShadow: "4.56px 3.64px 18.22px 0px #00000021",
                    },
                  }}
                  InputProps={{
                    style: {
                      color: "#747474",
                      fontSize: { md: "1.5rem", sm: "1.2rem", xs: "1.5rem" },
                      fontFamily: "'Open Sans', sans-serif",
                      fontWeight: 400,
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <Box
                          component="img"
                          src={email}
                          alt="icon"
                          style={{
                            height: iconSize,
                            width: iconSize,
                          }}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  aligItems: "center",
                  marginTop: "1.5rem",
                  height: { md: "17rem", sm: "15rem", xs: "12rem" },
                }}
              >
                <TextField
                  type="text"
                  multiline="true"
                  placeholder="Write Your Message"
                  sx={{
                    fontSize: { sm: "1rem", xs: "1.5rem" },
                    height: { md: "17rem", sm: "15rem", xs: "12rem" },
                    boxShadow: "4.56px 3.64px 18.22px 0px #00000021",
                    width: "90%",
                    borderRadius: "2rem",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "2rem",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                    "& .MuiOutlinedInput-root.Mui-focused": {
                      boxShadow: "none",
                    },
                  }}
                  InputProps={{
                    style: {
                      fontSize: { md: "1.5rem", sm: "1.2rem", xs: "1.5rem" },
                      color: "#747474",
                      fontFamily: "'Open Sans', sans-serif !important",
                      fontWeight: 400,
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <Box
                          component="img"
                          src={clip}
                          alt="icon"
                          style={{
                            position: "absolute",
                            right: "2.2rem",
                            top: "1.5rem",
                            height: iconSize,
                            width: iconSize,
                          }}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  aligItems: "center",
                  marginTop: "1.5rem",
                }}
              >
                <Button
                  sx={{
                    fontSize: "1.5rem",
                    textTransform: "none",
                    color: colors.TEXT,
                    borderRadius: "3rem",
                    width: "90%",
                    backgroundColor: colors.YELLOW,
                  }}
                >
                  Send
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Top;
