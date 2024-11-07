import { Box, Card, CardContent, Grid, Typography } from "@mui/material";


const skillsData = {
  Linguagens: ["JavaScript", "Java", "Python", "SQL"],
  Frameworks: ["React", "Next.js", "Nest.js", "Express"],
  BancoDeDados: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"],
  Estilização: ["CSS", "Material-UI", "Styled-Components", "Tailwind"],
  Profissionalismo: ["Comunicação", "Trabalho em equipe", "Resolução de problemas", "Entrega no prazo"]
};

const HardSkills = () => {

  return (
    <Box sx={{ maxWidth: "90%", margin: "0 auto", mt: 4, mb: 4 }}>
      <Typography variant="h4" align="center" gutterBottom color="#445964" sx={{ fontWeight: "bold", mb: 3 }}>
        Habilidades
      </Typography>
      
      <Grid container spacing={3} justifyContent="center">
        {Object.keys(skillsData).map((category) => (
          <Grid item xs={12} sm={6} md={4} key={category}>
            <Card sx={{ borderRadius: '10px', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)', height: "100%" }}>
              <CardContent>
                <Typography variant="h6" color="#445964" sx={{ fontWeight: "bold", textAlign: "center", mb: 2 }}>
                  {category}
                </Typography>
                <Box component="ul" sx={{ listStyleType: "none", padding: 0, margin: 0 }}>
                  {skillsData[category].map((skill, index) => (
                    <Typography
                      component="li"
                      key={index}
                      sx={{
                        fontSize: "16px",
                        color: "#263238",
                        textAlign: "center",
                        padding: "4px 0",
                        borderBottom: "1px solid #E0E0E0",
                        "&:last-child": { borderBottom: "none" }
                      }}
                    >
                      {skill}
                    </Typography>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HardSkills;
