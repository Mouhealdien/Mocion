import { Box, Button, useMediaQuery } from "@mui/material";
import arrow from "../../assets/arrow.png";
import calander from "../../assets/icons/Calender.svg";
import search from "../../assets/icons/Search.svg";
import colors from "../../theme/colors";
import Input from "./Input"; // Import the reusable Input component

const SearchGrid = () => {
  const smallScreen = useMediaQuery("(min-width:600px)");
  const mediumScreen = useMediaQuery("(min-width:900px)");
  const largeScreen = useMediaQuery("(min-width:1200px)");
  const xlargScreen = useMediaQuery("(min-width:1536px)");
  const xxlargScreen = useMediaQuery("(min-width:1920px)");

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

  const buttonTextSize = xxlargScreen
    ? "20px"
    : xlargScreen
    ? "16px"
    : largeScreen
    ? "14px"
    : mediumScreen
    ? "12px"
    : smallScreen
    ? "8px"
    : "10px";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        rowGap: {
          sm: "2rem",
          xs: "14px",
        },
        width: "100%",
        paddingBottom: { sm: "0px", xs: "40px" },
        paddingTop: { md: "20px", xs: "4px" },
      }}
    >
      {/* First Row */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Input
          type="text"
          placeholder="Search"
          icon={search}
          iconSize={iconSize}
          fontSize={buttonTextSize}
          bgColor="#332E60"
          borderColor={colors.GREY}
        />
      </Box>

      {/* Second Row */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          columnGap: "2rem",
        }}
      >
        <Input
          type="text"
          placeholder="Game Type"
          icon={arrow}
          iconSize={iconSize}
          fontSize={buttonTextSize}
          bgColor="#332E60"
          borderColor={colors.GREY}
        />
        <Input
          type="text"
          placeholder="Date"
          icon={calander}
          iconSize={iconSize}
          fontSize={buttonTextSize}
          bgColor="#332E60"
          borderColor={colors.GREY}
        />
      </Box>

      <Button
        variant="contained"
        sx={{
          backgroundColor: colors.YELLOW,
          color: colors.TEXT,
          fontFamily: "'Open Sans', sans-serif",
          fontSize: buttonTextSize,
          fontWeight: 700,
          height: { "2xl": "3rem", sm: "4rem", xs: "6rem" },
          textTransform: "none",
        }}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchGrid;
