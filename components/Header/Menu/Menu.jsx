import { Box, createTheme, ThemeProvider } from "@mui/material";
import { breakpoints } from "@mui/system";
import React from "react";
import MenuItem from "./MenuItem";

const Menu = ({setIsOpenMenu}) => {

  const menuItemHandler = () => {
    setIsOpenMenu(false);
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        alignItems: "center",
        gap: { xs: "32px", md: "50px" },
        mt: { xs: "43px", md: "0" },
        mr: { md: "50px", lg: "170px" },
      }}
    >
      <MenuItem onClick={menuItemHandler} href="#about" title="О CRM" />
      <MenuItem onClick={menuItemHandler} href="#test" title="Тестовый запуск" />
      <MenuItem onClick={menuItemHandler} href="#contacts" title="Контакты" />
      <MenuItem onClick={menuItemHandler} href="#reviews" title="Отзывы" />
    </Box>
  );
};

export default Menu;
