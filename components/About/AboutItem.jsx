import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const AboutItem = ({ img, title }) => {
  return (
    <Grid
      container
      sx={{
        height: "216px",
        boxShadow: "0px 1px 15px rgba(22, 25, 44, 0.18)",
        borderRadius: "10px"
      }}
    >
      <Grid
        item
        xs={12}

        sx={{
          display: "grid",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Image src={img} alt={title} width="81" height="81" />
      </Grid>
      <Grid item xs={12} sx={{
        display: "grid", 
        justifyContent: "center", 
        alignItems: "center",
        marginBottom: "auto"
      }}>
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
