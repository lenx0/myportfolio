import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import Square from "./Square";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "@emotion/react";

const About = () => {
  const [isPortuguese, setIsPortuguese] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  
  // Referências e estado para controlar a visibilidade das seções
  const sectionsRefs = useRef([]);
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => new Set([...prev, entry.target]));
        } else {
          setVisibleSections((prev) => {
            const newSet = new Set(prev);
            newSet.delete(entry.target);
            return newSet;
          });
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sectionsRefs.current.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRefs.current.includes(el)) {
      sectionsRefs.current.push(el);
    }
  };

  const handleClick = () => {
    setIsPortuguese(!isPortuguese);
  };

  return (
    <Stack id="about-section" alignItems="center" spacing={5} mt={5}>
      <Box
        ref={addToRefs}
        backgroundColor="blue"
        sx={{
          opacity: visibleSections.has(sectionsRefs.current[0]) ? 1 : 0,
          transform: visibleSections.has(sectionsRefs.current[0]) ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        <Square>
          <img src="/assets/images/profile.jpg" alt="Hexagon content" />
        </Square>
      </Box>
      <Stack ref={addToRefs}>
        <Typography
          fontSize={isMobile ? 25 : 48}
          fontWeight={700}
          color="#445964"
          sx={{
            opacity: visibleSections.has(sectionsRefs.current[1]) ? 1 : 0,
            transform: visibleSections.has(sectionsRefs.current[1]) ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          Thiago de Freitas Beraldo
        </Typography>
      </Stack>
      <Stack ref={addToRefs} maxWidth="90%">
        <Typography
          variant="h6"
          color="#445964"
          textAlign="justify"
          sx={{
            letterSpacing: '0.05em',
            wordSpacing: '0.1em',
            lineHeight: 1.6,
            opacity: visibleSections.has(sectionsRefs.current[2]) ? 1 : 0,
            transform: visibleSections.has(sectionsRefs.current[2]) ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          {isPortuguese ? (
            <p>
              Olá, atuo na área de TI há pelo menos 10 anos, comecei a desenvolver software há 4 anos, trabalhando com HTML, CSS, JavaScript, React, Next.js, Node, MongoDB, PostgreSQL, e Material-UI.
              <br />
              <br />
              Atualmente estou buscando novas oportunidades no mercado de desenvolvimento de software. Posso atuar em projetos web ou mobile (front e back) ou mobile.
              Possuo também habilidades para administrar infraestrutura de desenvolvimento, como utilização de containers e servidores como AWS, Vercel, Heroku, Render e Railway.
              <br />
              <br />
              Se você quer saber um pouco mais sobre minhas habilidades, projetos, ou experiências, fique à vontade para entrar em contato.
            </p>
          ) : (
            <p>
              Hello, I've been working in the IT field for at least 10 years, and I started developing software 4 years ago, working with HTML, CSS, JavaScript, React, Next.js, Node, MongoDB, PostgreSQL, and Material-UI.
              <br />
              <br />
              Currently, I am looking for new opportunities in the software development market. I can work on both web and mobile projects. I also have skills in managing development infrastructure, such as using containers and servers like AWS, Vercel, Heroku, Render, and Railway.
              <br />
              <br />
              If you've learned a bit about my skills, projects, and experiences, feel free to contact me if interested.
            </p>
          )}
        </Typography>
      </Stack>
      <Button
        onClick={handleClick}
        variant="contained"
        color="primary"
        ref={addToRefs}
        sx={{
          width: !isMobile ? "20%" : "80%",
          height: !isMobile ? "50px" : "45px",
          backgroundColor: "#263138",
          borderRadius: 2,
          fontWeight: "bold",
          transition: "transform 0.5s ease, color 0.3s ease",
          opacity: visibleSections.has(sectionsRefs.current[3]) ? 1 : 0,
          transform: visibleSections.has(sectionsRefs.current[3]) ? "translateY(0)" : "translateY(20px)",
          '&:hover': {
            backgroundColor: "#5d176b",
            color: "#ffffff",
            transform: "scale(1.1)",
          },
        }}
      >
        {isPortuguese ? "English" : "Portuguese"}
      </Button>
    </Stack>
  );
};

export default About;
