import { Typography } from "@mui/material";
import Link from "next/link";
import React, { FC } from "react";

interface ILogo {
  white?: boolean;
}

const Logo: FC<ILogo> = ({ white }) => {
  return (
    <Link href="/">
      <Typography
        variant="h2"
        sx={{
          fontSize: "32px",
          fontWeight: 900,
          lineHeight: "38px",
          color: white ? "#fff" : "#6788FF",
          fontFamily: "Nunito Sans",
          cursor: "default",
        }}
      >
        SPORTLY
      </Typography>
    </Link>
  );
};

export default Logo;
