import { Box, Container } from "@mui/material";
import React, { FC } from "react";
import Title from "../Title";
import AboutItem from "./AboutItem";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Grid, Pagination, Navigation } from "swiper";
import { aboutData } from "./aboutData";

const About: FC = () => {
  const swiperRef = React.useRef<SwiperRef | null>(null);
  const [indexSlide, setIndexSlide] = React.useState<number>(0);
  const [lastSlide, setLastSlide] = React.useState<undefined | number>(
    undefined
  );

  return (
    <Box
      component="section"
      id="about"
      sx={{
        padding: "40px 0",
        backgroundColor: "#fff",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          pl: { xs: "0", lg: "16px" },
          pr: { xs: "0", lg: "16px" },
        }}
      >
        <Title title="Идеально для" />

        <Box
          sx={{
            mt: { xs: "10px", md: "24px" },
            position: "relative",
          }}
        >
          <Box
            className={`arrow prev ${indexSlide === 0 ? "disabled" : ""}`}
            onClick={() => {
              if (swiperRef.current) {
                swiperRef.current.swiper.slidePrev();
              }
            }}
            sx={{
              position: "absolute",
              top: "43%",
              left: "0",
              transform: "translateY(-50%)",
            }}
          ></Box>
          <Swiper
            onRealIndexChange={(el: any) => {
              setIndexSlide(el.activeIndex);
              setLastSlide(el.imagesLoaded);
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
              600: {
                spaceBetween: 25,
              },

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
            {aboutData.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <AboutItem img={item.img} title={item.title} />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <Box
            className={`arrow next ${
              lastSlide && indexSlide === lastSlide - 4 ? "disabled" : ""
            }`}
            onClick={() => {
              if (swiperRef.current) {
                swiperRef.current.swiper.slideNext();
              }
            }}
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
