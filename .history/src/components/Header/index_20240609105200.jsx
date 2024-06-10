import { Typography, Box, Link, styled } from "@mui/material";
import Logo from "/assets/logos/logo.svg";
import Github from "/assets/icons/Github.svg";
import Linkedin from "/assets/icons/Linkedin.svg";

export default function Header() {
  const menuItems = [
    "Home",
    "Sobre",
    "Projetos",
    "Serviços",
    "Resumo",
    "Contato",
  ];

  const Hexagon = styled(Box)(({ theme }) => ({
    width: '100px',
    height: '57.74px', // Altura do hexágono ajustada
    backgroundColor: theme.palette.primary.main,
    position: 'relative',
    margin: '28.87px 0', // Para alinhar verticalmente
    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      width: '0',
      borderLeft: '50px solid transparent',
      borderRight: '50px solid transparent',
    },
    '&::before': {
      bottom: '100%',
      borderBottom: '28.87px solid', // Metade da altura do hexágono
      borderBottomColor: theme.palette.primary.main,
    },
    '&::after': {
      top: '100%',
      width: '0',
      borderTop: '28.87px solid', // Metade da altura do hexágono
      borderTopColor: theme.palette.primary.main,
    },
  }));

  return (
    <>
      <Box
        component="header"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: "20px",
        }}
      >
        <Hexagon />
        <Box display="flex">
          <Box component="img" src={Logo} />
          <Typography
            sx={{
              fontSize: 36,
              color: "#445964",
              fontWeight: 700,
              ml: 2,
            }}
          >
            Thiago Beraldo
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "96px",
            color: "#445964",
          }}
        >
          {menuItems.map((item) => (
            <Typography sx={{ cursor: "pointer", fontWeight: 700 }} key={item}>
              {item}
            </Typography>
          ))}
        </Box>
        <Box display="flex" gap={2} pl={3}>
          <Box mt={0.3}>
            <Link href="https://github.com/lenx0">
              <img src={Github} />
            </Link>
          </Box>
          <Box>
            <Link href="https://www.linkedin.com/in/thiagoberaldo06">
              <img src={Linkedin} />
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
}
