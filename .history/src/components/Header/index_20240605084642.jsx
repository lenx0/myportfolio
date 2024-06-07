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
          <Typography sx={{ cursor: "pointer", fontWeight: 700 }}>
            Home
          </Typography>
          <Typography sx={{ cursor: "pointer", fontWeight: 700 }}>
            Sobre
          </Typography>
          <Typography sx={{ cursor: "pointer", fontWeight: 700 }}>
            Projetos
          </Typography>
          <Typography sx={{ cursor: "pointer", fontWeight: 700 }}>
            Serviços
          </Typography>
          <Typography sx={{ cursor: "pointer", fontWeight: 700 }}>
            Resumo
          </Typography>
          <Typography sx={{ cursor: "pointer", fontWeight: 700 }}>
            Contato
          </Typography>
        </Box>
      </Box>
    </>
  );
}
