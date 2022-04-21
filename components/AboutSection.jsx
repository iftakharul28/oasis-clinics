import * as React from 'react';
import { toFieldPath, pickDataAttrs } from '@stackbit/annotations';
import Markdown from 'markdown-to-jsx';
import Image from 'next/image';

export const AboutSection = (props) => {
  return (
    <section {...pickDataAttrs(props)} className="home-about">
      <div className="container">
        <h2 {...toFieldPath('.heading')} className="home-about__heading">
          {props.heading}
        </h2>
        <div className="home-about__content">
          <div className="home-about__image-wrap">
            <Image
              {...toFieldPath('.img')}
              className="home-about__image"
              alt={props.subheading}
              src={props.img}
              layout="fill"
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
