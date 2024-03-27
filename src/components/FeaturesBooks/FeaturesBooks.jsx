import "./FeaturesBooks.css";
import TitleTypeOne from "../../UI/TitleTypeOne/TitleTypeOne";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { Pagination } from "swiper/modules";
import { featuredBooksData } from "../../Data/Data";
import { BsArrowReturnRight } from "react-icons/bs";

const breakpoints = {
  1024: {
    slidesPerView: 4,
    spaceBetweenSlides: 30,
  },
  768: {
    slidesPerView: 3,
    spaceBetweenSlides: 20,
  },
  450: {
    slidesPerView: 2,
    spaceBetweenSlides: 10,
  },
  0: {
    slidesPerView: 1,
    spaceBetweenSlides: 0,
  },
};

export default function FeaturesBooks() {
  return (
    <section className="featured">
      <div className="container features-books-container">
        <TitleTypeOne
          TitleTop={"Some quality items"}
          Title={"Features Books"}
        />
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          loop={true}
          modules={[Pagination]}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          breakpoints={breakpoints}
        >
          {featuredBooksData.map(
            ({ img, imgLlink, nameLink, name, writer, price }, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="featuresbook-box">
                    <Link to={imgLlink} className="featurebook">
                      <img src={img} alt="" />
                    </Link>
                    <div className="featuresbook-info">
                      <Link to={nameLink}>
                        <h4>{name}</h4>
                      </Link>
                      <div>
                        <small>{writer}</small>
                      </div>
                      <h5>
                        <span>{price}</span>
                      </h5>
                    </div>
                  </div>
                </SwiperSlide>
              );
            }
          )}
          <div className="feature-border container"></div>
          <div className="swiper-pagination"></div>
          <Link to="*" className="btn feature-btn">
            View all products
            <BsArrowReturnRight />
          </Link>
        </Swiper>
      </div>
    </section>
  );
}
