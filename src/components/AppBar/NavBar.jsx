import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import colors from "../../theme/colors";

const NavBar = ({ navItems, activeButton, handleButtonClick }) => (
  <Box
    sx={{
      display: { xs: "none", sm: "flex" },
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      columnGap: { xl: "62px", lg: "30px", md: "24px", sm: "16px" },
    }}
  >
    {navItems.map((item) => (
      <Box
        key={item.name}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <a
          href={`#${item.href}`}
          name={item.href}
          style={{
            textDecoration: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="text"
            sx={{
              color: activeButton === item.name ? colors.RED : colors.TEXT,
              fontWeight: 400,
              fontSize: { lg: "18px", md: "14px", sm: "10px" },
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
            onClick={() => handleButtonClick(item.name)}
          >
            {item.name}
          </Button>
        </a>
      </Box>
    ))}
  </Box>
);

export default NavBar;
