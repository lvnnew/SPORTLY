import { Typography } from "@mui/material";
import Link from "next/link";
import React, { FC } from "react";

interface IMenuItem {
  href: string;
  title: string;
  onClick: React.MouseEventHandler
}

const MenuItem: FC<IMenuItem> = ({ href, title, onClick }) => {
  return (
    <Link onClick={onClick} href={href}>
      <Typography
        component="span"
        sx={{
          display: "inline-block",
          fontSize: "18px",
          fontWeight: 700,
          lineHeight: "22px",
          color: { xs: "#16192C", md: "#16192C99" },
          transition: "all 0.2s ease",
          "&:hover": {
            color: "#205EDC",
          },
        }}
      >
        {title}
      </Typography>
    </Link>
  );
};

export default MenuItem;
