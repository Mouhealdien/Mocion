import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import colors from "../../theme/colors";

export default function LoginMenu ({ loginItems, activeButton, handleButtonClick })  {

    return (
        <Box
            sx={{
            display: { xs: 'none', sm: 'flex' },
            justifyContent: 'space-between',
            alignItems: 'center',
            overflow: 'hidden',
            gap: { xl: '26.5px', md: '16px', sm: '6.95px' },
            height: { xl: '64px', lg: '50px', md: '50px', sm: '30px' },
            }}
        >
            {loginItems.map((name) => (
            <Box
                key={name}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '90%'
                }}
            >
                <a
                href="#"
                    style={{
                        textDecoration: 'none',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%'
                    }}
                >
                    <Button
                        variant="text"
                        sx={{
                        color: activeButton === name ? colors.YELLOW : colors.TEXT,
                        backgroundColor: activeButton === name ? colors.TEXT : 'transparent',
                        fontFamily: "'Open Sans', sans-serif !important",
                        fontWeight: 400,
                        fontSize: { xl: '18px', md: '14px', sm: '8px'}, 
                        textTransform: 'none',
                        paddingX: { xl: '12px', lg: '10px', md: '10px', sm: '6px'},
                        textWrap: 'nowrap',
                        border: `1px solid ${colors.TEXT}`,
                        minWidth: 'unset',
                        height: '100%',
                        transition: 'none',
                        }}
                        onClick={() => handleButtonClick(name)}
                    >
                        {name}
                    </Button>
                </a>
            </Box>
            ))}
        </Box>
    )
};