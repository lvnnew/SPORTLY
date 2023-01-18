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
          display: "inline-block",
          fontSize: { xs: "14px", md: "18px" },
          lineHeight: { xs: "18px", md: "25px" },
          color: "#16192C80",
          transition: "all 0.2s ease",
          textAlign: { xs: "right", md: "center" },

          ":hover": {
            color: "#205EDC",
          },
        }}
      >
        {title}
      </Typography>
    </Link>
  );
};

export default FooterMenuItem;
