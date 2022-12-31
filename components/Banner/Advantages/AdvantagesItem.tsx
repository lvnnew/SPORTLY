import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { FC } from "react";

interface IAdvantagesItem {
  num: string;
  title: string;
}

const AdvantagesItem: FC<IAdvantagesItem> = ({ num, title }) => {
  return (
    <Grid container>
      <Grid
        item
        xs={3}
        lg={1}
        sx={{
          position: "relative",
        }}
      >
        <Typography
          component="span"
          sx={{
            display: "inline-block",
            fontSize: { xs: "32px", lg: "48px" },
            fontWeight: 700,
            lineHeight: { xs: "38px", lg: "58px" },
            color: "#16192C80",
            position: "absolute",
            right: { xs: "22px", lg: "15px" },
            top: { xs: "-15px", lg: "-25px" },
            zIndex: 2,
          }}
        >
          {num}
        </Typography>
        <Box
          sx={{
            position: "absolute",
            top: "-10px",
            right: { xs: "-15px", lg: "-15px" },
            zIndex: 1,
          }}
        >
          <Image src="/advantages-img.svg" alt="adv" width="53" height="60" />
        </Box>
      </Grid>
      <Grid item xs={9} lg={11}>
        <Typography
          sx={{
            fontFamily: "Nunito Sans",
            fontSize: "18px",
            fontWeight: { xs: 400, lg: 700 },
            lineHeight: { xs: "22px" },
            color: "#16192C",
            position: "relative",
            zIndex: 3,
            maxWidth: { lg: "248px" },
          }}
        >
          {title}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default AdvantagesItem;
