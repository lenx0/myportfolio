import React from "react";
import { Card, CardContent, CardMedia, Typography, Box, List, ListItem, ListItemText } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

const CustomCard = ({ images, title, description, technologies }) => {
  return (
    <Card sx={{ mt: 5, boxShadow: 3 }}>
      <Swiper
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <CardMedia
              component="img"
              height="230"
              image={image}
              alt={`Imagem ${index + 1}`}
              style={{ objectFit: "cover" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <CardContent>
        {title}
        <Box mt={2}>
          {description}
        </Box>
        <Box mt={2}>
          <Typography component="div">
            <List>
              {technologies.map((tech, idx) => (
                <ListItem key={idx}>
                  <ListItemText primary={tech} />
                </ListItem>
              ))}
            </List>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
