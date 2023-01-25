import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import Link from "next/link";
import React, { FC } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

interface IFormInput {
  value: string;
  isError: boolean;
}

const Form: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: {
    name: string;
    tel: string;
    email: string;
    website: string;
  }) => {
    try {
      await axios.post("/api/form", {
        name: data.name,
        tel: data.tel,
        email: data.email,
        website: data.website,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Grid
      id="form"
      onSubmit={handleSubmit(onSubmit)}
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
            {...register("name", {
              required: true,
              pattern: /^[A-Za-z\s, А-Яа-яё]+$/,
            })}
            error={errors.name ? true : false}
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
            {...register("tel", { required: true, pattern: /^[0-9]+$/ })}
            error={errors.tel ? true : false}
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
            {...register("email", {
              required: true,
              pattern: /^\S+@\S+\.\S+$/,
            })}
            error={errors.email ? true : false}
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
            {...register("website", {
              required: true,
              pattern: /^(ftp|http|https):\/\/[^ "]+$/,
            })}
            error={errors.website ? true : false}
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
                color: "#6788FF",
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
            type="submit"
            variant="contained"
            disableElevation
            sx={{
              fontFamily: "Nunito Sans",
              maxWidth: { xs: "100%", sm: "325px" },
              width: { xs: "100%" },
              backgroundColor: "#6788FF",
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
