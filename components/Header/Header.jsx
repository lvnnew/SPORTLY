import { AppBar, Box, Container } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import styles from "./Header.module.css";
import Logo from "../Logo";
import React from "react";
import Menu from "./Menu/Menu";
import Tel from "./Menu/Tel";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = React.useState(false);

  const burgerHandler = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <>
      <AppBar
        sx={{
          paddingTop: "10px",
          paddingBottom: "10px",
          backgroundColor: "#fff",
          boxShadow: "2px 4px 16px -3px rgba(22, 25, 44, 0.15)",
          minHeight: "58px",
          zIndex: 1000,
          position: "relative",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Logo />

            <Box
              sx={{
                alignItems: "center",

                display: {xs: "none", lg: "flex"}
              }}
            >
              <Menu />
              <Tel />
            </Box>

            {!isOpenMenu ? (
              <MenuIcon
                className={styles.burgerItem}
                sx={{ color: "#205EDC" }}
                fontSize="medium"
                onClick={burgerHandler}
              />
            ) : (
              <CloseOutlinedIcon
                className={styles.burgerItem}
                sx={{ color: "#205EDC" }}
                fontSize="medium"
                onClick={burgerHandler}
              />
            )}
          </Box>
        </Container>
      </AppBar>
      {isOpenMenu && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",

            backgroundColor: "#E6F1FF",
            position: "fixed",
            top: "58px",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
            width: "100%",
            height: "100%",
          }}
        >
          <Menu />
          <Tel />
        </Box>
      )}
    </>
  );
};

export default Header;
