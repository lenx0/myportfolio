import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography, IconButton, Drawer, Box } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos, ZoomIn } from "@mui/icons-material";

const CustomCard = ({ title, images, description }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [zoom, setZoom] = useState(1);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleImageClick = () => {
    setDrawerOpen(true);
  };

  const handleZoomIn = () => {
    setZoom(zoom + 0.5);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
    setZoom(1);
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
        <IconButton onClick={handlePrevImage} disabled={images.length <= 1}>
          <ArrowBackIos />
        </IconButton>
        <IconButton onClick={handleNextImage} disabled={images.length <= 1}>
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
          <img
            src={images[currentImageIndex]}
            alt={title}
            style={{ width: `${zoom * 100}%`, height: `${zoom * 100}%`, objectFit: "contain" }}
          />
          <IconButton onClick={handleZoomIn}>
            <ZoomIn />
          </IconButton>
        </Box>
      </Drawer>
    </Card>
  );
};

export default CustomCard;
