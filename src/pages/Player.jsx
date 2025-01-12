import { createTheme, ThemeProvider } from "@mui/material/styles";

import MatchSearch from "../components/MatchSearch/MatchSearch";
import BenefitsPlayers from "../components/BenefitsPlayers/BenefitsPlayers";
import PlayerAppBar from "../components/AppBar/PlayerAppBar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      "2xl": 1920,
    },
  },
});

const Player = () => {
  return (
    <ThemeProvider theme={theme}>
      <PlayerAppBar />
      <Hero />
      <MatchSearch />
      <BenefitsPlayers />
      <Footer />
    </ThemeProvider>
  );
};

export default Player;
