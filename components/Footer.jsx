import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';

export const Footer = ({
  footerBody,
  footerLogo,
  description,
  icons,
  listOneTitle,
  listOne,
  listTwoTitle,
  listTwo,
  listThreeTitle,
  listThree,
}) => {
  const [click, setClick] = useState(false);
  return (
    <footer
      data-sb-field-path="content/data/config.json:footer"
      className="footer"
    >
      <div data-sb-field-path=".footerBody" className="container">
        <div className="footer__desricption">
          {footerLogo.map((items, index) => {
            const annotationPrefix = `.${index}`;
            const annotations = [
              `${annotationPrefix}`,
              `${annotationPrefix}.url#@href`,
              `${annotationPrefix}.altText#@aria-label`,
            ];
            return (
              <a
                data-sb-field-path=".footerLogo"
                href="/"
                className="footer__brand"
                key={index}
              >
                <img
                  className="img-fluid"
                  data-sb-field-path={annotations.join(' ').trim()}
                  src={footerLogo[`${index}`].url}
                  alt={footerLogo[`${index}`].altText}
                />
              </a>
            );
          })}
          <p data-sb-field-path=".description" className="footer__text">
            {description}
          </p>
          <ul className="footer__social-icons" data-sb-field-path=".icons">
            {icons.map((items, index) => {
              const annotationPrefix = `.${index}`;
              const annotations = [
                `${annotationPrefix}`,
                `${annotationPrefix}.url#@href`,
                `${annotationPrefix}.altText#@aria-label`,
              ];
              return (
                <li key={index} className="footer__social-icon">
                  <a href="/">
                    <img
                      className="img-fluid"
                      src={icons[`${index}`].url}
                      alt={icons[`${index}`].altText}
                      height="20"
                      width="20"
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="footer__links" onClick={() => setClick(!click)}>
          <p className="footer__links-title">
            <span>{listOneTitle}</span>
            <svg
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L6 6L11 1"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </p>
          <ul
            className={
              click
                ? 'footer__links-wrapper footer__links-wrapper--open'
                : 'footer__links-wrapper'
            }
          >
            {listOne.map((items, index) => {
              return (
                <li key={index} data-sb-field-path=".listOne">
                  <a href="/" className="footer__link">
                    {listOne[`${index}`].label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="footer__links" onClick={() => setClick(!click)}>
          <p className="footer__links-title">
            <span>{listTwoTitle}</span>
            <svg
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L6 6L11 1"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </p>
          <ul
            className={
              click
                ? 'footer__links-wrapper footer__links-wrapper--open'
                : 'footer__links-wrapper'
            }
          >
            {listTwo.map((items, index) => {
              return (
                <li key={index} data-sb-field-path=".listTwo">
                  <a href="/" className="footer__link">
                    {listTwo[`${index}`].label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="footer__links" onClick={() => setClick(!click)}>
          <p className="footer__links-title">
            <span>{listThreeTitle}</span>
            <svg
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L6 6L11 1"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </p>
          <div
            className={
              click
                ? 'footer__links-wrapper footer__links-wrapper--open'
                : 'footer__links-wrapper'
            }
          >
            <div className="footer__contact-phone">
              phone
              <a href="tel:+20 1004000777" className="footer__phone-number">
                +20 1004000777
                <svg
                  className="footer__icon"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M14.6667 11.28V13.28C14.6675 13.4657 14.6294 13.6494 14.555 13.8195C14.4807 13.9897 14.3716 14.1424 14.2348 14.2679C14.0979 14.3934 13.9364 14.489 13.7605 14.5485C13.5847 14.6079 13.3983 14.63 13.2134 14.6133C11.1619 14.3904 9.19137 13.6894 7.46004 12.5667C5.84926 11.5431 4.48359 10.1774 3.46004 8.56665C2.33336 6.82745 1.6322 4.84731 1.41337 2.78665C1.39671 2.60229 1.41862 2.41649 1.4777 2.24107C1.53679 2.06564 1.63175 1.90444 1.75655 1.76773C1.88134 1.63102 2.03324 1.52179 2.20256 1.447C2.37189 1.37221 2.55493 1.33349 2.74004 1.33332H4.74004C5.06357 1.33013 5.37723 1.4447 5.62254 1.65567C5.86786 1.86664 6.02809 2.15961 6.07337 2.47998C6.15779 3.12003 6.31434 3.74847 6.54004 4.35332C6.62973 4.59193 6.64915 4.85126 6.59597 5.10057C6.5428 5.34988 6.41928 5.57872 6.24004 5.75998L5.39337 6.60665C6.34241 8.27568 7.72434 9.65761 9.39337 10.6067L10.24 9.75998C10.4213 9.58074 10.6501 9.45722 10.8994 9.40405C11.1488 9.35088 11.4081 9.37029 11.6467 9.45998C12.2516 9.68568 12.88 9.84224 13.52 9.92665C13.8439 9.97234 14.1396 10.1355 14.3511 10.385C14.5625 10.6345 14.6748 10.953 14.6667 11.28Z"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
            <div className="footer__contact-email">
              Email Address
              <p className="footer__email">
                info@oasisclinics.com
                <svg
                  className="footer__icon"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M2.66671 2.66675H13.3334C14.0667 2.66675 14.6667 3.26675 14.6667 4.00008V12.0001C14.6667 12.7334 14.0667 13.3334 13.3334 13.3334H2.66671C1.93337 13.3334 1.33337 12.7334 1.33337 12.0001V4.00008C1.33337 3.26675 1.93337 2.66675 2.66671 2.66675Z"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    opacity="0.5"
                    d="M14.6667 4L8.00004 8.66667L1.33337 4"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </p>
            </div>
            <div className="footer__contact-time">
              Hours
              <p className="footer__time">
                <time>9am to 10pm</time>
                <svg
                  className="footer__icon"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M8.00004 14.6666C11.6819 14.6666 14.6667 11.6818 14.6667 7.99992C14.6667 4.31802 11.6819 1.33325 8.00004 1.33325C4.31814 1.33325 1.33337 4.31802 1.33337 7.99992C1.33337 11.6818 4.31814 14.6666 8.00004 14.6666Z"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    opacity="0.5"
                    d="M8 4V8L10.6667 9.33333"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </p>
            </div>
          </div>
        </div>
        <ul className="footer__social-icons footer__social-icons--mobile">
          {icons.map((items, index) => {
            const annotationPrefix = `.${index}`;
            const annotations = [
              `${annotationPrefix}`,
              `${annotationPrefix}.url#@href`,
              `${annotationPrefix}.altText#@aria-label`,
            ];
            return (
              <li key={index} className="footer__social-icon">
                <a href="/">
                  <img
                    className="img-fluid"
                    src={icons[`${index}`].url}
                    alt={icons[`${index}`].altText}
                    height="20"
                    width="20"
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};
