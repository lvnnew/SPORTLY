import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const Form = () => {
  const [name, setName] = React.useState({
    value: "",
    isError: false
  });
  
  const [tel, setTel] = React.useState({
    value: "",
    isError: false
  });

  const [email, setEmail] = React.useState({
    value: "",
    isError: false
  });

  const [website, setWebsite] = React.useState({
    value: "",
    isError: false
  });

  const changeName = (e) => {
    setName({
      value: e.target.value, 
      isError: (/^[A-Za-z\s]+$/.test(e.target.value) || e.target.value.length === 0) ? false : true
    });
  }

  const changeTel = (e) => {
    setTel({
      value: e.target.value, 
      isError: (/^[0-9]+$/.test(e.target.value) || e.target.value.length === 0) ? false : true
    })
  }

  const changeEmail = (e) => {
    setEmail({
      value: e.target.value,
      isError: (/^\S+@\S+\.\S+$/.test(e.target.value) || e.target.value.length === 0) ? false : true
    })
  }

  const changeWebsite = (e) => {
    setWebsite({
      value: e.target.value,
      isError: (/^(ftp|http|https):\/\/[^ "]+$/.test(e.target.value) || e.target.value.length === 0) ? false : true 
    })
  }

  return (
    <Grid
      container
      component="form"
      sx={{
        boxShadow: "0px 1px 15px rgba(22, 25, 44, 0.18)",
        borderRadius: "20px",
        padding: { xs: "14px 16px", lg: "30px" },
        mt: { xs: "55px", lg: "75px" },
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
          mb: { xs: "20px", lg: "57px" },
        }}
      >
        Заполните форму, и мы перезвоним
      </Typography>
      <Grid container spacing="40">
        <Grid item xs={12} md={6}>
          <TextField
            id="standard-basic"
            label="Имя"
            variant="standard"
            value={name.value}
            onChange={changeName}
            error={name.isError}
            sx={{
              fontFamily: "Nunito Sans",
              width: "100%",
              padding: "10px 0",
              pt: "0px",
              "::placeholder": {
                fontFamily: "Nunito Sans",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="standard-basic"
            label="Телефон"
            variant="standard"
            value={tel.value}
            onChange={changeTel}
            error={tel.isError}
            sx={{
              fontFamily: "Nunito Sans",
              width: "100%",
              padding: "10px 0",
              pt: "0px",
              "::placeholder": {
                fontFamily: "Nunito Sans",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="standard-basic"
            label="E-mail"
            variant="standard"
            type="email"
            value={email.value}
            onChange={changeEmail}
            error={email.isError}
            sx={{
              fontFamily: "Nunito Sans",
              width: "100%",
              padding: "10px 0",
              pt: "0px",
              "::placeholder": {
                fontFamily: "Nunito Sans",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="standard-basic"
            label="Ваш сайт"
            variant="standard"
            value={website.value}
            onChange={changeWebsite}
            error={website.isError}
            sx={{
              fontFamily: "Nunito Sans",
              width: "100%",
              padding: "10px 0",
              pt: "0px",
              "::placeholder": {
                fontFamily: "Nunito Sans",
              },
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
