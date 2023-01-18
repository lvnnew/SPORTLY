import { IndeterminateCheckBoxSharp } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import React, { FC } from "react";

interface IDecisionTab {
  onClick: React.MouseEventHandler;
  isActive: boolean;
  title: string;
  index: number;
}

const DecisionTab: FC<IDecisionTab> = ({ onClick, isActive, title, index }) => {
  return (
    <Grid
      onClick={onClick}
      container
      sx={{
        padding: { xs: "10px", lg: "15px 20px" },
        borderRadius: "20px",
        border: isActive ? "2px solid #16192C" : "2px solid #16192C80",
        maxHeight: { sm: "119px" },
        minHeight: { xs: "108px", sm: "119px" },
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <Grid
        item
        xs={12}
        sx={{
          textAlign: "center",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            display: "inline-block",
            fontSize: { xs: "14px", md: "18px" },
            fontWeight: 700,
            lineHeight: { xs: "17px", lg: "22px" },
            color: isActive ? "#16192C" : "#16192C80",
            wordBreak: "break-all",

            ["@media(min-width: 360px)"]: {
              wordBreak: "normal !important",
            },
          }}
        >
          {title}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default DecisionTab;
