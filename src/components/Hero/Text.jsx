import { Box, Typography, useMediaQuery } from '@mui/material';
import ball from '../../assets/ball.png';

import colors from '../../theme/colors';

const Text = () => {

    const smallScreen = useMediaQuery('(min-width:600px)');
    const mediumScreen = useMediaQuery('(min-width:900px)');
    const largeScreen = useMediaQuery('(min-width:1200px)');
    const xlargScreen = useMediaQuery('(min-width:1536px)');
    const xxlargScreen = useMediaQuery('(min-width:1920px)');

    const iconSize = xxlargScreen ? '220px' : xlargScreen 
    ? '180px' : largeScreen ? '120px' : mediumScreen ? '100px' : smallScreen ? '60px' : '80px';

    const typographyStyles = {
        color: colors.TEXT,
        fontFamily: "'Open Sans', sans-serif !important",
        fontSize: { '2xl': '160px', xl: '120px', lg: '80px' },
        lineHeight: { '2xl': '215px', xl: '170px', lg: '125px' },
        fontWeight: 700,
    };

    return (
        <Box 
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexDirection: 'column',
                position: 'absolute',
                top: 0,
                right: 0,
                zIndex: 3, 
                width: '45%',
                paddingTop: '5%',
            }}
        >
            <Typography sx={typographyStyles}>
                READY?
            </Typography>
            <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'row', columnGap: '20px' }}>
                <Typography
                    sx={{
                        ...typographyStyles,
                        //fontFamily: "'Margot Marker', sans-serif !important",
                        position: 'relative',
                        zIndex: 2
                    }}
                >
                    JOIN US
                </Typography>
                <Box
                    sx={{
                        position: 'absolute', 
                        top: { '2xl': '70px', xl: '60px', lg: '45px' },
                        left: 0, 
                        backgroundColor: colors.RED,
                        width: { '2xl': '650px', xl: '480px', lg: '320px' },
                        height: { '2xl': '85px', xl: '65px', lg: '45px' },
                        zIndex: 1,
                        borderRadius: '78px',
                    }}
                />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'row', columnGap: '20px' }}>
                <Typography sx={{ 
                    ...typographyStyles, 
                    fontSize: { '2xl': '200px', xl: '140px', lg: '120px' }, 
                    lineHeight: { '2xl': '271px', xl: '200px', lg: '140px' } 
                    }}>N
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img loading="lazy" src={ball} alt="ball" style={{ width: iconSize, height: iconSize }} />
                </Box>
                <Typography sx={{ 
                    ...typographyStyles, 
                    fontSize: { '2xl': '200px', xl: '140px', lg: '120px' }, 
                    lineHeight: { '2xl': '271px', xl: '200px', lg: '140px' } 
                    }}>W
                </Typography>
            </Box>
        </Box>
    );
};

export default Text;