import { Box } from "@mui/material";
import React from "react";
import FooterMenuItem from "./FooterMenuItem";

const FooterMenu = () => {
  return (
    <Box
      container
      spacing="13"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: { xs: "end", md: "center" },
        alignItems: { xs: "end", md: "center" },
        gap: { xs: "13px", md: "32px" },
      }}
    >
      <FooterMenuItem href="#about" title="О CRM" />
      <FooterMenuItem href="#test" title="Тестовый запуск" />
      <FooterMenuItem href="#contacts" title="Контакты" />
      <FooterMenuItem href="#reviews" title="Отзывы" />
    </Box>
  );
};

export default FooterMenu;
