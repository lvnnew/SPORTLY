import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Tel = ({ left = false, mt, right=false }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: left ? "start" : "center",
        mt: { xs: mt ? mt : "43px", md: "0" },
        gap: "3px",
        alignItems: {xs: "center", md: right ? "end" : "center"}
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: left ? "start" : "center",
          gap: "12px",
        }}
      >
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
