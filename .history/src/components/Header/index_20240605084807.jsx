import { Typography, Box } from "@mui/material";
import Logo from "/assets/logos/logo.svg";

export default function Header() {
  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px",
        flexDirection: { xs: "column", md: "row" },
        textAlign: { xs: "center", md: "left" },
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        sx={{ mb: { xs: 2, md: 0 } }}
      >
        <Box
          component="img"
          src={Logo}
          sx={{
            width: { xs: "50px", md: "auto" },
            height: { xs: "50px", md: "auto" }
          }}
        />
        <Typography
          sx={{
            fontSize: { xs: 24, md: 36 },
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
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "16px", md: "96px" },
          color: "#445964",
        }}
      >
        {["Home", "Sobre", "Projetos", "Serviços", "Resumo", "Contato"].map((item) => (
          <Typography
            key={item}
            sx={{
              cursor: "pointer",
              fontWeight: 700,
              fontSize: { xs: "14px", md: "inherit" }
            }}
          >
            {item}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}
