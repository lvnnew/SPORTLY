import { Box, Container, Grid, Typography } from "@mui/material";
import React, { FC } from "react";
import { decisionData } from "./decisionData";
import DecisionItem from "./DecisionTabs/DecisionItem";
import DecisionTab from "./DecisionTabs/DecisionTab";

const Decision: FC = () => {
  const [activeEl, setActiveEl] = React.useState<number>(0);

  const tabHandler = (index: number) => {
    setActiveEl(index);
  };

  const filteredItems = decisionData.filter((item) => {
    return item.index === activeEl;
  });

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#fff",
      }}
    >
      <Box
        sx={{
          pt: { xs: "24px", lg: "50px" },
          pb: { xs: "60px", lg: "78px" },
          backgroundColor: "#6788FF",
          borderRadius: { xs: "20px 20px 0 0", lg: "40px 40px 0 0" },
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Gotham Pro",
              fontSize: { xs: "24px", lg: "48px" },
              fontWeight: 700,
              lineHeight: { xs: "29px", lg: "58px" },
              color: "#fff"
            }}
          >
            Какие проблемы решает наша CRM?
          </Typography>

          <Grid
            container
            spacing="20"
            sx={{
              mt: { xs: "3px", lg: "20px" },
            }}
          >
            <Grid item xs={6} lg={3}>
              <DecisionTab
                onClick={() => tabHandler(0)}
                isActive={activeEl === 0 ? true : false}
                title="Проблемы графика и расписания при использовании Exel или блокнота"
                index={0}
              />
            </Grid>
            <Grid item xs={6} lg={3}>
              <DecisionTab
                onClick={() => tabHandler(1)}
                isActive={activeEl === 1 ? true : false}
                title="Административные проблемы при отсутствии автоматизации"
                index={1}
              />
            </Grid>
            <Grid item xs={6} lg={3}>
              <DecisionTab
                onClick={() => tabHandler(2)}
                isActive={activeEl === 2 ? true : false}
                title="Проблемы абонементов"
                index={2}
              />
            </Grid>
            <Grid item xs={6} lg={3}>
              <DecisionTab
                onClick={() => tabHandler(3)}
                isActive={activeEl === 3 ? true : false}
                title="Страх трудностей в обучении программой, ее сложный интерфейс"
                index={3}
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing="20"
            sx={{
              mt: { xs: "0", lg: "30px" },
            }}
          >
            {filteredItems.map((item, index) => {
              return (
                <Grid
                  key={index}
                  item
                  xs={12}
                  sm={6}
                  lg={activeEl === 0 || activeEl === 2 ? 4 : 6}
                >
                  <DecisionItem no={item.no} ok={item.ok} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Decision;
