// import { useState } from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

import Store from "./Store.jsx";

import carouselData from "./carouselData.jsx";

import colors from "../../theme/colors.js";

import arrowText from "../../assets/arrowText.png";
import arrowYellow from "../../assets/arrowYellow.png";

const BenefitsPlayers = () => {
  // const [cards, setCards] = useState(carouselData);

  // const handleNext = () => {
  //   const newOrder = [...cards];
  //   newOrder.push(newOrder.shift());
  //   setCards(newOrder);
  // };

  // const handlePrev = () => {
  //   const newOrder = [...cards];
  //   newOrder.unshift(newOrder.pop());
  //   setCards(newOrder);
  // };

  const getCardStyles = (index, id) => {
    const baseStyles = {
      position: "sticky",
      top: { sm: `calc(10% + ${id * 25}px)`, xs: "0px" },
      width: { lg: "75%", md: "75%", sm: "90%", xs: "90%" },
      height: { lg: "65vh", md: "65vh", sm: "55vh", xs: "95vh" },
      transition: "transform 1s",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxShadow: "0 0.25rem 0.5rem rgba(0, 0, 0, 0.2)",
      borderRadius: "4rem",
      marginBottom: id < 6 ? "20rem" : "2rem",
      flexDirection: { sm: "row", xs: "column" },
      backgroundColor: id % 2 === 0 ? colors.TEXT : "white",
    };

    // const positionStyles = [
    //   { transform: `translateX(0%) rotate(0deg)`, zIndex: 3 },
    //   { transform: "translateX(9%) rotate(2deg)", zIndex: 2, width: { sm: "55%", xs: '75%' }, height: { sm: "34rem", xs: '58%' }, marginBottom: "2%" },
    //   { transform: "translateX(18%) rotate(4deg)", zIndex: 1, width: { sm: "50%", xs: '50%' }, height: { sm: "30rem", xs: '55%' }, marginBottom: "3%" },
    //   { transform: "translateX(24%) rotate(6deg)", zIndex: 0, width: { sm: "48%", xs: '50%' }, height: { sm: "28rem", xs: '54%' }, marginBottom: "3%" },
    // ];

    // return { ...baseStyles, ...(positionStyles[index] || { display: "none" }) };
    return baseStyles;
  };

  return (
    <Box
      id="benefits"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        position: "relative",
        margin: "auto",
        marginBottom: "2rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: { sm: "1rem", xs: "4rem" },
        }}
      >
        <Typography
          sx={{
            textWrap: "nowrap",
            color: colors.TEXT,
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 700,
            fontSize: { md: "5rem", sm: "3.5rem", xs: "5rem" },
          }}
        >
          Benefits For Players
        </Typography>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {carouselData.map((card, index) => (
          <Card key={card.id} sx={getCardStyles(index, card.id)}>
            <Box
              component="img"
              src={card.imgURL}
              sx={{
                height: { sm: "100%", xs: "50%" },
                width: { sm: "50%", xs: "100%" },
              }}
            />
            <CardContent
              sx={{
                paddingX: { md: "5rem", sm: "3rem" },
                paddingTop: { sm: "10rem", xs: "5rem" },
                display: "flex",
                aligItems: "center",
                flexDirection: "column",
                rowGap: { "2xl": "0rem", sm: "0rem", xs: "1rem" },
                height: { sm: "100%", xs: "50%" },
                width: { sm: "50%", xs: "80%" },
                backgroundColor: card.id % 2 === 0 ? colors.TEXT : "white",
              }}
            >
              {/* <Typography
                sx={{
                  color: colors.RED,
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: {
                    "2xl": "1.5rem",
                    lg: "1.5rem",
                    md: "1.5rem",
                    sm: "1.5rem",
                    xs: "2rem",
                  },
                }}
              >
                {card.h1}
              </Typography> */}
              <Typography
                sx={{
                  color: card.id % 2 === 1 ? colors.TEXT : colors.YELLOW,
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: {
                    "2xl": "2.5rem",
                    md: "2.5rem",
                    sm: "2.5rem",
                    xs: "3.5rem",
                  },
                }}
              >
                {card.h2}
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  position: "relative",
                  textWrap: "wrap",
                  right: "3rem",
                  color: card.id % 2 === 1 ? colors.TEXT : "white",
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: {
                    "2xl": "1.5rem",
                    xl: "1.5rem",
                    md: "1.5rem",
                    sm: "1.6rem",
                    xs: "2rem",
                  },
                  lineHeight: {
                    "2xl": "2.5rem",
                    xl: "2.5rem",
                    md: "3rem",
                    sm: "3rem",
                    xs: "3.5rem",
                  },
                }}
              >
                {card.text}
              </Typography>

              <Box
                component="img"
                src={card.id % 2 === 1 ? arrowYellow : arrowText}
                sx={{
                  width: { md: "4rem", sm: "5rem", xs: "8rem" },
                  position: "absolute",
                  bottom: "2rem",
                  left: { lg: "52.5%", sm: "55%", xs: "6rem" },
                  cursor: "pointer",
                }}
                //onClick={handleNext}
              />

              <Box
                sx={{
                  position: "absolute",
                  bottom: "2%",
                  right: "5%",
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: { sm: "5rem", xs: "10rem" },
                  color: card.id % 2 === 1 ? colors.TEXT : colors.YELLOW,
                }}
              >
                {card.id}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Store />
    </Box>
  );
};

export default BenefitsPlayers;
