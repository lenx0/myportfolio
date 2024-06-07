import { Typography, Box } from "@mui/material";

export default function Header() {
  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "0 30px 0 30px",
        padding: "16px",
      }}
    >
      <Typography
        sx={{
          fontSize: 36,
          color: "#445964",
          fontWeight: 700,
        }}
      >
        Thiago Beraldo
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "16px",
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
  );
}
