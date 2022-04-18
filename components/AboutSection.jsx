import * as React from 'react';
import { toFieldPath, pickDataAttrs } from '@stackbit/annotations';
import Markdown from 'markdown-to-jsx';

export const AboutSection = (props) => {
  return (
    <section {...pickDataAttrs(props)} className="home-about">
      <div className="container">
        <h2 {...toFieldPath('.heading')} className="home-about__heading">
          {props.heading}
        </h2>
        <div className="home-about__content">
          <div className="home-about__image-wrap">
            <img
              {...toFieldPath('.img')}
              className="home-about__image"
              src={props.img}
              alt={props.subheading}
            />
          </div>
          <div className="home-about__text-wrap">
            <h3 {...toFieldPath('.subheading')} className="home-about__title">
              {props.subheading}
            </h3>
            <Markdown {...toFieldPath('.text')} className="home-about__text">
              {props.text}
            </Markdown>
            <a
              {...toFieldPath('.btnname')}
              className="button home-about__button"
              href="/"
            >
              {props.btnname}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
