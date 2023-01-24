import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React, { FC } from "react";
import Advantages from "./Advantages/Advantages";

const Banner: FC = () => {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        pt: { xs: "30px", md: "100px", lg: "150px" },
        pb: { xs: "60px", md: "140px", lg: "192px" },
        backgroundImage: {
          xs: "url(/banner-bg.svg)",
          lg: "url(/banner-bg-big.svg)",
          xl: "none",
        },
        backgroundRepeat: "no-repeat",
        backgroundPosition: { xs: "0 -50px", lg: "top right" },
        backgroundSize: { xs: "100%", lg: "contain" },
        minHeight: { xs: "auto", lg: "calc(100vh - 58px)", xl: "auto" },
        backgroundColor: { xs: "#fff"},
      }}
    >
      <Container maxWidth="lg">
        <Grid container sx={{ alignItems: "center" }}>
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
                fontFamily: "Gotham Pro",
                fontSize: { xs: "24px", md: "35px", lg: "60px" },
                fontWeight: 700,
                lineHeight: { xs: "29px", lg: "66px" },
                textAlign: { xs: "center", md: "left" },
                color: "#fff"
              }}
            >
              CRM для детских спортивных секций и образовательных центов
            </Typography>
            <Link href="#form">
              <Button
                variant="contained"
                disableElevation
                sx={{
                  fontFamily: "Gotham Pro",
                  mt: { xs: "30px", md: "50px" },
                  maxWidth: { xs: "100%", sm: "293px" },
                  width: { xs: "100%" },
                  backgroundColor: {xs: "rgba(255, 255, 255, 0.5)"},
                  fontSize: { xs: "18px", md: "24px" },
                  fontWeight: 700,
                  lineHeight: { xs: "22px", md: "29px" },
                  minHeight: { xs: "48px", md: "69px" },
                  padding: { xs: "14px 69px", md: "20px 20px" },
                  textTransform: "none",
                  ml: { xs: "auto", md: "0" },
                  mr: "auto",
                  display: "flex",
                  borderRadius: "10px",
                  transition: "all 0.2s ease",

                  ":hover": {
                    backgroundColor: "#0B49AD",
                  },
                }}
              >
                Начать работу
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} sm={8} md={6} sx={{ margin: "0 auto" }}>
            <Advantages />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
