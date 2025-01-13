import { useState, useEffect } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import colors from "../../theme/colors";

import avatar from "../../assets/avatar.png";

import star from "../../assets/redstar.svg";

const cards = [
  {
    id: 1,
    name: "Ali Alahmad",
    avatarURL: avatar,
    rate: 5,
    date: "20 Jan 2025",
    content:
      "Mocion Is A Great App For Finding Padel Courts And Players. Honestly, I Wish I Could Give It More Stars Too",
  },
  {
    id: 2,
    name: "Ali Alahmad",
    avatarURL: avatar,
    rate: 4,
    date: "20 Jan 2025",
    content:
      "Mocion Is A Great App For Finding Padel Courts And Players. Honestly, I Wish I Could Give It More Stars Too",
  },
  {
    id: 3,
    name: "Ali Alahmad",
    avatarURL: avatar,
    rate: 5,
    date: "20 Jan 2025",
    content:
      "Mocion Is A Great App For Finding Padel Courts And Players. Honestly, I Wish I Could Give It More Stars Too",
  },
  {
    id: 4,
    name: "Ali Alahmad",
    avatarURL: avatar,
    rate: 5,
    date: "20 Jan 2025",
    content:
      "Mocion Is A Great App For Finding Padel Courts And Players. Honestly, I Wish I Could Give It More Stars Too",
  },
];

const Comments = () => {
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
        top: "40%",
        transform: { sm: "translateX(-50%)", xs: "translateX(-100%)" },
        opacity: 1,
      };
    }

    if (
      index === activeIndex + 1 ||
      (activeIndex === cards.length - 1 && index === 0)
    ) {
      // Right card
      return {
        right: "0",
        top: "40%",
        transform: { sm: "translateX(50%)", xs: "translateX(100%)" },
        opacity: 1,
      };
    }

    if (isActive) {
      // Active card
      return {
        left: "50%",
        top: "15%",
        transform: "translateX(-50%)",
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
      id="testimonials"
      sx={{
        position: "relative",
        width: "90%",
        height: { sm: "30rem", xs: "30rem" },
        margin: "auto",
        backgroundColor: colors.YELLOW,
        overflow: "hidden",
        borderRadius: "15px",
        marginBottom: "2rem",
      }}
    >
      {/* Cards */}
      <Box
        sx={{
          position: "relative",
          height: "20rem",
        }}
      >
        {cards.map((card, index) => (
          <Box
            key={card.id}
            sx={{
              position: "absolute",
              top: "25%",
              width: { md: "40rem", sm: "30rem", xs: "40rem" },
              height: { md: "16rem", sm: "16rem", xs: "20rem" },
              paddingX: "3rem",
              backgroundColor: "#FFFFFF40",
              color: "black",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              borderRadius: "2rem",
              border: `solid 1px ${colors.GREY}`,
              transition: "all 0.5s",
              gap: "1rem",
              ...getCardStyle(index),
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <Box
                  component="img"
                  src={card.avatarURL}
                  sx={{ width: "5rem", height: "5rem" }}
                />
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontFamily: "'Open Sans', sans-serif !important",
                      color: colors.TEXT,
                    }}
                  >
                    {card.name}
                  </Typography>
                  <Box sx={{ display: "flex", fontSize: "2rem" }}>
                    {[...Array(5)].map((_, starIndex) => (
                      <span key={starIndex}>
                        {starIndex < card.rate ? (
                          <Box
                            component="img"
                            src={star}
                            sx={{ width: "1.5rem" }}
                          />
                        ) : (
                          <Box
                            component="img"
                            src={star}
                            sx={{ width: "1.5rem" }}
                          />
                        )}
                      </span>
                    ))}
                  </Box>
                </Box>
              </Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontFamily: "'Open Sans', sans-serif !important",
                  color: colors.TEXT,
                }}
              >
                {card.date}
              </Typography>
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "'Open Sans', sans-serif !important",
                fontSize: { sm: "1rem" },
                color: colors.TEXT,
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
                color: index === activeIndex ? colors.TEXT : "#F3F3F34D",
              }}
            />
          </IconButton>
        ))}
      </Box>
    </Box>
  );
};

export default Comments;
