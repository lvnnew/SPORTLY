import { IndeterminateCheckBoxSharp } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import React from "react";

const DecisionTab = ({ onClick, isActive, title, index }) => {
  return (
    <Grid
      onClick={onClick}
      container
      sx={{
        padding: { xs: "10px", lg: "15px 20px" },
        borderRadius: "20px",
        border: isActive ? "2px solid #16192C" : "2px solid #16192C80",
        maxHeight: { xs: "108px", sm: "119px" },
        cursor: "pointer",
      }}
      index={IndeterminateCheckBoxSharp}
    >
      <Grid
        item
        xs={12}
        sx={{
          textAlign: "center",
        }}
      >
        <Typography
          variant="p"
          sx={{
            display: "inline-block",
            fontSize: { xs: "14px", lg: "18px" },
            fontWeight: 700,
            lineHeight: { xs: "17px", lg: "22px" },
            color: isActive ? "#16192C" : "#16192C80",
          }}
        >
          {title}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default DecisionTab;
