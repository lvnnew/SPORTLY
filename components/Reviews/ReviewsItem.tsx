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
        backgroundColor: "#E6F1FF",
        boxShadow: "0px 1px 15px rgba(22, 25, 44, 0.18)",
        borderRadius: "10px",
        padding: { xs: "14px", lg: "20px" },
        maxHeight: { lg: "233px" },
      }}
    >
      <Grid
        item
        container
        sx={{
          justifyContent: "start",
          alignItems: "start",
        }}
      >
        <Grid
          item
          xs={1}
          lg={2}
          sx={{
            position: "relative",
            height: "100%",
            maxHeight: "42px",
          }}
        >
          <Image src="/avatar.svg" alt="avatar" fill={true} />
        </Grid>
        <Grid
          item
          xs={10}
          lg={9}
          sx={{
            ml: "12px",
          }}
        >
          <Typography
            component="span"
            sx={{
              display: "inline-block",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "19px",
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Nunito Sans",
              fontSize: "14px",
              fontWeight: 700,
              lineHeight: "17px",
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
          margin: { xs: "12px 0", lg: "15px 0" },
        }}
      >
        <Rating
          name="text-feedback"
          value={rating}
          readOnly
          precision={0.5}
          emptyIcon={<StarRateIcon sx={{ color: "#fff" }} fontSize="inherit" />}
          sx={{
            color: "#F2D11D",
            height: "max-content",
          }}
        />
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
            fontFamily: "Nunito Sans",
            fontSize: "16px",
            lineHeight: "21px",
          }}
        >
          {text}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ReviewsItem;
