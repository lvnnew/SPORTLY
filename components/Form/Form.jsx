import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const Form = () => {
  return (
    <Grid
      container
      component="form"
      sx={{
        boxShadow: "0px 1px 15px rgba(22, 25, 44, 0.18)",
        borderRadius: "20px",
        padding: { xs: "14px 16px", lg: "30px" },
        mt: { xs: "60px", lg: "75px" },
        maxWidth: "750px",
        ml: "auto",
        mr: "auto",
        justifyContent: { md: "center" },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontFamily: "Nunito Sans",
          fontSize: "20px",
          fontWeight: 700,
          lineHeight: "24px",
          textAlign: { xs: "left", md: "center" },
          mb: { xs: "40px", lg: "57px" },
        }}
      >
        Заполните форму, и мы перезвоним
      </Typography>
      <Grid container spacing="55">
        <Grid item xs={12} md={6}>
          <TextField
            id="standard-basic"
            label="Имя"
            variant="standard"
            sx={{
              fontFamily: "Nunito Sans",
              width: "100%",
              padding: "10px 0",
              pt: "0px",
              "::placeholder": {
                fontFamily: "Nunito Sans"
              }
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="standard-basic"
            label="Телефон"
            variant="standard"
            sx={{
              fontFamily: "Nunito Sans",
              width: "100%",
              padding: "10px 0",
              pt: "0px",
              "::placeholder": {
                fontFamily: "Nunito Sans"
              }
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="standard-basic"
            label="E-mail"
            variant="standard"
            sx={{
              fontFamily: "Nunito Sans",
              width: "100%",
              padding: "10px 0",
              pt: "0px",
              "::placeholder": {
                fontFamily: "Nunito Sans"
              }
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="standard-basic"
            label="Ваш сайт"
            variant="standard"
            sx={{
              fontFamily: "Nunito Sans",
              width: "100%",
              padding: "10px 0",
              pt: "0px",
              "::placeholder": {
                fontFamily: "Nunito Sans"
              }
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            pt: { xs: "38px !important", md: "53px !important" },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Nunito Sans",
              display: "inline-block",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "18px",

              "&>a": {
                color: "#205EDC",
              },
            }}
          >
            Оставляя заявку, вы даете нам разрешение связаться с вами
            и соглашаетесь с 
            <Link href="/politics">Политикой конфиденциальности</Link>
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            pt: { xs: "12px !important", md: "53px !important" },
          }}
        >
          <Button
            variant="contained"
            disableElevation
            sx={{
              fontFamily: "Nunito Sans",
              maxWidth: { xs: "100%", sm: "325px" },
              width: { xs: "100%" },
              backgroundColor: "#205EDC",
              fontSize: { xs: "16px", md: "18px" },
              fontWeight: 400,
              lineHeight: { xs: "21px", md: "25px" },
              minHeight: { xs: "45px", md: "51px" },
              padding: { xs: "12px 30px", md: "13px 30px" },
              textTransform: "none",
              display: "flex",
              borderRadius: "10px",
            }}
          >
            Записаться бесплатно
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Form;
