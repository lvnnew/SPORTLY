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
        border: isActive ? "2px solid #fff" : "2px solid rgba(255, 255, 255, 0.5)",
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
            fontFamily: "Gotham Pro",
            display: "inline-block",
            fontSize: { xs: "12px", md: "16px" },
            fontWeight: 700,
            lineHeight: { xs: "15px", lg: "19px" },
            color: isActive ? "#fff" : "rgba(255, 255, 255, 0.5)",
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
