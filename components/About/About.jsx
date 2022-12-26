import { Box, Container } from "@mui/material";
import React from "react";
import Title from "../Title";
import AboutItem from "./AboutItem";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import SwiperCore, { Grid, Pagination, Navigation } from "swiper";
const About = () => {
  const swiperRef = React.useRef(null);

  return (
    <Box
      variant="section"
      id="about"
      sx={{
        padding: "40px 0",
      }}
    >
      <Container maxWidth="lg">
        <Title title="CRM" subTitle="идеальна для" />

        <Box
          sx={{
            mt: "24px",
            position: "relative",
          }}
        >
          <Box
            className="arrow prev"
            onClick={() => swiperRef.current.swiper.slidePrev()}
            sx={{
              position: "absolute",
              top: "43%",
              left: "0",
              transform: "translateY(-50%)",
            }}
          >
            
          </Box>
          <Swiper
            slidesPerView={2}
            grid={{
              rows: 2,
              fill: "row",
            }}
            spaceBetween={16}
            pagination={{
              clickable: true,
            }}
            modules={[Grid, Pagination, Navigation]}
            breakpoints={{
              1200: {
                spaceBetween: 22,
                slidesPerView: 4,
                grid: {
                  rows: 1,
                },
              },
            }}
            className="aboutSwiper"
            ref={swiperRef}
          >
            <SwiperSlide>
              <AboutItem img="/about-fight.svg" title="asdsadasd" />
            </SwiperSlide>
            <SwiperSlide>
              <AboutItem img="/about-fight.svg" title="asdsadasd" />
            </SwiperSlide>
            <SwiperSlide>
              <AboutItem img="/about-fight.svg" title="asdsadasd" />
            </SwiperSlide>
            <SwiperSlide>
              <AboutItem img="/about-fight.svg" title="asdsadasd" />
            </SwiperSlide>
            <SwiperSlide>
              <AboutItem img="/about-fight.svg" title="asdsadasd" />
            </SwiperSlide>
            <SwiperSlide>
              <AboutItem img="/about-fight.svg" title="asdsadasd" />
            </SwiperSlide>
            <SwiperSlide>
              <AboutItem img="/about-fight.svg" title="asdsadasd" />
            </SwiperSlide>
            <SwiperSlide>
              <AboutItem img="/about-fight.svg" title="asdsadasd" />
            </SwiperSlide>
          </Swiper>
          <Box
            className="arrow next"
            onClick={() => swiperRef.current.swiper.slideNext()}
            sx={{
              position: "absolute",
              top: "43%",
              right: "0",
              transform: "translateY(-50%)",
            }}
          >
            
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
