import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import hamburgerIcon from "../../assets/hamburgerIcon.png";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

import colors from "../../theme/colors";
import { useNavigate } from "react-router-dom";

const MobileMenu = ({
  src,
  navItems,
  open,
  toggleDrawer,
  activeButton,
  handleButtonClick,
}) => {
  console.log(activeButton);
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: { xs: "flex", sm: "none", md: "none" },
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        paddingX: "24px",
        height: "41px",
      }}
    >
      <Box x={{ display: { xs: "flex", sm: "none", md: "none" } }}>
        <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
          <img src={hamburgerIcon} alt="icon" />
        </IconButton>
        <Drawer
          anchor="top"
          open={open}
          onClose={toggleDrawer(false)}
          PaperProps={{
            sx: {
              top: "var(--template-frame-height, 0px)",
            },
          }}
        >
          <Box
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "background.default",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <IconButton onClick={toggleDrawer(false)}>
                <CloseRoundedIcon sx={{ fontSize: "16px" }} />
              </IconButton>
            </Box>

            {navItems.map((item) => (
              <MenuItem
                key={item.name}
                sx={{
                  color: activeButton === item.name ? colors.RED : "inherit",
                  fontSize: "16px",
                }}
                onClick={() => {
                  handleButtonClick(item.name);
                  toggleDrawer(false)();
                }}
              >
                <a
                  style={{ textDecoration: "none", color: "inherit" }}
                  href={`#${item.href}`}
                >
                  {item.name}
                </a>
              </MenuItem>
            ))}
          </Box>
        </Drawer>
      </Box>

      <img src={src} alt="logo" height="41px" width="95px" />

      <Box sx={{ display: { xs: "flex", sm: "none", md: "none" } }}>
        <Button
          onClick={() => navigate("/login")}
          fullWidth
          sx={{
            paddingX: "16px",
            border: `1px solid ${colors.TEXT}`,
            color: colors.TEXT,
            weight: "400",
            fontSize: "16px",
            textTransform: "none",
            textWrap: "nowrap",
          }}
        >
          Log In
        </Button>
      </Box>
    </Box>
  );
};

export default MobileMenu;
