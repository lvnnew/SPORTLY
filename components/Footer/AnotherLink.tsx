import { Box } from "@mui/material";
import Link from "next/link";
import React, { FC } from "react";

interface IAnotherLink {
  href: string;
  title: string;
}

const AnotherLink: FC<IAnotherLink> = ({ href, title }) => {
  return (
    <Box
      sx={{
        display: "inline-block",
        fontSize: { xs: "14px", md: "18px" },
        lineHeight: { xs: "18px", md: "25px" },
        color: "#16192C80",
        transition: "all 0.2s ease",

        ":hover": {
          color: "#205EDC",
        },
      }}
    >
      <Link href={href}>{title}</Link>
    </Box>
  );
};

export default AnotherLink;
