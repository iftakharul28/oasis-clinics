import * as React from 'react';
import { toFieldPath, pickDataAttrs } from '@stackbit/annotations';
import Markdown from 'markdown-to-jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';

export const OurClinic = (props) => {
  return (
    <section {...pickDataAttrs(props)} className="home-clinics">
      <div className="container">
        <div className="home-clinics__content">
          <div className="home-clinics__text-wrap">
            <h2 {...toFieldPath('.heading')} className="home-clinics__heading">
              {props.heading}
            </h2>
            <Markdown {...toFieldPath('.text')} className="home-clinics__text">
              {props.text}
            </Markdown>
            <a
              {...toFieldPath('.btnname')}
              className="button home-clinics__button"
              href={props.url}
            >
              {props.btnname}
            </a>
          </div>
          <div className="home-clinics__image-wrap">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              direction={'horizontal'}
              speed={500}
              loop={false}
              allowTouchMove={true}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                1060: {
                  slidesPerView: 3,
                },
              }}
              modules={[Navigation]}
              className="home-clinics__slider"
            >
              <div className="home-clinics__cards">
                {props.Clinic.map((item, index) => (
                  <SwiperSlide
                    {...toFieldPath(`.Clinic.${index}`)}
                    key={index}
                    className="clinics-card home-clinics__card"
                  >
                    <div className="home-clinics__image-wrapper">
                      <img
                        className="clinics-card__image"
                        src={item.img}
                        alt={item.title}
                      />
                    </div>
                    <h2 className="clinics-card__title home-clinics__card-title">
                      {item.title}
                    </h2>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
            <div className="home-clinics__navigation">
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
