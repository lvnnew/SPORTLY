import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { FC } from "react";

interface IAboutItem {
  img: string;
  title: string;
}

const AboutItem: FC<IAboutItem> = ({ img, title }) => {
  return (
    <Grid
      container
      sx={{
        height: { xs: "216px", lg: "285px" },
        boxShadow: "0px 1px 12px rgba(22, 25, 44, 0.18)",
        borderRadius: "10px",
        maxWidth: {
          lg: "234px",
        },
        justifyContent: "center",
      }}
    >
      <Grid
        item
        xs={12}
        sx={{
          display: "grid",
          justifyContent: "center",
          alignItems: "start",
        }}
      >
        <Box
          sx={{
            width: { xs: "81px", lg: "120px" },
            height: { xs: "81px", lg: "120px" },
            position: "relative",
            maxHeight: { lg: "180px" },
            mt: { xs: "34px", lg: "38px" },
          }}
        >
          <Image src={img} alt={title} fill={true} loading="lazy" />
        </Box>
      </Grid>
      <Typography
        className="about-item"
        component="span"
        sx={{
          fontFamily: {xs: "Gotham Pro", lg: "Nunito Sans"},
          display: "inline-block",
          textAlign: "center",
          fontSize: { xs: "15px", lg: "22px" },
          fontWeight: 700,
          lineHeight: { xs: "22px", lg: "26px" },
          mb: "100%",
          mt: { xs: "26px", lg: "45px" },
          ml: { xs: "10px", lg: "auto" },
          mr: { xs: "10px", lg: "auto" },
          maxWidth: {lg: "206px"}
        }}
      >
        {title}
      </Typography>
    </Grid>
  );
};

export default AboutItem;
