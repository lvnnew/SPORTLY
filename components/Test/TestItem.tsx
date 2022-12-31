import { Box, Typography } from "@mui/material";
import React, { FC } from "react";

interface ITestItem {
  num: number;
  title: string;
}

const TestItem: FC<ITestItem> = ({ num, title }) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: { xs: "30px", lg: "38px" },
        height: { xs: "30px", lg: "38px" },
        backgroundColor: "#205EDC",
        borderRadius: "50%",
        zIndex: 2,

        ":nth-child(odd) h6": {
          left: { xs: "40px", lg: "62px" },
          textAlign: "left",
        },
      }}
    >
      <Typography
        component="span"
        sx={{
          display: "inline-block",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: { xs: "14px", lg: "18px" },
          fontWeight: 400,
          lineHeight: { xs: "18px", lg: "25px" },
          color: "#fff",
        }}
      >
        {num}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontFamily: "Nunito Sans",
          position: "absolute",
          right: { xs: "40px", lg: "62px" },
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: { xs: "16px", lg: "20px" },
          fontWeight: 400,
          lineHeight: { xs: "21px", lg: "24px" },
          minWidth: { xs: "150px", lg: "345px" },
          textAlign: "right",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default TestItem;
