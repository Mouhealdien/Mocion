import React from "react";
import { Box, TextField, InputAdornment } from "@mui/material";

const Input = ({
  type,
  placeholder,
  icon,
  width,
  iconSize,
  fontSize,
  bgColor,
  borderColor,
}: {
  type: string;
  placeholder: string;
  icon?: string;
  width: any;
  iconSize: string;
  fontSize: string;
  bgColor: string;
  borderColor: string;
}) => {
  return (
    <TextField
      type={type}
      placeholder={placeholder}
      variant="outlined"
      fullWidth
      sx={{
        width,
        "& .MuiOutlinedInput-root": {
          borderRadius: "4px",
          backgroundColor: bgColor,
          border: `1px solid ${borderColor}`,
        },
        "& .MuiOutlinedInput-root:hover": {
          borderColor,
        },
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
        "& .MuiOutlinedInput-root.Mui-focused": {
          border: `1px solid ${borderColor}`,
          boxShadow: "none",
        },
      }}
      InputProps={{
        style: {
          color: "#fff",
          fontSize,
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: 400,
        },
        endAdornment: icon && (
          <InputAdornment position="end">
            <Box
              component="img"
              src={icon}
              alt="icon"
              style={{
                height: iconSize,
                width: iconSize,
              }}
            />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Input;
