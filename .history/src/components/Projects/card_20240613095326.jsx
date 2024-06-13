import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography, IconButton, Drawer, Box } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Zoom from "react-medium-image-zoom";
import 'react-medium-image-zoom/dist/styles.css';

const CustomCard = ({ title, images, description }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1 < images.length ? prevIndex + 1 : prevIndex));
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 >= 0 ? prevIndex - 1 : prevIndex));
  };

  const handleImageClick = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={images[currentImageIndex]}
        alt={title}
        onClick={handleImageClick}
        sx={{ cursor: "pointer" }}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <Box display="flex" justifyContent="space-between" p={1}>
        <IconButton onClick={handlePrevImage} disabled={currentImageIndex === 0}>
          <ArrowBackIos />
        </IconButton>
        <IconButton onClick={handleNextImage} disabled={currentImageIndex === images.length - 1}>
          <ArrowForwardIos />
        </IconButton>
      </Box>
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          p={2}
          width="80vw"
          height="80vh"
        >
          <Zoom>
            <img
              src={images[currentImageIndex]}
              alt={title}
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
          </Zoom>
        </Box>
      </Drawer>
    </Card>
  );
};

export default CustomCard;
