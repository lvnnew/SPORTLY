import { Box, Grid, Typography } from "@mui/material";
import React, { FC } from "react";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";

interface IDecisionItem {
  no: string;
  ok?: string;
  list?: string[];
}

const DecisionItem: FC<IDecisionItem> = ({ no, ok, list }) => {
  return (
    <Grid container>
      <Grid
        container
        sx={{
          padding: { xs: "12px", lg: "20px" },
          pl: { xs: "17px", lg: "25px" },
          backgroundColor: "#7DAEFF",
          borderRadius: !ok || !no ? "20px" : "20px 20px 0 0",
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
              fontFamily: "Gotham Pro",
              fontSize: { xs: "16px", lg: "16px" },
              fontWeight: 700,
              lineHeight: { xs: "19px", lg: "19px" },
              color: "#fff",
            }}
          >
            {no}
          </Typography>
        </Grid>
      </Grid>
      {ok && (
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
                fontFamily: "Gotham Pro",
                fontSize: { xs: "14px", lg: "16px" },
                fontWeight: 400,
                lineHeight: { xs: "18px", lg: "23px" },
                color: "#0D052B",
              }}
            >
              {ok}
            </Typography>
            {list && (
              <Box component="ul">
                {list.map((li, index) => {
                  return (
                    <Typography
                      component="li"
                      key={index}
                      sx={{
                        fontFamily: "Gotham Pro",
                        fontSize: { xs: "14px", lg: "16px" },
                        fontWeight: 400,
                        lineHeight: { xs: "18px", lg: "23px" },
                        color: "#0D052B",
                        ml: "17px",
                      }}
                    >
                      {li}
                    </Typography>
                  );
                })}
              </Box>
            )}
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default DecisionItem;
