import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Box, Grid } from "@mui/material";

const CustomCard = ({ images, access, description, technologies }) => {
  return (
      <Card sx={{ mt: 5, width: "80vw", boxShadow: "0 4px 10px rgba(1, 5, 5, 0.4)" }}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Box sx={{ m: 5, boxShadow: "0 4px 10px rgba(1, 5, 5, 0.4)" }}>
                <CardMedia
                  component="img"
                  image={image}
                  alt={`Imagem ${index + 1}`}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
        <CardContent sx={{ m: 5, boxShadow: "0 4px 10px rgba(1, 5, 5, 0.4)" }}>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {technologies}
          </Typography>
        </CardContent>
      </Card>
  );
};

export default CustomCard;
