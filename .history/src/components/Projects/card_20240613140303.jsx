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
  Dialog,
  DialogContent,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos, Close } from "@mui/icons-material";

const CustomCard = ({ title, access, images, description, technologies }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);

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
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column", boxShadow: '2px, 2px, 2px 1px rgb(0 0 0 / 20%)' }}>
      <Box sx={{ p: 2 }}>
        <CardMedia
          component="img"
          width="100%"
          height="200"
          image={images[currentImageIndex]}
          alt={title}
          onClick={handleImageClick}
          sx={{ cursor: "pointer", objectFit: "contain" }}
        />
      </Box>
      <CardContent sx={{ flexGrow: 1 }}>
        <Link href={access}>
          <Typography variant="h5" component="div" sx={{ minHeight: 64 }}>
            {title}
          </Typography>
        </Link>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <Dialog
        open={dialogOpen}
        onClose={handleDialogClose}
        maxWidth="md"
        fullWidth
      >
        <DialogContent
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <IconButton
            onClick={handleDialogClose}
            sx={{ position: "absolute", top: 8, right: 8 }}
          >
            <Close />
          </IconButton>
          <CardMedia
            component="img"
            height="400"
            image={images[currentImageIndex]}
            alt={title}
            sx={{ objectFit: "contain", mb: 2 }}
          />
          <Typography variant="h5" component="div" sx={{ minHeight: 64 }}>
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "center", mb: 2 }}
          >
            {description}
          </Typography>
          <Box display="flex" justifyContent="space-between" width="100%">
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
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default CustomCard;
