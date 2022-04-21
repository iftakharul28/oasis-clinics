import * as React from 'react';
import Image from 'next/image';
import { toFieldPath, pickDataAttrs } from '@stackbit/annotations';

export const BlogSection = (props) => {
  return (
    <section {...pickDataAttrs(props)} className="meet-doctors">
      <div className="container">
        <h2 {...toFieldPath('.heading')} className="meet-doctors__heading">
          {props.heading}
        </h2>
        <div className="meet-doctors__content">
          <div className="doctor-cards">
            {props.BlogCard.map((item, index) => (
              <div
                {...toFieldPath(`.BlogCard.${index}`)}
                key={index}
                className="doctor-card"
              >
                <div className="doctor-card__image-wrapper">
                  <Image
                    alt={item.name}
                    {...toFieldPath('.image')}
                    src={item.image}
                    layout="fill"
                    className="doctor-card__image"
                  />
                </div>
                <h2 className="doctor-card__title">{item.name}</h2>
                <p className="doctor-card__details">{item.description}</p>
                <address className="doctor-card__location">
                  <svg
                    className="doctor-card__location-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 6.66675C14 11.3334 8 15.3334 8 15.3334C8 15.3334 2 11.3334 2 6.66675C2 5.07545 2.63214 3.54933 3.75736 2.42411C4.88258 1.29889 6.4087 0.666748 8 0.666748C9.5913 0.666748 11.1174 1.29889 12.2426 2.42411C13.3679 3.54933 14 5.07545 14 6.66675Z"
                      stroke="#056839"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 8.66675C9.10457 8.66675 10 7.77132 10 6.66675C10 5.56218 9.10457 4.66675 8 4.66675C6.89543 4.66675 6 5.56218 6 6.66675C6 7.77132 6.89543 8.66675 8 8.66675Z"
                      stroke="#056839"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item.location}
                </address>
                <div className="doctor-card__button-wrapper">
                  <a href={item.url} className="button">
                    {item.btnname}
                  </a>
                </div>
              </div>
            ))}
          </div>
          <a className="button meet-doctors__button" href={props.url}>
            {props.btnname}
          </a>
        </div>
      </div>
    </section>
  );
};
