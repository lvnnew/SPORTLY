import { Grid, Typography } from "@mui/material";
import React, { FC } from "react";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";

interface IDecisionItem {
  no: string;
  ok: string;
}

const DecisionItem: FC<IDecisionItem> = ({ no, ok }) => {
  return (
    <Grid container>
      <Grid
        container
        sx={{
          padding: { xs: "12px", lg: "20px" },
          pl: { xs: "17px", lg: "25px" },
          backgroundColor: "#7DAEFF",
          borderRadius: "20px 20px 0 0",
          alignItems: "start",
          minHeight: { xs: "auto", lg: "106px" },
        }}
      >
        <Grid item xs={1}>
          <CloseIcon sx={{ color: "#E53939" }} />
        </Grid>
        <Grid
          item
          xs={10}
          sx={{
            ml: "15px",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "16px", lg: "17px" },
              fontWeight: 700,
              lineHeight: { xs: "19px", lg: "22px" },
              color: "#fff",
            }}
          >
            {no}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          padding: { xs: "12px", lg: "20px" },
          pl: { xs: "17px", lg: "25px" },
          backgroundColor: "#fff",
          borderRadius: "0 0 20px 20px",
          alignItems: "start",
          minHeight: "auto",
        }}
      >
        <Grid item xs={1}>
          <CheckIcon sx={{ color: "#439F6E" }} />
        </Grid>
        <Grid
          item
          xs={10}
          sx={{
            ml: "15px",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "16px", lg: "17px" },
              fontWeight: 400,
              lineHeight: { xs: "21px", lg: "25px" },
              color: "#16192C",
            }}
          >
            {ok}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DecisionItem;
