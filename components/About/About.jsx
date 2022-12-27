import { Box, Button, Container } from "@mui/material";
import React from "react";
import Title from "../Title";
import AboutItem from "./AboutItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Grid, Pagination, Navigation } from "swiper";
import {AboutData} from "./AboutData";
const About = () => {
  const swiperRef = React.useRef(null);
  const [indexSlide, setIndexSlide] = React.useState(0);
  const [lastSlide, setLastSlide] = React.useState(undefined);

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
            className={`arrow prev ${indexSlide === 0 ? "disabled" : ""}`}
            onClick={() => swiperRef.current.swiper.slidePrev()}
            sx={{
              position: "absolute",
              top: "43%",
              left: "0",
              transform: "translateY(-50%)",
            }}
          ></Box>
          <Swiper
            onRealIndexChange={(el) => {
              setIndexSlide(el.activeIndex);
              setLastSlide(el.imagesLoaded);
              console.log(el);
            }}
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
                slidesPerGroup: 4,
                grid: {
                  rows: 1,
                },
              },
            }}
            className="aboutSwiper"
            ref={swiperRef}
          >
            {AboutData.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <AboutItem img={item.img} title={item.title} />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <Box
            className={`arrow next ${
              indexSlide === lastSlide - 4 ? "disabled" : ""
            }`}
            onClick={() => swiperRef.current.swiper.slideNext()}
            sx={{
              display: "inline-block",
              position: "absolute",
              top: "43%",
              right: "0",
              transform: "translateY(-50%)",
            }}
          ></Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
