import { Box, Container, Grid, Menu } from "@mui/material";
import React, { FC } from "react";
import Tel from "../Header/Menu/Tel";
import Logo from "../Logo";
import AnotherLink from "./AnotherLink";
import FooterMenu from "./FooterMenu/FooterMenu";
import Logos from "./Logos/Logos";

const Footer: FC = () => {
  return (
    <>
      <Grid
        component="footer"
        container
        sx={{
          backgroundColor: "#E6F1FF",
          pt: "40px",
          pb: "20px",
          display: { md: "none" },
        }}
      >
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={8} sx={{
              display: "grid",
              justifyContent: "space-between"
            }}>
              <Logo />
              <Tel left={true} mt="auto" />
            </Grid>
            <Grid item xs={4}>
              <FooterMenu />
            </Grid>
          </Grid>
          <Box
            sx={{
              mt: "30px",
              display: "flex",
              alignItems: "center",
              gap: "20px",
              flexWrap: "wrap",
              justifyContent: {xs: "center", md: "start"}
            }}
          >
            <AnotherLink href="/offer.pdf" title="Договор оферты" />
            <AnotherLink href="/pay.docx" title="Проведение оплаты" />
          </Box>
          <Logos />
        </Container>
      </Grid>
      <Grid
        component="footer"
        container
        sx={{
          backgroundColor: "#E6F1FF",
          pt: "80px",
          pb: "40px",
          display: { xs: "none", md: "grid" },
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            sx={{
              alignItems: "center",
              mt: "-20px",
            }}
          >
            <Grid item md={2}>
              <Logo />
            </Grid>
            <Grid item md={8}>
              <FooterMenu />
            </Grid>
            <Grid item md={2}>
              <Tel right={true} />
            </Grid>
          </Grid>
          <Box
            sx={{
              mt: { xs: "10px", lg: "30px" },
              display: "flex",
              alignItems: "center",
              gap: "20px",
              flexWrap: "wrap",
              justifyContent: {xs: "center", md: "start"}
            }}
          >
            <AnotherLink href="/offer.pdf" title="Договор оферты" />
            <AnotherLink href="/pay.docx" title="Проведение оплаты" />
          </Box>
          <Logos />
        </Container>
      </Grid>
    </>
  );
};

export default Footer;
