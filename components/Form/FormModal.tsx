import { Alert, Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { FC, Ref } from "react";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";

interface IFormInput {
  value: string;
  isError: boolean;
}

interface IFormModal {
  setIsShowModal: Function;
}

export const FormModal: FC<IFormModal> = ({ setIsShowModal }) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const [tel, setTel] = React.useState<IFormInput>({
    value: "",
    isError: false,
  });
  const [isShowSuccess, setIsShowSuccess] = React.useState<boolean>(false);
  const modalRef = React.useRef<null | HTMLFormElement>(null);

  const onChangeTel = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTel((prev) => ({ ...prev, value: e.target.value }));

    if (/^[0-9]+$/.test(tel.value)) {
      setTel((prev) => ({ ...prev, isError: false }));
    }
  };

  React.useEffect(() => {
    const onClick = (e: any) => {
      if (modalRef.current) {
        if (!modalRef.current.contains(e.target)) {
          setIsShowModal(false);
          document.body.style.overflow = "auto";
        }
      }
    };

    document.addEventListener("click", onClick);

    return () => document.removeEventListener("click", onClick);
  }, [setIsShowModal]);

  const closeModalForm = () => {
    setIsShowModal(false);
    document.body.style.overflow = "auto";
  }

  const onSubmit = async (data: {
    name: string;
    tel: string;
    email: string;
    website: string;
  }) => {
    try {
      data.tel = tel.value;
      if (tel.isError === false) {
        await axios.post("/api/form", {
          name: data.name,
          tel: data.tel,
          email: data.email,
          website: data.website,
        });

        setIsShowSuccess(true);

        setTimeout(() => {
          setIsShowSuccess(false);
        }, 3000); 
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: "999",
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >
      <Alert severity="success" color="info" sx={{
        position: "fixed",
        top: "0",
        right: `${isShowSuccess ? "0" : "-100%"}`,
        transition: "all 0.4s ease",
        borderRadius: "0"
      }}>Успешно!</Alert>
      <Grid
        ref={modalRef}
        id="form"
        onSubmit={handleSubmit(onSubmit)}
        container
        component="form"
        sx={{
          boxShadow: "0px 1px 15px rgba(22, 25, 44, 0.18)",
          borderRadius: "20px",
          padding: "40px",
          mt: { xs: "55px", lg: "75px" },
          minWidth: { xs: "auto", sm: "330px" },
          maxWidth: { xs: "85%", md: "465px" },
          ml: "auto",
          mr: "auto",
          justifyContent: { md: "center" },
          backgroundColor: "#fff",
          position: "relative",
          zIndex: "1000",
          top: "45%",
          transform: "translateY(-50%)",
        }}
      >
        <Box
          sx={{
            width: { xs: "75px", md: "88px" },
            height: { xs: "75px", md: "88px" },
            position: "absolute",
            top: { xs: "-33px", md: "-36px" },
            left: { xs: "-33px", md: "-36px" },
            transform: "rotate(-45deg)"
          }}
        >
          <Image src="/notification.svg" alt="notification" fill={true} />
        </Box>
        <Box
          onClick={closeModalForm}
          sx={{
            position: "absolute",
            right: "20px",
            top: "5px",
            fontSize: "35px",
            transform: "rotate(-45deg)",
            color: "#6788FF",
            cursor: "pointer"
          }}
        >+</Box>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Nunito Sans",
            fontSize: "24px",
            fontWeight: 700,
            lineHeight: "28px",
            textAlign: "center",
            mb: "10px",
          }}
        >
          Первые полгода бесплатно
        </Typography>
        <Grid container spacing="10">
          <Grid item xs={12} md={12} sx={{ position: "relative" }}>
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
                fontSize: "16px",
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
                  left: "10px",
                  bottom: "-13px",
                }}
              >
                Возможно написание только букв
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} md={12} sx={{ position: "relative" }}>
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
                  left: "10px",
                  bottom: "-13px",
                }}
              >
                Введите номер полностью
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} md={12} position="relative">
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
                  left: "10px",
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
            md={12}
            sx={{
              position: "relative",
            }}
          >
            <TextField
              type="url"
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
            {errors.website && (
              <Typography
                component="span"
                sx={{
                  display: "inline-block",
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "20px",
                  color: "#E53939",
                  position: "absolute",
                  left: "10px",
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
            md={12}
            sx={{
              pt: "15px !important",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Nunito Sans",
                display: "inline-block",
                fontSize: { xs: "10px", md: "14px" },
                fontWeight: 400,
                lineHeight: { xs: "12px", md: "17px" },
                textAlign: { xs: "center", md: "left" },

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
            sx={{
              pt: { xs: "12px !important", md: "14px !important" },
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
              }}
              type="submit"
              variant="contained"
              disableElevation
              sx={{
                fontFamily: "Nunito Sans",
                width: "100%",
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
              Записаться
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
