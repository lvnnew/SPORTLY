import { Alert, Button, Grid, TextField, Typography } from "@mui/material";
import Link from "next/link";
import React, { FC } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";

interface IFormInput {
  value: string;
  isError: boolean;
}

const Form: FC = () => {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm();

  const [tel, setTel] = React.useState<IFormInput>({
    value: "",
    isError: false,
  });
  const [website, setWebsite] = React.useState<IFormInput>({
    value: "",
    isError: false,
  });
  const [isShowSuccess, setIsShowSuccess] = React.useState<boolean>(false);

  const onChangeTel = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTel((prev) => ({ ...prev, value: e.target.value }));

    if (/^[0-9]+$/.test(tel.value)) {
      setTel((prev) => ({ ...prev, isError: false }));
    }
  };

  const onChangeWebsite = (e: React.ChangeEvent<HTMLInputElement>) => {
    const mask = "http://";

    setWebsite((prev) => ({
      ...prev,
      value: mask + e.target.value.slice(mask.length),
    }));
  };

  const deleteMaskWebsite = () => {
    if (website.value === "http://") {
      setWebsite({
        value: "",
        isError: false,
      });
    }
  };

  const onSubmit = async (data: {
    name: string;
    tel: string;
    email: string;
    website: string;
  }) => {
    try {
      data.tel = tel.value;
      data.website = website.value;
      if (tel.isError === false && website.isError === false) {
        await axios.post("/api/form", {
          name: data.name,
          tel: data.tel,
          email: data.email,
          website: data.website || "Не указан",
        });

        setIsShowSuccess(true);

        reset();

        setTel({value: '', isError: false});

        setTimeout(() => {
          setIsShowSuccess(false);
        }, 3000);
      }
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
      <Alert
        severity="success"
        color="info"
        sx={{
          position: "fixed",
          top: "0",
          right: `${isShowSuccess ? "0" : "-100%"}`,
          transition: "all 0.4s ease",
          borderRadius: "0",
          zIndex: "1000",
        }}
      >
        Успешно!
      </Alert>
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
        <Grid item xs={12} md={6} sx={{ position: "relative" }}>
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
          {errors.name && (
            <Typography
              component="span"
              sx={{
                display: "inline-block",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "20px",
                color: "#E53939",
                position: "absolute",
                left: "40px",
                bottom: "-13px",
              }}
            >
              Возможно написание только букв
            </Typography>
          )}
        </Grid>
        <Grid item xs={12} md={6} sx={{ position: "relative" }}>
          <InputMask
            mask="+9 999 999 99 99"
            maskPlaceholder={null}
            value={tel.value}
            onChange={onChangeTel}
          >
            <TextField
              id="standard-basic"
              label="Телефон"
              variant="standard"
              error={tel.isError ? true : false}
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
          </InputMask>
          {tel.isError && (
            <Typography
              component="span"
              sx={{
                display: "inline-block",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "20px",
                color: "#E53939",
                position: "absolute",
                left: "40px",
                bottom: "-13px",
              }}
            >
              Введите номер полностью
            </Typography>
          )}
        </Grid>
        <Grid item xs={12} md={6} position="relative">
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
          {errors.email && (
            <Typography
              component="span"
              sx={{
                display: "inline-block",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "20px",
                color: "#E53939",
                position: "absolute",
                left: "40px",
                bottom: "-13px",
              }}
            >
              Пример: user@mail.ru
            </Typography>
          )}
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            position: "relative",
          }}
        >
          <TextField
            type="url"
            id="standard-basic"
            label="Ваш сайт"
            variant="standard"
            value={website.value}
            onChange={onChangeWebsite}
            onBlur={deleteMaskWebsite}
            onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
              setWebsite((prev) => ({
                ...prev,
                value: "http://" + e.target.value.slice(7),
              }));
            }}
            error={website.isError ? true : false}
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
          {website.isError && (
            <Typography
              component="span"
              sx={{
                display: "inline-block",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "20px",
                color: "#E53939",
                position: "absolute",
                left: "40px",
                bottom: "-13px",
              }}
            >
              Введите URL
            </Typography>
          )}
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
            onClick={() => {
              if (
                !/^\+[0-9 ]+$/.test(tel.value) ||
                tel.value.length === 0 ||
                tel.value.length < 16
              ) {
                setTel((prev) => ({ ...prev, isError: true }));
              } else {
                setTel((prev) => ({ ...prev, isError: false }));
              }

              if (website.value.length === 0) {
                setWebsite((prev) => ({ ...prev, isErro: false }));
              } else if (
                !/^(ftp|http|https):\/\/[^ "]+\.[a-z а-я]+$/.test(website.value)
              ) {
                setWebsite((prev) => ({ ...prev, isError: true }));
              } else {
                setWebsite((prev) => ({ ...prev, isError: false }));
              }
            }}
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
