import { Box } from "@mui/material";
import React, { FC } from "react";
import QuickCall from "./QuickCall";

const QuickCalls: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        position: "fixed",
        bottom: { xs: "10px", lg: "20px" },
        right: { xs: "10px", lg: "20px" },
        zIndex: "900",
      }}
    >
      <QuickCall
        img="/socials/telegram-no-bg.svg"
        href="https://t.me/SportlyApp"
        background="#2ca5e0"
      />
      <QuickCall
        img="/socials/whatsapp-no-bg.svg"
        href="https://wa.me/905067053512"
        background="#25D366"
      />
    </Box>
  );
};

export default QuickCalls;
