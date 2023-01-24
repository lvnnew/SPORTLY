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
        mt: { xs: mt ? mt : "48px", md: "0" },
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
        <Box sx={{
          display: {xs: "flex", lg: "none"}
        }}>
          <Image src="/tel-white.svg" alt="tel" width="24" height="24" />
        </Box>
        <Box sx={{
          display: {xs: "none", lg: "flex"}
        }}>
          <Image src="/tel-black.svg" alt="tel" width="24" height="24" />
        </Box>
        <Link href="tel:79877655432">
          <Typography
            component="span"
            sx={{
              fontFamily: {xs: "Nunito Sans", lg: "Gotham Pro"},
              display: "inline-block",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "19px",
              color: { xs: "#fff", lg: "#0D052B" },
            }}
          >
            +7 987 765 54 32
          </Typography>
        </Link>
      </Box>
      <Typography
        component="span"
        sx={{
          fontFamily: {xs: "Gotham Pro", lg: "Nunito Sans"},
          display: "inline-block",
          fontWeight: { xs: 400, lg: 600 },
          fontSize: {xs: "12px", lg: "14px"},
          lineHeight: {xs: "16px", lg: "20px"},
          color: { xs: "#fff", lg: "#0D052B" },
        }}
      >
        Заказать обратный звонок
      </Typography>
    </Box>
  );
};

export default Tel;
