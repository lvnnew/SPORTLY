import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Title from "../Title";
import TestItem from "./TestItem";
import TestData from "./TestData";
import Form from "../Form/Form";

const Test = () => {
  return (
    <Box
      variant="section"
      sx={{
        padding: "60px 0",
        borderRadius: "20px 20px 0 0",
        marginTop: "-20px",
        backgroundColor: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "24px", lg: "48px" },
            fontWeight: 700,
            lineHeight: { xs: "29px", lg: "58px" },
            textAlign: {xs: "left", md: "center"}
          }}
        >
          Тестовый запуск CRM
        </Typography>
        <Typography
          variant="h4"
          sx={{
            mt: {xs: "6px", lg: "12px"},
            fontSize: {xs: "16px", lg: "24px"},
            fontWeight: 700,
            lineHeight: {xs: "19px", lg: "24px"},
            textAlign: {xs: "left", md: "center"}
          }}
        >
          включает в себя
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "67px",
            position: "relative",
            mt: {xs: "34px"},

            "::after": {
              content: '""',
              display: "block",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              height: "100%",
              width: "2px",
              backgroundColor: "#205EDC",
              zIndex: 1,
            },
          }}
        >
          {
            TestData.map((item, index) => {
              return(
                <TestItem key={index} num={item.num} title={item.title} />
              )
            })
          }
        </Box>
        <Form />
      </Container>
    </Box>
  );
};

export default Test;
