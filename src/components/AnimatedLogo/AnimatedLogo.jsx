import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";

import logo from "../../assets/ANIMATIONLOGO.png";

const AnimatedLogo = () => {
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsShrunk(true);
      document.body.style.overflow = "auto";
    }, 5000);

    return () => {
      document.body.style.overflow = "auto";
      clearTimeout(timer);
    };
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        width: "100%",
        height: isShrunk ? "0" : "100vh",
        zIndex: 5,
      }}
    >
      <motion.img
        src={logo}
        initial={{
          width: "100vw",
          height: "100vh",
          top: 0,
          left: 0,
        }}
        animate={
          isShrunk
            ? {
                width: "0px",
                height: "0px",
                top: "2rem",
                left: "8rem",
              }
            : {}
        }
        transition={{ duration: 1 }}
        style={{
          position: "fixed",
          objectFit: "cover",
          zIndex: 1,
        }}
      />
    </Box>
  );
};

export default AnimatedLogo;
