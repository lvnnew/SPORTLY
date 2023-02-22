import { Box, Container, Grid, Menu } from "@mui/material";
import React, { FC } from "react";
import Tel from "../Header/Menu/Tel";
import Logo from "../Logo";
import AnotherLink from "./AnotherLink";
import FooterMenu from "./FooterMenu/FooterMenu";
import Logos from "./Logos/Logos";
import Socials from "./Socials/Socials";

const Footer: FC = () => {
  return (
    <Box id="contacts">
      <Grid
        component="footer"
        container
        sx={{
          backgroundColor: "#6788FF",
          pt: "40px",
          pb: "20px",
          display: { md: "none" },
        }}
      >
        <Container maxWidth="lg">
          <Grid container>
            <Grid
              item
              xs={8}
              sx={{
                display: "grid",
                justifyContent: "space-between",
              }}
            >
              <Logo white />
              <Tel left={true} mt="auto" white />
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
              justifyContent: { xs: "center", md: "start" },
            }}
          >
            <AnotherLink href="/offer.pdf" title="Договор оферты" />
            <AnotherLink href="/pay.docx" title="Проведение оплаты" />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Logos />
            <Socials />
          </Box>
        </Container>
      </Grid>
      <Grid
        component="footer"
        container
        sx={{
          backgroundColor: "#6788FF",
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
              <Logo white />
            </Grid>
            <Grid item md={8}>
              <FooterMenu />
            </Grid>
            <Grid item md={2}>
              <Tel right={true} white />
            </Grid>
          </Grid>
          <Box
            sx={{
              mt: { xs: "10px", lg: "30px" },
              display: "flex",
              alignItems: "center",
              gap: "20px",
              flexWrap: "wrap",
              justifyContent: { xs: "center", md: "start" },
            }}
          >
            <AnotherLink href="/offer.pdf" title="Договор оферты" />
            <AnotherLink href="/pay.docx" title="Проведение оплаты" />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: {md: "flex-start", lg: "center"},
            }}
          >
            <Logos />
            <Socials />
          </Box>
          <div id="socials"></div>
        </Container>
      </Grid>
    </Box>
  );
};

export default Footer;
