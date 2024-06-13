import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa';
import EclipseIcon from './icons/eclipse.svg'; // Caminho para o seu SVG

const useStyles = styled({
  root: {
    textAlign: 'center',
    padding: '20px',
  },
  section: {
    marginBottom: '40px',
  },
  title: {
    marginBottom: '20px',
  },
  icon: {
    width: '60px',
    height: '60px',
  },
  svgIcon: {
    width: '60px',
    height: '60px',
  }
});

const TechComponent = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        Minhas Techs
      </Typography>

      <Box className={classes.section}>
        <Typography variant="h6">Tecnologias</Typography>
        <Typography variant="h5" fontWeight="bold">
          Já utilizadas
        </Typography>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item>
            <FaNodeJs className={classes.icon} />
          </Grid>
          <Grid item>
            <FaPython className={classes.icon} />
          </Grid>
          <Grid item>
            <img src={EclipseIcon} alt="Eclipse" className={classes.svgIcon} />
          </Grid>
        </Grid>
      </Box>

      <Box className={classes.section}>
        <Typography variant="h6">Tecnologias</Typography>
        <Typography variant="h5" fontWeight="bold">
          Atualmente Desenvolvendo
        </Typography>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item>
            <FaHtml5 className={classes.icon} />
          </Grid>
          <Grid item>
            <FaCss3Alt className={classes.icon} />
          </Grid>
          <Grid item>
            <FaJsSquare className={classes.icon} />
          </Grid>
          <Grid item>
            <FaReact className={classes.icon} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default TechComponent;
