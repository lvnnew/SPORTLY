import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface ITel {
  left?: boolean;
  mt?: string;
  right?: boolean;
}

const Tel: FC<ITel> = ({ left = false, mt, right = false }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: { xs: left ? "start" : "center", lg: "start" },
        mt: { xs: mt ? mt : "43px", md: "0" },
        gap: "3px",
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
            component="span"
            sx={{
              display: "inline-block",
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
        component="span"
        sx={{
          display: "inline-block",
          fontWeight: { xs: 400, lg: 600 },
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
