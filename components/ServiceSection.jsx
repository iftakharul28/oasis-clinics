import * as React from 'react';
import { toFieldPath, pickDataAttrs } from '@stackbit/annotations';
import Markdown from 'markdown-to-jsx';

export const ServiceSection = (props) => {
  return (
    <section {...pickDataAttrs(props)} className="home-services">
      <div className="container">
        <h2 {...toFieldPath('.heading')} className="home-services__heading">
          {props.heading}
        </h2>
        <div className="home-services__content">
          <div className="swiper1">
            <div className="home-services__cards swiper-wrapper">
              <div className="home-services__card swiper-slide">
                {props.ServiceCard.map((item, index) => (
                  <div
                    key={index}
                    {...toFieldPath(`.ServiceCard.${index}`)}
                    className="home-services__card-item"
                  >
                    <div className="home-services__card-image-wrap">
                      <img
                        className="home-services__card-image"
                        {...toFieldPath('.headingIcon')}
                        src={item.headingIcon}
                        alt={item.heading}
                      />
                    </div>
                    <div className="home-services__text-wrap">
                      <h3 className="home-services__card-heading">
                        {item.heading}
                      </h3>
                      <p className="home-services__card-text">
                        {item.subheading}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
