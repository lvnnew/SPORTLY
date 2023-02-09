import { Box, Typography } from "@mui/material";
import { FC } from "react";
import SocialsLink from "./SocialsLink";

const Socials: FC = () => {
  return (
    <Box
      id="socials"
      sx={{
        margin: { xs: "30px auto 0 auto", lg: "30px 0 0" },
      }}
    >
      <Typography
        sx={{
          fontSize: "18px",
          color: "#fff",

          textAlign: {xs: "center", md: "left"}
        }}
      >
        Есть вопросы? Напишите нам
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
          margin: { xs: "15px auto 0 auto", lg: "15px 0 0" },
          justifyContent: {xs: "center", md: "flex-start"}
        }}
      >
        <SocialsLink
          href="https://t.me/SportlyApp"
          img="/socials/telegram.svg"
          alt="telegram"
        />
        <SocialsLink href="https://wa.me/905067053512" img="/socials/whatsapp.svg" alt="whatsapp" />
      </Box>
    </Box>
  );
};

export default Socials;
