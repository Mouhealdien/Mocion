import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Typography,
} from "@mui/material";
import { useState } from "react";

import colors from "../../theme/colors";

const PrivacyPolicy = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "80%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={handleCheckboxChange}
              sx={{
                color: colors.TEXT,
                "&.Mui-checked": {
                  color: colors.TEXT,
                },
              }}
            />
          }
          label={
            <Typography
              variant="h4"
              sx={{
                fontSize: "1.5rem",
                fontWeight: 400,
                fontFamily: "'Open Sans', sans-serif !important",
                color: colors.TEXT,
              }}
            >
              I agree to the{" "}
              <Link
                href="#"
                sx={{
                  color: colors.RED,
                  textDecoration: "none",
                }}
              >
                Privacy Policy
              </Link>{" "}
              of the application
            </Typography>
          }
          sx={{
            alignItems: "center",
          }}
        />
      </Box>
      <Button
        disabled={!checked}
        variant="text"
        sx={{
          marginTop: "1rem",
          fontFamily: "'Open Sans', sans-serif",
          color: "white",
          fontWeight: 400,
          fontSize: { lg: "1.5rem", md: "1.5rem", xs: "2.2rem" },
          textTransform: "none",
          padding: "0",
          textWrap: "nowrap",
          minWidth: "unset",
          transition: "none",
          width: "80%",
          height: { md: "6rem", xs: "6rem" },
          backgroundColor: colors.TEXT,
          borderRadius: "5rem",
          "&.Mui-disabled": {
            color: "white",
          },
        }}
        disableRipple
      >
        Next
      </Button>
    </Box>
  );
};

export default PrivacyPolicy;
