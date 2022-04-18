import * as React from 'react';
import { toFieldPath, pickDataAttrs } from '@stackbit/annotations';
import Markdown from 'markdown-to-jsx';

export const CovidSection = (props) => {
  return (
    <section
      {...pickDataAttrs(props)}
      className="covid"
      style={{
        backgroundImage: 'url(' + props.imgone + ')',
      }}
    >
      <div className="container">
        <div className="covid__content">
          <div className="covid__text-wrap">
            <Markdown {...toFieldPath('.text')} className="covid__text">
              {props.text}
            </Markdown>
            <a
              {...toFieldPath('.btnname')}
              className="button covid__button"
              href="/"
            >
              {props.btnname}
            </a>
          </div>
          <div
            className="covid__bg-image"
            style={{
              backgroundImage: 'url(' + props.imgtwo + ')',
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};
