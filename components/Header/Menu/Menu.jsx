import { Box, createTheme, ThemeProvider } from "@mui/material";
import { breakpoints } from "@mui/system";
import React from "react";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
      <Box
        sx={{
          display: "flex",
          flexDirection: {xs: "column", lg: "row"},
          justifyContent: "center",
          alignItems: "center",
          gap: {xs: "32px", lg: "50px"},
          mt: {xs: "43px", lg: "0"},
          mr: {lg: "170px"}
        }}
      >
        <MenuItem href="#about" title="О CRM" />
        <MenuItem href="#test" title="Тестовый запуск" />
        <MenuItem href="#contacts" title="Контакты" />
        <MenuItem href="#reviews" title="Отзывы" />
      </Box>
  );
};

export default Menu;
