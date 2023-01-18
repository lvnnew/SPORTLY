import { Box } from "@mui/material";
import Image from "next/image";
import React, { FC } from "react";
import logosData from "./logosData";

const Logos: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: { xs: "center", md: "start" },
        gap: "20px",
        flexWrap: "wrap",
      }}
    >
      {logosData.map((logo, index) => {
        return (
          <Box
            key={index}
            sx={{
              mt: "30px",
              position: "relative",
              maxWidth: "110px",
              width: "100%",
              height: "50px",
            }}
          >
            <Image
              src={logo.img}
              alt="logo"
              fill={true}
              sizes="100%"
              style={{ objectFit: "contain" }}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default Logos;
