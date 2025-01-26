import { Box, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";

import colors from "../../theme/colors";

const Registerinput = ({ type, title, icon, width }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <TextField
      type={(!icon && type) || showPassword ? "text" : "password"}
      placeholder={title}
      variant="outlined"
      fullWidth
      sx={{
        width: width,
        "& .MuiOutlinedInput-root": {
          borderRadius: "4px",
          backgroundColor: "#F3F3F3",
          border: `1px solid ${colors.GREY}`,
        },
        "& .MuiOutlinedInput-root:hover": {
          borderColor: colors.GREY,
        },
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
        "& .MuiOutlinedInput-root.Mui-focused": {
          border: `1px solid ${colors.GREY}}`,
          boxShadow: "none",
        },
      }}
      InputProps={{
        style: {
          color: colors.TEXT,
          fontSize: "1.2rem",
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: 400,
        },
        endAdornment: icon && (
          <InputAdornment position="end">
            <Box
              onClick={() => setShowPassword((showPassword) => !showPassword)}
              component="img"
              src={icon}
              alt="icon"
              style={{
                height: "3rem",
                width: "3rem",
                cursor: "pointer",
              }}
            />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Registerinput;
