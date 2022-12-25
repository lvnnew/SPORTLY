import { Grid, Typography } from "@mui/material";
import React from "react";

const Title = ({ title, subTitle }) => {
  return (
    <Grid container sx={{textAlign: "center"}}>
      <Grid item xs={12}>
        <Typography variant="h3" sx={{
          fontSize: {xs: "26px", lg: "56px"},
          fontWeight: 700,
          lineHeight: {xs: "31px", lg: "62px"},
        }}>{title}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" sx={{
          fontSize: {xs: "18px", lg: "24px"},
          fontWeight: 700, 
          lineHeight: {xs: "22px", lg: "29px"}
        }}>{subTitle}</Typography>
      </Grid>
    </Grid>
  );
};

export default Title;
