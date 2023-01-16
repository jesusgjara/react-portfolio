import React from "react";
import "./testimonials.css";
// import Swiper core and required modules
import { Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'


const data = [
  {
    avatar: "https://i.pravatar.cc/300",
    name: "Chibi",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi ullam mollitia, laboriosam at ea unde obcaecati eveniet laudantium eum, tenetur nesciunt, adipisci minima nam corrupti? Ducimus quos tempore amet ullam.",
  },
  {
    avatar: "https://i.pravatar.cc/300",
    name: "Remy",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi ullam mollitia, laboriosam at ea unde obcaecati eveniet laudantium eum, tenetur nesciunt, adipisci minima nam corrupti? Ducimus quos tempore amet ullam.",
  },
  {
    avatar: "https://i.pravatar.cc/300",
    name: "Pancho",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi ullam mollitia, laboriosam at ea unde obcaecati eveniet laudantium eum, tenetur nesciunt, adipisci minima nam corrupti? Ducimus quos tempore amet ullam.",
  },
  {
    avatar: "https://i.pravatar.cc/300",
    name: "Toby",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi ullam mollitia, laboriosam at ea unde obcaecati eveniet laudantium eum, tenetur nesciunt, adipisci minima nam corrupti? Ducimus quos tempore amet ullam.",
  },
  {
    avatar: "https://i.pravatar.cc/300",
    name: "Shakira",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi ullam mollitia, laboriosam at ea unde obcaecati eveniet laudantium eum, tenetur nesciunt, adipisci minima nam corrupti? Ducimus quos tempore amet ullam.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
      // install Swiper modules
      className="container testimonials__container"
      modules={[Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={true}
      autoplay={(true, {delay: 5000})}
    >
      
      {data.map(({ avatar, name, review, index }) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>

              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
    </Swiper>
    </section>
  );
};

export default Testimonials;
