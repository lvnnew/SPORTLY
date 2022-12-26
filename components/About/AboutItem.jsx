import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const AboutItem = ({ img, title }) => {
  return (
    <Grid
      container
      sx={{
        height: { xs: "216px", lg: "285px" },
        boxShadow: "0px 1px 15px rgba(22, 25, 44, 0.18)",
        borderRadius: "10px",
        maxWidth: {
          lg: "234px",
        },
      }}
    >
      <Grid
        item
        xs={12}
        sx={{
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{
          width: {xs: "81px", lg: "120px"},
          height: {xs: "81px", lg: "120px"},
          position: "relative"
        }}>
          <Image src={img} alt={title} fill={true} />
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "auto",
        }}
      >
        <Typography
          variant="span"
          sx={{
            display: "inline-block",
            textAlign: "center",
            fontSize: "18px",
            fontWeight: 700,
            lineHeight: "22px",
          }}
        >
          {title}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default AboutItem;
