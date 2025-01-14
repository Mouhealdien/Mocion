import { createTheme, ThemeProvider } from "@mui/material/styles";

import ClubOwnerAppBar from "../components/AppBar/ClubOwnerAppBar";
import Footer from "../components/Footer/Footer";
import ClubOwnerHero from "../components/Hero/ClubOwnerHero";
import BenefitsClubOwner from "../components/BenefitsClubOwner/BenefitsClubOwner";
import PadelCourts from "../components/PadelCourts/PadelCourts";
import Comments from "../components/Comments/Comments";
import Plan from "../components/Plan/Plan";

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

const ClubOwner = () => {
  return (
    <ThemeProvider theme={theme}>
      <ClubOwnerAppBar />
      <ClubOwnerHero />
      <BenefitsClubOwner />
      <PadelCourts />
      <Comments />
      <Plan />
      <Footer />
    </ThemeProvider>
  );
};

export default ClubOwner;
