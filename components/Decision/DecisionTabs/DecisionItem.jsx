import { Grid, Typography } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from '@mui/icons-material/Check';

const DecisionItem = ({no, ok}) => {
  return (
    <Grid container>
      <Grid
        container
        sx={{
          padding: "12px",
          pl: "17px",
          backgroundColor: "#7DAEFF",
          borderRadius: "20px 20px 0 0",
          alignItems: "start"
        }}
      >
        <Grid item xs={1}>
          <CloseIcon sx={{ color: "#E53939" }} />
        </Grid>
        <Grid item xs={10} sx={{
          ml: "15px"
        }}>
        <Typography
            variant="p"
            sx={{
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "19px",
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
          padding: "12px",
          pl: "17px",
          backgroundColor: "#fff",
          borderRadius: "0 0 20px 20px",
          alignItems: "start"
        }}
      >
        <Grid item xs={1}>
          <CheckIcon sx={{ color: "#439F6E" }} />
        </Grid>
        <Grid item xs={10} sx={{
          ml: "15px"
        }}>
        <Typography
            variant="p"
            sx={{
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "21px",
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
