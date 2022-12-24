import { Grid } from "@mui/material";
import React from "react";
import AdvantagesItem from "./AdvantagesItem";

const Advantages = () => {
  return (
    <Grid container sx={{mt: {xs: "50px", md: "0"}, gap: "43px", justifyContent: "center"}}>
      <Grid item>
        <AdvantagesItem num="01" title="CRM помогает не допускать ошибки и зарабатывать больше" />
      </Grid>
      <Grid item sx={{
        ml: "30px"
      }}>
        <AdvantagesItem num="02" title="Повышает продуктивность работы администраторов" />
      </Grid>
      <Grid item sx={{
        ml: "80px"
      }}>
        <AdvantagesItem num="03" title="Облегчает управление секцией ее владельцу" />
      </Grid>
    </Grid>
  );
};

export default Advantages;
