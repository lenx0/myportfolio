import { Box, Divider, IconButton, Link, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import CopyrightIcon from '@mui/icons-material/Copyright';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <Box
            id="contact-section"
            sx={{
                mt: 10,
                background: "linear-gradient(135deg, #1a2328, #263138)",
                py: 5,
                px: 3,
            }}
        >
            <Box maxWidth={600} mx="auto" textAlign="center">
                <Typography fontSize={22} fontWeight={700} color="#ffffff" mb={0.5}>
                    Thiago Beraldo
                </Typography>
                <Typography color="rgba(255,255,255,0.45)" fontSize={14} mb={3}>
                    Engenheiro de Software
                </Typography>

                <Box display="flex" justifyContent="center" gap={0.5} mb={3}>
                    <IconButton
                        component={Link}
                        href="https://www.facebook.com/thiago.freitas.718/"
                        target="_blank"
                        sx={{ color: "rgba(255,255,255,0.55)", transition: "all 0.2s", '&:hover': { color: "#1877f2", transform: "translateY(-3px)" } }}
                    >
                        <FacebookIcon />
                    </IconButton>
                    <IconButton
                        component={Link}
                        href="https://github.com/lenx0"
                        target="_blank"
                        sx={{ color: "rgba(255,255,255,0.55)", transition: "all 0.2s", '&:hover': { color: "#ffffff", transform: "translateY(-3px)" } }}
                    >
                        <GitHubIcon />
                    </IconButton>
                    <IconButton
                        component={Link}
                        href="https://www.linkedin.com/in/thiagoberaldo06/"
                        target="_blank"
                        sx={{ color: "rgba(255,255,255,0.55)", transition: "all 0.2s", '&:hover': { color: "#0a66c2", transform: "translateY(-3px)" } }}
                    >
                        <LinkedInIcon />
                    </IconButton>
                </Box>

                <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", mb: 3 }} />

                <Typography
                    color="rgba(255,255,255,0.35)"
                    fontSize={13}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    gap={0.5}
                >
                    Todos os direitos reservados
                    <CopyrightIcon sx={{ width: 14, height: 14 }} />
                    {new Date().getFullYear()}
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;
