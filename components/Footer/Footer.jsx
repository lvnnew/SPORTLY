import { Container, Grid, Menu } from "@mui/material";
import React from "react";
import Tel from "../Header/Menu/Tel";
import Logo from "../Logo";
import FooterMenu from "./FooterMenu/FooterMenu";

const Footer = () => {
  return (
    <>
      <Grid
        component="footer"
        container
        sx={{
          backgroundColor: "#E6F1FF",
          pt: "40px",
          pb: "20px",
          display: {md: "none"}
        }}
      >
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={8}>
              <Logo />
              <Tel left={true} mt="48px" />
            </Grid>
            <Grid item xs={4}>
              <FooterMenu />
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <Grid component="footer" container sx={{
        backgroundColor: "#E6F1FF",
        pt: "80px",
        pb: "40px",
        display: {xs: "none", md: "grid"}
      }}>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item md={2}>
              <Logo />
            </Grid>
            <Grid item md={7}>
              <FooterMenu />
            </Grid>
            <Grid item md={3}>
              <Tel right={true} />
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default Footer;
