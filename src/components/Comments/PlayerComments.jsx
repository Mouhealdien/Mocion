import { useState, useEffect } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import colors from "../../theme/colors";

import avatar from "../../assets/avatar.png";

const cards = [
  {
    id: 1,
    name: "Ali Alahmad",
    avatarURL: avatar,
    rate: 5,
    date: "20 Jan 2025",
    content:
      "Mocion Is A Great App For Finding Padel Courts And Players. Honestly, I Wish I Could Give It More Stars Too. Mocion Is A Great App For Finding Padel Courts And Players. Honestly, I Wish I Could Give It More Stars Too.",
  },
  {
    id: 2,
    name: "Ali Alahmad",
    avatarURL: avatar,
    rate: 4,
    date: "20 Jan 2025",
    content:
      "Mocion Is A Great App For Finding Padel Courts And Players. Honestly, I Wish I Could Give It More Stars Too. Mocion Is A Great App For Finding Padel Courts And Players. Honestly, I Wish I Could Give It More Stars Too.",
  },
  {
    id: 3,
    name: "Ali Alahmad",
    avatarURL: avatar,
    rate: 5,
    date: "20 Jan 2025",
    content:
      "Mocion Is A Great App For Finding Padel Courts And Players. Honestly, I Wish I Could Give It More Stars Too. Mocion Is A Great App For Finding Padel Courts And Players. Honestly, I Wish I Could Give It More Stars Too.",
  },
  {
    id: 4,
    name: "Ali Alahmad",
    avatarURL: avatar,
    rate: 5,
    date: "20 Jan 2025",
    content:
      "Mocion Is A Great App For Finding Padel Courts And Players. Honestly, I Wish I Could Give It More Stars Too. Mocion Is A Great App For Finding Padel Courts And Players. Honestly, I Wish I Could Give It More Stars Too.",
  },
];

const PlayerComments = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const getCardStyle = (index) => {
    const isActive = index === activeIndex;

    if (
      index === activeIndex - 1 ||
      (activeIndex === 0 && index === cards.length - 1)
    ) {
      // Left card
      return {
        left: "0",
        transform: { sm: "translateX(-100%)", xs: "translateX(-100%)" },
        opacity: 0,
      };
    }

    if (
      index === activeIndex + 1 ||
      (activeIndex === cards.length - 1 && index === 0)
    ) {
      // Right card
      return {
        right: "0",
        transform: { sm: "translateX(100%)", xs: "translateX(100%)" },
        opacity: 0,
      };
    }

    if (isActive) {
      // Active card
      return {
        opacity: 1,
      };
    }

    // Hidden cards
    return {
      opacity: 0,
    };
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: { sm: "100%", xs: "48rem" },
        width: "90%",
        margin: "auto",
        overflow: "hidden",
        borderRadius: "15px",
        marginBottom: "2rem",
      }}
    >
      {/* Cards */}
      <Box
        sx={{
          position: "relative",
          paddingTop: "3rem",
        }}
      >
        {cards.map((card, index) => (
          <Box
            key={card.id}
            sx={{
              position: "absolute",
              height: { md: "25rem", sm: "25rem", xs: "37.5rem" },
              paddingX: "2rem",
              backgroundColor: "#FFFFFF40",
              color: "black",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              borderRadius: "2rem",
              border: `solid 1px ${colors.GREY}`,
              transition: "all 0.5s",
              //gap: "1rem",
              ...getCardStyle(index),
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "3rem",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <Box
                  component="img"
                  src={card.avatarURL}
                  sx={{
                    width: { sm: "4rem", xs: "5rem" },
                    height: { sm: "4rem", xs: "5rem" },
                  }}
                />
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontFamily: "'Open Sans', sans-serif !important",
                      color: "white",
                      fontSize: { sm: "1rem", xs: "2rem" },
                    }}
                  >
                    {card.name}
                  </Typography>
                  {/* <Box sx={{ display: "flex", fontSize: "2rem" }}>
                    {[...Array(5)].map((_, starIndex) => (
                      <span key={starIndex}>
                        {starIndex < card.rate ? (
                          <Box
                            component="img"
                            src={star}
                            sx={{ width: "1rem" }}
                          />
                        ) : (
                          <Box
                            component="img"
                            src={star}
                            sx={{ width: "1rem" }}
                          />
                        )}
                      </span>
                    ))}
                  </Box> */}
                </Box>
              </Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontFamily: "'Open Sans', sans-serif !important",
                  color: "white",
                  fontSize: { sm: "1rem", xs: "2rem" },
                }}
              >
                {card.date}
              </Typography>
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "'Open Sans', sans-serif !important",
                fontSize: { sm: "1.2rem", xs: "1.5rem" },
                color: "white",
              }}
            >
              {card.content}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Navigation Dots */}
      <Box
        sx={{
          position: "absolute",
          bottom: { sm: "2rem", xs: "1rem" },
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {cards.map((_, index) => (
          <IconButton
            key={index}
            onClick={() => handleDotClick(index)}
            size="small"
          >
            <FiberManualRecordIcon
              fontSize="medium"
              sx={{
                color: index === activeIndex ? "white" : "#F3F3F34D",
              }}
            />
          </IconButton>
        ))}
      </Box>
    </Box>
  );
};

export default PlayerComments;
