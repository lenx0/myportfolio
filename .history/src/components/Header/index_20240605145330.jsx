import { Typography, Box } from "@mui/material";
import Logo from "/assets/logos/logo.svg";

export default function Header() {
  const menuItems = [
    "Home",
    "Sobre",
    "Projetos",
    "Serviços",
    "Resumo",
    "Contato",
  ];

  return (
    <>
      <Box
        component="header"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: "20px"
        }}
      >
        <Box display="flex">
          <Box component="img" src={Logo}></Box>
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
      </Box>
    </>
  );
}
