import Box from "@mui/material/Box";

const Logo = ({ src }) => (
    <Box
        sx={{
        display: { xs: 'none', sm: 'flex', md: 'flex' },
        width: {xl: '160px', lg: '130px', md: '100px', sm: '70px'},
        height: {xl: '68px', lg: '50px', md: '40px', sm: '30px'}
        }}
    >
        <img 
        src={src} 
        alt="logo" 
        style={{ 
            height: '100%',
            width: '100%'
        }} 
        />
    </Box>
);

export default Logo;