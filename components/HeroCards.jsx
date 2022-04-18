import * as React from 'react';
import { toFieldPath, pickDataAttrs } from '@stackbit/annotations';

export const HeroCards = (props) => {
  return (
    <section {...pickDataAttrs(props)} className="colorful-boxes">
      <div className="container">
        <div className="colorful-boxes__content">
          <div className="colorful-boxes__cards">
            {props.HeroCard.map((item, index) => (
              <div
                key={index}
                {...toFieldPath(`.HeroCard.${index}`)}
                className="colorful-boxes__card colorful-boxes__card--green-light"
              >
                <div className="colorful-boxes__text-wrap">
                  <div className="colorful-boxes__header">
                    <img
                      className="colorful-boxes__icon"
                      src={item.headingIcon}
                      alt={item.heading}
                    />
                    <h2 className="colorful-boxes__heading">{item.heading}</h2>
                  </div>
                  <p className="colorful-boxes__text">{item.subheading}</p>
                </div>
                <div className="colorful-boxes__button-wrap">
                  <a
                    className="boxes-button colorful-boxes__button"
                    href={item.url}
                  >
                    {item.btnname}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
