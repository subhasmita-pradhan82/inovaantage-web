import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

const services = [
  {
    title: "Geospatial Analytics",
    desc: "Advanced GIS & Mapping Solutions",
    img: "/assets/gis_image.png",
  },
  {
    title: "Big Data Engineering",
    desc: "Scalable Data Processing Systems",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
  {
    title: "Digital Innovation",
    desc: "Cloud & Enterprise Applications",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  },
  {
    title: "Managed IT Services",
    desc: "Secure Infrastructure & DevOps",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
];

const DigitalTransformation = () => {
  return (
    <section className="digital-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h5>Inovaantage</h5>
          <h2>Digital Transformation Services</h2>
          <div className="divider"></div>
        </motion.div>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 2500 }}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="tech-swiper"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="tech-card"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}s
            >
              <img src={service.img} alt={service.title} />
              <div className="digioverlay">
                <h4>{service.title}</h4>
                <p>{service.desc}</p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default DigitalTransformation;