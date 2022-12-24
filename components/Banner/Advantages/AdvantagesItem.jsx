import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const AdvantagesItem = ({num, title}) => {
  return (
    <Grid container>
      <Grid
        item
        xs={3}
        sx={{
          position: "relative",
        }}
      >
        <Typography sx={{
          fontSize: "32px",
          fontWeight: 700,
          lineHeight: "38px",
          color: "#16192C80",
          position: "absolute",
          right: "22px",
          top: "-14px",
          zIndex: 2,
        }}>{num}</Typography>
        <Box
          sx={{
            position: "absolute",
            top: "38%",
            right: "-10px",
            transform: "translateY(-50%)",
            zIndex: 1
          }}
        >
          <Image src="/advantages-img.svg" alt="adv" width="53" height="60" />
        </Box>
      </Grid>
      <Grid item xs={9}>
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: { xs: "400" },
            lineHeight: { xs: "22px" },
            color: "#16192C",
            position: "relative",
            zIndex: 3
          }}
        >
          {title}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default AdvantagesItem;
