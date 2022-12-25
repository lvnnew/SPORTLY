import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Advantages from "./Advantages/Advantages";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <Box
      sx={{
        pt: { xs: "30px", md: "100px", lg: "150px" },
        pb: { xs: "53px", md: "140px", lg: "192px" },
        backgroundImage: {xs: "url(/banner-bg.svg)", lg: "url(/banner-bg-big.svg)", xl: "none"},
        backgroundRepeat: "no-repeat",
        backgroundPosition: {xs: "0 -50px", lg: "top right"},
        backgroundSize: {xs: "100%", lg: "contain"},
        minHeight: {xs: "auto", lg: "calc(100vh - 58px)"}
      }}
    >
      <Container maxWidth="lg">
        <Grid container sx={{alignItems: "center"}}>
          <Grid
            item
            xs={12}
            sm={8}
            md={6}
            sx={{
              margin: "0 auto",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "26px", md: "35px", lg: "60px" },
                fontWeight: 700,
                lineHeight: { xs: "31px", lg: "66px" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              CRM для детских спортивных секций и образовательных центов
            </Typography>
            <Button
              variant="contained"
              disableElevation
              sx={{
                mt: { xs: "30px", md: "50px" },
                maxWidth: { xs: "100%", sm: "293px" },
                width: { xs: "100%" },
                backgroundColor: "#205EDC",
                fontSize: { xs: "18px", md: "24px" },
                fontWeight: 700,
                lineHeight: { xs: "22px", md: "29px" },
                minHeight: { xs: "48px", md: "69px" },
                padding: { xs: "14px 69px", md: "20px 20px" },
                textTransform: "none",
                ml: {xs: "auto", md: "0"},
                mr: "auto",
                display: "flex",
                borderRadius: "10px"
              }}
            >
              Начать работу
            </Button>
          </Grid>
          <Grid item xs={12} sm={8} md={6} sx={{margin: "0 auto"}} >
            <Advantages />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
