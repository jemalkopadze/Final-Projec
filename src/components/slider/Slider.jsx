import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

export const Slider = ({ children, sliderClassName = "" }) => {
  return (
    <Swiper
      autoplay="2000"
      slidesPerView={1}
      spaceBetween={20}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className={sliderClassName}
    >
      {children.map((child, index) => (
        <SwiperSlide key={`swiper-slide-${index}`}>
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
export default Slider;