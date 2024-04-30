import { Box } from "@mui/material";
import { Swiper } from "swiper/react";

const AutoSwiper = ({ children }) => {
  return (
    <Box sx={{
      "& .swiper-slide": {
        width: {
          xs: "50%",
          sm: "35%",
          md: "25%",
          lg: "20.5%",
        }
      },
      display: "flex",
      justifyContent: "space-between", // Add space between items
      "& .swiper-wrapper": {
        width: "100%"
      }
    }}>
      <Swiper
        slidesPerView="auto"
        grabCursor={true}
        style={{ width: "100%", height: "max-content", borderRadius: "12px"}}
      >
        {children}
      </Swiper>
    </Box>
  );
};

export default AutoSwiper;
