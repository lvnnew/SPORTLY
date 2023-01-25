import { Typography } from "@mui/material";
import { Link } from "react-scroll";
import React, { FC } from "react";

interface IFooterMenuItem {
  href: string;
  title: string;
}

const FooterMenuItem: FC<IFooterMenuItem> = ({ href, title }) => {
  return (
    <Link href={href} to={href} spy={true} smooth={true} duration={500}>
      <Typography
        component="span"
        sx={{
          fontFamily: "Gotham Pro",
          display: "inline-block",
          fontSize: { xs: "14px", md: "16px" },
          lineHeight: { xs: "18px", md: "23px" },
          color: "rgba(255, 255, 255, 0.5)",
          transition: "all 0.2s ease",
          textAlign: { xs: "right", md: "center" },

          ":hover": {
            color: "#fff",
          },
        }}
      >
        {title}
      </Typography>
    </Link>
  );
};

export default FooterMenuItem;
