import { useState, useEffect } from "react";
import {
  FormControl,
  MenuItem,
  Box,
  Select,
  styled,
  Typography,
  //CircularProgress,
} from "@mui/material";

import arrow from "../../assets/arrow.svg";

import colors from "../../theme/colors";

const StyledSelect = styled(Select)({
  "& .MuiSelect-icon": {
    display: "none",
  },
  color: colors.TEXT,
  fontSize: "1.2rem",
  fontFamily: "'Open Sans', sans-serif !important",
});

const PhoneNumberInput = ({ phone }) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [open, setOpen] = useState(false);
  //const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        const formattedData = data.map((country) => ({
          name: country.name.common,
          code: country.idd?.root + (country.idd?.suffixes?.[0] || ""),
          flag: country.flags.svg,
        }));
        const sortedCountries = formattedData.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        setCountries(sortedCountries);
        const defaultCountry = sortedCountries.find((c) => c.code === "+971");
        setSelectedCountry(defaultCountry || sortedCountries[0]);
      } catch (error) {
        console.error("Error fetching country data:", error);
      } finally {
        //setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //   if (loading) {
  //     return <CircularProgress />;
  //   }

  return (
    <FormControl
      fullWidth
      variant="outlined"
      sx={{
        width: phone ? "60%" : "80%",
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
      }}
    >
      <StyledSelect
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        value={selectedCountry}
        onChange={(e) => {
          handleChange(e);
          handleClose();
        }}
        displayEmpty
        renderValue={(selected) => {
          // if (!selected)
          //   return (
          //     <Box
          //       sx={{
          //         display: "flex",
          //         alignItems: "center",
          //         gap: "0.5rem",
          //       }}
          //     >
          //       <Typography
          //         variant="h4"
          //         sx={{
          //           color: colors.TEXT,
          //           fontSize: "1.2rem",
          //           fontFamily: "'Open Sans', sans-serif",
          //           fontWeight: 400,
          //         }}
          //       >
          //         {title}
          //       </Typography>
          //       <Box
          //         component="img"
          //         src={arrow}
          //         onClick={handleOpen}
          //         alt="custom-icon"
          //         sx={{
          //           position: "absolute",
          //           right: "5rem",
          //           top: "50%",
          //           transform: "translateY(-50%)",
          //           height: "2rem",
          //           width: "2rem",
          //           pointerEvents: "none",
          //         }}
          //       />
          //     </Box>
          //   );
          return (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "1.8rem",
              }}
            >
              {!phone && (
                <Typography
                  variant="h4"
                  sx={{
                    color: colors.TEXT,
                    fontSize: "1.2rem",
                    fontFamily: "'Open Sans', sans-serif",
                    fontWeight: 400,
                  }}
                >
                  {selected.name}
                </Typography>
              )}
              {phone && (
                <Box sx={{ height: "2rem" }}>
                  <Typography
                    variant="h4"
                    sx={{
                      color: colors.TEXT,
                      fontSize: "1.5rem",
                      fontFamily: "'Open Sans', sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    {selected.code}
                  </Typography>
                </Box>
              )}
              <Box
                onClick={handleOpen}
                component="img"
                src={arrow}
                alt="custom-icon"
                sx={{
                  position: "absolute",
                  right: "5rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  height: "2rem",
                  width: "2rem",
                  pointerEvents: "none",
                }}
              />
              <Box
                component="img"
                src={selected.flag}
                alt={`${selected.name} flag`}
                sx={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "2rem",
                  height: "2rem",
                  right: "1.5rem",
                  borderRadius: "50rem",
                }}
              />
            </Box>
          );
        }}
      >
        {/* <MenuItem value="" disabled>
          Select your country and code
        </MenuItem> */}
        {countries.map((country, index) => (
          <MenuItem key={index} value={country}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <Box
                component="img"
                src={country.flag}
                alt={`${country.name} flag`}
                sx={{ width: "2rem", height: "2rem" }}
              />
              <Typography
                variant="h4"
                sx={{
                  color: colors.TEXT,
                  fontSize: "1.2rem",
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: 400,
                }}
              >
                {country.name}
              </Typography>
              {phone && (
                <Typography
                  variant="h4"
                  sx={{
                    marginLeft: "auto",
                    color: colors.TEXT,
                    fontSize: "1.5rem",
                    fontFamily: "'Open Sans', sans-serif",
                    fontWeight: 400,
                  }}
                >
                  {country.code}
                </Typography>
              )}
            </Box>
          </MenuItem>
        ))}
      </StyledSelect>
    </FormControl>
  );
};

export default PhoneNumberInput;
