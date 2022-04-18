import React, { useState } from 'react';
import Link from './Link';

export const Header = ({ primaryLinks, headerLogo }) => {
  const [click, setClick] = useState(false);
  return (
    <div
      className={click ? 'container container--active' : 'container'}
      data-sb-field-path="content/data/config.json:header"
    >
      <div className="header__logo-wrapper" data-sb-field-path=".headerLogo">
        <>
          {headerLogo.map((items, index) => {
            const annotationPrefix = `.${index}`;
            const annotations = [
              `${annotationPrefix}`,
              `${annotationPrefix}.url#@href`,
              `${annotationPrefix}.altText#@aria-label`,
            ];
            return (
              <a href="/" className="navbar-brand" key={index}>
                <img
                  className="img-fluid"
                  data-sb-field-path={annotations.join(' ').trim()}
                  src={headerLogo[`${index}`].url}
                  alt={headerLogo[`${index}`].altText}
                />
              </a>
            );
          })}

          <div className="header__nav-toggle" onClick={() => setClick(!click)}>
            <svg
              width="23"
              height="18"
              viewBox="0 0 23 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1H22"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 9H22"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 17H22"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </>
      </div>
      <ul
        data-sb-field-path=".primaryLinks"
        className={click ? 'main-nav main-nav--mobile' : 'main-nav'}
      >
        {primaryLinks.map((link, index) => {
          const { label, altText, url, type } = link;
          const annotationPrefix = `.${index}`;
          const annotations = [
            `${annotationPrefix}`,
            `${annotationPrefix}.url#@href`,
            `${annotationPrefix}.altText#@aria-label`,
          ];
          if (type === 'Link') {
            return (
              <li key={index} className="main-nav__item">
                <Link
                  className="main-nav__link"
                  href={url}
                  aria-label={altText}
                  data-sb-field-path={annotations.join(' ').trim()}
                >
                  {label && <span>{label}</span>}
                </Link>
              </li>
            );
          }
        })}
      </ul>
      {primaryLinks.map((link, index) => {
        const { label, altText, url, type } = link;
        const annotationPrefix = `.${index}`;
        const annotations = [
          `${annotationPrefix}`,
          `${annotationPrefix}.url#@href`,
          `${annotationPrefix}.altText#@aria-label`,
        ];
        if (type === 'Button') {
          return (
            <Link
              className={
                click
                  ? 'button button-desktop button-desktop--active'
                  : 'button button-desktop'
              }
              href={url}
              aria-label={altText}
              data-sb-field-path={annotations.join(' ').trim()}
            >
              {label && <span>{label}</span>}
            </Link>
          );
        }
      })}
    </div>
  );
};
