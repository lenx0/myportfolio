import { Box, Link, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import CopyrightIcon from '@mui/icons-material/Copyright';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <Box id="contact-section" height="120px" mt={10} bgcolor="#263138" display="flex" flexDirection="column" alignItems="center" justifyContent="space-between">
            <Box flex={1} display="flex" justifyContent="center" alignItems="center">
                <Link href="https://www.facebook.com/thiago.freitas.718/" target="_blank">
                    <FacebookIcon sx={{ color: '#ffffff', mx: 1 }} />
                </Link>
                <Link href="https://github.com/lenx0" target="_blank">
                    <GitHubIcon sx={{ color: '#ffffff', mx: 1 }} />
                </Link>
                <Link href="https://www.linkedin.com/in/thiagoberaldo06/" target="_blank">
                    <LinkedInIcon sx={{ color: '#ffffff', mx: 1 }} />
                </Link>
            </Box>
            <Typography color="#ffffff" mb={1} display="flex" alignItems="center">
                Todos os direitos reservados <CopyrightIcon sx={{ ml: 0.5, width: 15, height: 15, color: '#ffffff' }} />
            </Typography>
        </Box>
    );
}

export default Footer;
