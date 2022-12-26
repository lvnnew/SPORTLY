import { Box, Container, Grid } from "@mui/material";
import React from "react";
import Title from "../Title";
import AboutItem from "./AboutItem";

const About = () => {
  return (
    <Box variant="section" id="about" sx={{
      padding: "40px 0"
    }}>
      <Container maxWidth="lg">
        <Title title="CRM" subTitle="идеальна для" />

        <Grid container spacing="16" sx={{
          mt: "24px"
        }}>
          <Grid item xs={6}>
            <AboutItem img="/about-fight.svg" title="Футбол" />
          </Grid>
          <Grid item xs={6}>
            <AboutItem img="/about-fight.svg" title="Футбол" />
          </Grid>
          <Grid item xs={6}>
            <AboutItem img="/about-fight.svg" title="Футбол" />
          </Grid>
          <Grid item xs={6}>
            <AboutItem img="/about-fight.svg" title="Футбол" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
