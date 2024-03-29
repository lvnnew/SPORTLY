import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import About from "../components/About/About";
import Decision from "../components/Decision/Decision";
import Test from "../components/Test/Test";
import Reviews from "../components/Reviews/Reviews";
import Footer from "../components/Footer/Footer";
import { FormModal } from "../components/Form/FormModal";
import { Alert } from "@mui/material";
import QuickCalls from "../components/QuickCalls/QuickCalls";

export default function Home() {
  const [isShowModal, setIsShowModal] = React.useState<boolean>(false);
  const [isShowSuccess, setIsShowSuccess] = React.useState<boolean>(false);

  React.useEffect(() => {
    setTimeout(() => {
      document.body.style.overflow = "hidden";
      setIsShowModal(true);
    }, 6000);
  }, []);

  return (
    <>
      <Head>
        <title>SPORTLY</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Banner />
      <About />
      <Decision />
      <Test />
      <Reviews />
      <Footer />
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
      {isShowModal && (
        <FormModal
          setIsShowModal={setIsShowModal}
          setIsShowSuccess={setIsShowSuccess}
        />
      )}
      <QuickCalls />
    </>
  );
}
