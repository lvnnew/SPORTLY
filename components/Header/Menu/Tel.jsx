import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Tel = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: {xs: "43px", lg: "0"},
        gap: "3px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <Image src="/tel.svg" alt="tel" width="19" height="19" />
        <Link href="tel:79877655432">
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 700,
            lineHeight: "19px",
            color: "#16192C",
          }}
        >
          +7 987 765 54 32
        </Typography>
        </Link>
      </Box>
      <Typography
        sx={{
          fontSize: "14px",
          lineHeight: "18px",
          color: "#16192C",
        }}
      >
        Заказать обратный звонок
      </Typography>
    </Box>
  );
};

export default Tel;
