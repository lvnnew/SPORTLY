import { AppBar, Box, Container } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Logo from "../Logo";
import React, { FC } from "react";
import Menu from "./Menu/Menu";
import Tel from "./Menu/Tel";

const Header: FC = () => {
  const [isOpenMenu, setIsOpenMenu] = React.useState<boolean>(false);

  const burgerHandler = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  React.useEffect(() => {
    if (isOpenMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpenMenu]);

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

                display: { xs: "none", md: "flex" },
              }}
            >
              <Menu />
            </Box>

            {!isOpenMenu ? (
              <MenuIcon
                className="burgerItem"
                sx={{ color: "#6788FF" }}
                fontSize="medium"
                onClick={burgerHandler}
              />
            ) : (
              <CloseOutlinedIcon
                className="burgerItem"
                sx={{ color: "#6788FF" }}
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

            backgroundColor: "#6788FF",
            position: "absolute",
            top: "58px",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 100,
            width: "100%",
            height: "100%",
          }}
        >
          <Menu setIsOpenMenu={setIsOpenMenu} />
        </Box>
      )}
    </>
  );
};

export default Header;
