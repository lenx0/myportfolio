import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Drawer,
  Box,
  Link,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const CustomCard = ({ title, access, images, description, technologies }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex + 1 < images.length ? prevIndex + 1 : prevIndex
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex - 1 >= 0 ? prevIndex - 1 : prevIndex
    );
  };

  const handleImageClick = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardMedia
        component="img"
        width="100%"
        height="200"
        image={images[currentImageIndex]}
        alt={title}
        onClick={handleImageClick}
        sx={{ cursor: "pointer", objectFit: "contain", padding:"10px" }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Link href={access}>
          <Typography variant="h5" component="div" sx={{ minHeight: 64 }}>
            {title}
          </Typography>
        </Link>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography
          variant="body2"
          mt={2}
          component="div"
          sx={{ minHeight: 64 }}
        >
          {technologies}
        </Typography>
      </CardContent>
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          p={2}
          width="80vw"
          height="100%"
          sx={{ maxWidth: 600 }}
        >
          <Card
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={images[currentImageIndex]}
              alt={title}
              sx={{ objectFit: "cover" }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h5" component="div" sx={{ minHeight: 64 }}>
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </CardContent>
          </Card>
          <Box
            display="flex"
            justifyContent="space-between"
            width="100%"
            mt={2}
          >
            <IconButton
              onClick={handlePrevImage}
              disabled={currentImageIndex === 0}
            >
              <ArrowBackIos />
            </IconButton>
            <IconButton
              onClick={handleNextImage}
              disabled={currentImageIndex === images.length - 1}
            >
              <ArrowForwardIos />
            </IconButton>
          </Box>
        </Box>
      </Drawer>
    </Card>
  );
};

export default CustomCard;
