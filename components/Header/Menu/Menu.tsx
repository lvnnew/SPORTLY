import { Box, createTheme, ThemeProvider } from "@mui/material";
import { breakpoints } from "@mui/system";
import React, { FC } from "react";
import MenuItem from "./MenuItem";

interface IMenu {
  setIsOpenMenu?: Function;
}

const Menu: FC<IMenu> = ({ setIsOpenMenu }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        alignItems: "center",
        gap: { xs: "32px", md: "40px" },
        mt: { xs: "43px", md: "0" },
        mr: { md: "50px", lg: "170px" },
      }}
    >
      <MenuItem href="about" title="О CRM" setIsOpenMenu={setIsOpenMenu} />
      <MenuItem
        href="test"
        title="Тестовый запуск"
        setIsOpenMenu={setIsOpenMenu}
      />
      <MenuItem
        href="contacts"
        title="Контакты"
        setIsOpenMenu={setIsOpenMenu}
      />
      <MenuItem href="reviews" title="Отзывы" setIsOpenMenu={setIsOpenMenu} />
    </Box>
  );
};

export default Menu;
