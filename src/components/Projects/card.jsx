import { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Link,
  Button,
} from "@mui/material";
import ImageDialog from "./imageDialog";
import GradientTypography from "../common/GradientTypography";

const CustomCard = ({ title, access, images, description, technologies }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex + 1 < images.length ? prevIndex + 1 : prevIndex
    );
  };

  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + '...';
    }
    return description;
  };

  const truncatedDescription = truncateDescription(description, 120);

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
        borderRadius: '10px',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
        transition: "transform 0.5s ease",
            '&:hover': {
              transform: "scale(1.04)",
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
              border: "1px solid #5d176b",
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
            <Typography color="text.secondary">{truncatedDescription}</Typography>
            <GradientTypography mt={2} >
              {technologies}
            </GradientTypography>
          </Box>
          <Link href={access} target="_blank" sx={{ textDecoration: "none" }}>
            <Box>
              <Button
                variant="contained"
                
                sx={{ width: "100%", fontWeight: "bold", backgroundColor: "#263138",transition: "transform 0.5s ease, color 0.3s ease",
                  '&:hover': {
                    backgroundColor: "#5d176b",
                    color: "#ffffff",
                    transform: "scale(1.1)",
                  }, }}
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
