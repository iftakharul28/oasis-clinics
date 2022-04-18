import * as React from 'react';
import { toFieldPath, pickDataAttrs } from '@stackbit/annotations';
import Markdown from 'markdown-to-jsx';

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
            <div className="home-clinics__slider swiper2">
              <div className="home-clinics__cards swiper-wrapper">
                {props.Clinic.map((item, index) => (
                  <div
                    key={index}
                    className="clinics-card home-clinics__card swiper-slide"
                  >
                    <div className="home-clinics__image-wrapper">
                      <img
                        {...toFieldPath('.img')}
                        className="clinics-card__image"
                        src={item.img}
                        alt={item.title}
                      />
                    </div>
                    <h2 className="clinics-card__title home-clinics__card-title">
                      {item.title}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
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
