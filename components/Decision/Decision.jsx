import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import DecisionItem from './DecisionTabs/DecisionItem';
import DecisionTab from './DecisionTabs/DecisionTab';

const Decision = () => {
  const [activeEl, setActiveEl] = React.useState(0);
  
  const tabHandler = (index) => {
    setActiveEl(parseInt(index));
  }

  return (
    <Box sx={{
      pt: "24px",
      pb: "60px",
      backgroundImage: "url(/decision-bg.png)",
      backgroundRepeat: "no-repeat",
      backgroundRepeat: "top",
      backgroundSize: "cover"
    }}>
      <Container maxWidth="lg">
      <Typography variant="h3" sx={{
        fontSize: "24px", 
        fontWeight: 700, 
        lineHeight: "29px"
      }}>
      Какие проблемы решает наша CRM?
      </Typography>

      <Grid container spacing="20" sx={{
        mt: "3px"
      }}>
        <Grid item xs={6}>
          <DecisionTab onClick={() => tabHandler(0)} isActive={activeEl === 0 ? true : false} title="Проблемы графика и расписания при использовании Exel или блокнота" index={0} />
        </Grid>
        <Grid item xs={6}>
          <DecisionTab onClick={() => tabHandler(1)} isActive={activeEl === 1 ? true : false} title="Проблемы графика и расписания при использовании Exel или блокнота" index={1} />
        </Grid>
        <Grid item xs={6}>
          <DecisionTab onClick={() => tabHandler(2)} isActive={activeEl === 2 ? true : false} title="Проблемы графика и расписания при использовании Exel или блокнота" index={2} />
        </Grid>
        <Grid item xs={6}>
          <DecisionTab onClick={() => tabHandler(3)} isActive={activeEl === 3 ? true : false} title="Проблемы графика и расписания при использовании Exel или блокнота" index={3} />
        </Grid>
      </Grid>
      </Container>
    </Box>
  );
};

export default Decision;