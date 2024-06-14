import React from 'react';
import { Box, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
    return (
        <Box height="160px" mt={10} bgcolor="#263138" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <Box mt={1} justifyContent="center" alignContent="center" gap={2}>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <FacebookIcon sx={{ color: '#ffffff', mr: 1 }} />
                    <Typography color="#ffffff" mt={2}>44812381823</Typography>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                    {/* <EmailIcon sx={{ color: '#ffffff', mr: 1 }} /> */}
                    <Typography color="#ffffff" mt={2}>thiagofreitas1106@gmail.com</Typography>
                </Box>
            <Typography color="#ffffff">Todos os direitos reservados <CopyrightIcon sx={{ bottom: 0, position: 'relative', width: 15, height: 15, color: '#ffffff' }} /></Typography>
            </Box>
        </Box>
    );
}

export default Footer;
