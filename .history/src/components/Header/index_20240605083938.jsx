import { Typography, Box } from "@mui/material";
import Logo from "/assets/logos/logo.svg";

export default function Header() {
  return (
    <>
      <Box
        component="header"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px",
        }}
      >
        <Box>
        <Box component="img" src={Logo}></Box>
        <Typography
          sx={{
            fontSize: 36,
            color: "#445964",
            fontWeight: 700,
          }}
        >
          Thiago Beraldo
        </Typography>
        </Box>
        
        <Box
          sx={{
            display: "flex",
            gap: "96px",
          }}
        >
          <Typography sx={{ cursor: "pointer" }}>Home</Typography>
          <Typography sx={{ cursor: "pointer" }}>Sobre</Typography>
          <Typography sx={{ cursor: "pointer" }}>Projetos</Typography>
          <Typography sx={{ cursor: "pointer" }}>Serviços</Typography>
          <Typography sx={{ cursor: "pointer" }}>Resumo</Typography>
          <Typography sx={{ cursor: "pointer" }}>Contato</Typography>
        </Box>
      </Box>
    </>
  );
}
