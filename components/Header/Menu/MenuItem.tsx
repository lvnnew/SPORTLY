import { Typography } from "@mui/material";
import { Link } from "react-scroll";
import React, { FC } from "react";

interface IMenuItem {
  href: string;
  title: string;
  setIsOpenMenu?: Function;
}

const MenuItem: FC<IMenuItem> = ({ href, title, setIsOpenMenu }) => {
  return (
    <Link
      href={href}
      activeClass="active"
      to={href}
      spy={true}
      smooth={true}
      duration={500}
      onClick={() => {
        if (setIsOpenMenu) {
          setIsOpenMenu(false);
        }
      }}
    >
      <Typography
        component="span"
        sx={{
          fontFamily: "Gotham Pro, sans-serif",
          display: "inline-block",
          fontSize: "18px",
          fontWeight: 700,
          lineHeight: "22px",
          color: { xs: "#fff", md: "#16192C99" },
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
