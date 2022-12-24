import { Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link href="/">
      <Typography variant="h2" sx={{
        fontSize: "32px",
        fontWeight: 900,
        lineHeight: "38px",
        color: "#205EDC",
        fontFamily: "Nunito Sans"
      }}>CRM.</Typography>
    </Link>
  );
};

export default Logo;