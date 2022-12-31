import { Grid } from "@mui/material";
import React, { FC } from "react";
import AdvantagesItem from "./AdvantagesItem";

const Advantages: FC = () => {
  return (
    <Grid
      container
      sx={{
        mt: { xs: "50px", md: "0" },
        gap: { xs: "43px", lg: "84px" },
        justifyContent: "center",
      }}
    >
      <Grid item>
        <AdvantagesItem
          num="01"
          title="CRM помогает не допускать ошибки и зарабатывать больше"
        />
      </Grid>
      <Grid
        item
        sx={{
          ml: { xs: "30px", lg: "150px" },
        }}
      >
        <AdvantagesItem
          num="02"
          title="Повышает продуктивность работы администраторов"
        />
      </Grid>
      <Grid
        item
        sx={{
          ml: { xs: "80px", lg: "325px" },
        }}
      >
        <AdvantagesItem
          num="03"
          title="Облегчает управление секцией ее владельцу"
        />
      </Grid>
    </Grid>
  );
};

export default Advantages;
