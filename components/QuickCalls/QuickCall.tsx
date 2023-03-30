import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface IQuickCall {
  background: string;
  img: string;
  href: string;
}

const QuickCall: FC<IQuickCall> = ({ background, img, href }) => {
  return (
    <Box
        className="quick-call-wrapper"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: background,
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        position: "relative"
      }}
    >
      <Link className="quick-call-link" href={href}>
        <Image src={`${img}`} alt="link" width="40" height="40" />
      </Link>
    </Box>
  );
};

export default QuickCall;
