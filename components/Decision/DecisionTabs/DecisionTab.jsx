import { IndeterminateCheckBoxSharp } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import React from 'react';

const DecisionTab = ({onClick, isActive, title, index}) => {
  return (
    <Grid onClick={onClick} container sx={{
      padding: "10px",
      borderRadius: "20px",
      border: isActive ? "2px solid #16192C" : "2px solid #16192C80",
      maxHeight: "108px",
      cursor: "pointer"
    }} index={IndeterminateCheckBoxSharp}>
      <Grid item xs={12} sx={{
        textAlign: "center"
      }}>
        <Typography variant="p" sx={{
          display: "inline-block",
          fontSize: "14px",
          fontWeight: 700, 
          lineHeight: "17px",
          color: isActive ? "#16192C" : "#16192C80"
        }}>
          {title}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default DecisionTab;