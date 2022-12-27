import { Container, Grid } from "@mui/material";
import React from "react";
import Title from "../Title";
import ReviewsItem from "./ReviewsItem";
import {reviewsData} from "./reviewsData";

const Reviews = () => {
  return (
    <Grid
      id="reviews"
      component="section"
      container
      sx={{
        pb: { xs: "60px", lg: "120px" },
        borderRadius: "0 0 20px 20px",
        backgroundColor: "#fff",
        mb: "-20px",
        position: "relative",
        zIndex: 3,
      }}
    >
      <Container maxWidth="lg">
        <Title
          title="Польза от использования CRM "
          subTitle="которую отметили участники в ходе CustDev исследования"
          left={true}
        />
        <Grid
          container
          spacing="18px"
          sx={{
            pt: { xs: "24px", lg: "40px" },
          }}
        >
          {reviewsData.map((item, index) => {
            return (
              <Grid key={index} item xs={12} md={6} lg={4}>
                <ReviewsItem
                  name={item.name}
                  specialization={item.specialization}
                  rating={item.rating}
                  text={item.text}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Grid>
  );
};

export default Reviews;
