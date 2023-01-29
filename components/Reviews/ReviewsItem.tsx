import { Box, Grid, Rating, Typography } from "@mui/material";
import Image from "next/image";
import React, { FC } from "react";
import StarRateIcon from "@mui/icons-material/StarRate";

interface IReviewsItem {
  name: string;
  specialization: string;
  text: string;
  rating: number;
}

const ReviewsItem: FC<IReviewsItem> = ({
  name,
  specialization,
  text,
  rating,
}) => {
  return (
    <Grid
      container
      sx={{
        backgroundColor: "#FEFBFF",
        boxShadow: "0px 1px 15px rgba(22, 25, 44, 0.18)",
        borderRadius: "10px",
        padding: { xs: "14px", lg: "20px" },
        maxHeight: { lg: "250px" },
      }}
    >
      <Grid
        item
        container
        sx={{
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <Grid
          item
          xs={2}
          sm={1}
          lg={3}
          sx={{
            position: "relative",
            height: "100%",
            minHeight: { xs: "61px", lg: "73px" },
          }}
        >
          <Image src="/avatar.svg" alt="avatar" fill={true} />
        </Grid>
        <Grid
          item
          xs={9}
          sm={10}
          lg={8}
          sx={{
            ml: "12px",
          }}
        >
          <Typography
            component="span"
            sx={{
              fontFamily: "Gotham Pro",
              display: "inline-block",
              fontSize: { xs: "20px", md: "22px" },
              fontWeight: 400,
              lineHeight: { xs: "24px", md: "26px" },
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Gotham Pro",
              fontSize: { xs: "14px", md: "16px" },
              fontWeight: 400,
              lineHeight: { xs: "17px", md: "23px" },
              color: "rgba(22, 25, 44, 0.5)",
              mt: "3px",
            }}
          >
            {specialization}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          mt: { xs: "0" },
          mb: {
            lg: "100%",
          },
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Gotham Pro",
            fontSize: { xs: "14px", md: "16px" },
            lineHeight: { xs: "18px", md: "23px" },
          }}
        >
          {text}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ReviewsItem;
