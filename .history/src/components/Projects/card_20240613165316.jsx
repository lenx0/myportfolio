import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Box,
  Link,
  Dialog,
  DialogContent,
  Button,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos, Close } from "@mui/icons-material";
import ImageDialog from "./imageDialog";

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
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "0.30s",
        "&:hover": {
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <CardMedia
          component="img"
          width="100%"
          height="200"
          image={images[currentImageIndex]}
          alt={title}
          onClick={handleImageClick}
          sx={{
            cursor: "pointer",
            objectFit: "contain",
            transition: "0.30s",
            "&:hover": {
              border: "1px solid #263138",
            },
          }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Box width="100%" minHeight="15rem">
            <Typography
              variant="h5"
              component="div"
              sx={{ fontWeight: 700, color: "#445964", minHeight: 64 }}
            >
              {title}
            </Typography>
            <Typography color="text.secondary">{description}</Typography>
            <Typography mt={2} color="text.secondary">
              {technologies}
            </Typography>
          </Box>
          <Link href={access} sx={{ textDecoration: "none" }}>
            <Box>
              <Button
                variant="contained"
                sx={{ width: "100%", backgroundColor: "#263138" }}
              >
                Acessar
              </Button>
            </Box>
          </Link>
        </CardContent>
      </Box>
      <ImageDialog
        dialogOpen={dialogOpen}
        handleDialogClose={handleDialogClose}
        images={images}
        currentImageIndex={currentImageIndex}
        handleNextImage={handleNextImage}
        handlePrevImage={handlePrevImage}
        title={title}
        description={description}
      />
    </Card>
  );
};



export default CustomCard;
