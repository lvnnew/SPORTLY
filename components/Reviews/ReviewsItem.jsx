import { Grid, Rating, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import StarRateIcon from "@mui/icons-material/StarRate";

const ReviewsItem = ({ name, specialization, text, rating }) => {
  return (
    <Grid
      container
      sx={{
        backgroundColor: "#E6F1FF",
        boxShadow: "0px 1px 15px rgba(22, 25, 44, 0.18)",
        borderRadius: "10px",
        padding: { xs: "14px", lg: "20px"},
        minHeight: {lg: "233px"},
      }}
    >
      <Grid item container>
        <Grid
          item
          xs={2}
          sx={{
            position: "relative",
          }}
        >
          <Image
            src="/avatar.svg"
            alt="avatar"
            fill={true}
            style={{
              transform: "translateY(-50%)",
              top: "50%",
            }}
          />
        </Grid>
        <Grid item xs={9} sx={{
          ml: "12px"
        }}>
          <Typography
            variant="span"
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
      <Rating
        name="text-feedback"
        value={rating}
        readOnly
        precision={0.5}
        emptyIcon={<StarRateIcon sx={{ color: "#fff" }} fontSize="inherit" />}
        sx={{
          color: "#F2D11D",
          mt: "12px",
        }}
      />
      <Grid
        item
        xs={12}
        sx={{
          mt: "12px",
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
