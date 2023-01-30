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
          title="Реорганизовываем бизнес клиентов с помощью нашей уникальной платформы
          "
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
          title="Собираем бизнес-процессы в одном месте и упрощаем"
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
          title={`Подстраиваемся под каждую компанию, вникаем во "внутреннюю кухню" и раскладываем все по полочкам
          `}
        />
      </Grid>
    </Grid>
  );
};

export default Advantages;
