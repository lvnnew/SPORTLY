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
          fontSize: {xs: "18px", md: "16px"},
          fontWeight: 700,
          lineHeight: {xs: "22px", md: "19px"},
          color: { xs: "#fff", md: "#0D052B99" },
          transition: "all 0.2s ease",
          padding: {xs: 0, md: "10px"},
          backgroundColor: "transparent",
          borderRadius: "8px",
          "&:hover": {
            color: "#6788FF",
            backgroundColor: "#F3F6FF"
          },
        }}
      >
        {title}
      </Typography>
    </Link>
  );
};

export default MenuItem;
