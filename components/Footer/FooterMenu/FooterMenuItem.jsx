import { Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const FooterMenuItem = ({ href, title }) => {
  return (
    <Link href={href}>
      <Typography
        variant="span"
        sx={{
          display: "inline-block",
          fontSize: { xs: "14px", md: "18px" },
          lineHeight: { xs: "18px", md: "25px" },
          color: "#16192C80",
          transition: "all 0.2s ease",
          textAlign: {xs: "right", md: "center"},

          ":hover": {
            color: "#205EDC"
          }
        }}
      >
        {title}
      </Typography>
    </Link>
  );
};

export default FooterMenuItem;
