import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import FacebookIcon from "../../assets/facebook.svg";
import LinkedInIcon from "../../assets/linkedin.svg";
import InstagramIcon from "../../assets/instagram.svg";
import YoutubeIcon from "../../assets/YoutubeIcon.svg";

import colors from "../../theme/colors";

const Bottom = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingTop: { sm: "2rem", xs: "4rem" },
        borderTop: `1px solid ${colors.GREY}`,
      }}
    >
      <Box
        sx={{
          display: "flex",
          columnGap: { sm: "1rem", xs: "1.5rem" },
          justifyContent: { xs: "center", sm: "flex-start" },
        }}
      >
        <a
          href="https://www.instagram.com/mocion.io?igsh=MWwyZzZqMjZ5dnFiMQ=="
          target="blank"
        >
          <Box
            component="img"
            src={InstagramIcon}
            sx={{
              width: { sm: "3rem", xs: "5rem" },
              height: { sm: "3rem", xs: "5rem" },
            }}
          />
        </a>
        <a
          href="https://www.facebook.com/Mocion.io?mibextid=ZbWKwL"
          target="blank"
        >
          <Box
            component="img"
            src={FacebookIcon}
            sx={{
              width: { sm: "3rem", xs: "5rem" },
              height: { sm: "3rem", xs: "5rem" },
            }}
          />
        </a>
        <a href="https://www.linkedin.com/company/mocion-io/" target="blank">
          <Box
            component="img"
            src={LinkedInIcon}
            sx={{
              width: { sm: "3rem", xs: "5rem" },
              height: { sm: "3rem", xs: "5rem" },
            }}
          />
        </a>
        <a href="https://youtube.com/@mocion-io?feature=shared" target="blank">
          <Box
            component="img"
            src={YoutubeIcon}
            sx={{
              width: { sm: "3rem", xs: "5rem" },
              height: { sm: "3rem", xs: "5rem" },
            }}
          />
        </a>
      </Box>

      <Typography
        variant="h6"
        sx={{
          color: colors.GREY,
          fontSize: { sm: "1.2rem", xs: "8px" },
          textAlign: "left",
          fontWeight: 400,
          fontFamily: "'Open Sans', sans-serif !important",
        }}
      >
        All Right Reserved @Mocion
      </Typography>
    </Box>
  );
};

export default Bottom;
