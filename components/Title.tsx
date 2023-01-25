import { Grid, Typography } from "@mui/material";
import React from "react";

interface ITitle {
  title: string;
  subTitle?: string;
  left?: boolean;
  leftDesk?: boolean;
}

const Title = ({ title, subTitle, left, leftDesk }: ITitle) => {
  return (
    <Grid container sx={{ textAlign: "center" }}>
      <Grid item xs={12}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Gotham Pro",
            fontSize: { xs: "26px", lg: "56px" },
            fontWeight: 700,
            lineHeight: { xs: "31px", lg: "62px" },
            textAlign: {
              xs: left ? "left" : "center",
              md: "center",
              lg: leftDesk ? "left" : "center",
            },
            color: "#0D052B"
          }}
        >
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Gotham Pro",
            fontSize: { xs: "18px", lg: "24px" },
            fontWeight: 700,
            lineHeight: { xs: "22px", lg: "29px" },
            textAlign: {
              xs: left ? "left" : "center",
              md: "center",
              lg: leftDesk ? "left" : "center",
            },
            mt: { xs: "6px", lg: "12px" },
            color: "#0D052B"
          }}
        >
          {subTitle}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Title;
