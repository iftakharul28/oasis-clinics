import * as React from 'react';
import { toFieldPath, pickDataAttrs } from '@stackbit/annotations';
import Markdown from 'markdown-to-jsx';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper';
export const HeroSection = (props) => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: 'url(' + props.img + ')',
      }}
    >
      <div className="container">
        <Swiper
          slidesPerView={1}
          direction={'vertical'}
          speed={1000}
          loop={true}
          allowTouchMove={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
            type: 'bullets',
          }}
          creativeEffect={{
            prev: {
              // will set `translateZ(-400px)` on previous slides
              translate: ['100%', 0, '100%'],
              opacity: 0,
            },
            next: {
              // will set `translateX(100%)` on next slides
              translate: ['-100%', 0, 0],
            },
          }}
          breakpoints={{
            // when window width is >= 320px
            320: {
              direction: 'horizontal',
            },
            // when window width is >= 1060px
            1060: {
              direction: 'vertical',
              effect: 'creative',
              creativeEffect: {
                prev: {
                  // will set `translateZ(-400px)` on previous slides
                  translate: [0, '-100%', '100%'],
                  opacity: 0,
                },
                next: {
                  // will set `translateX(100%)` on next slides
                  translate: [0, '100%', 0],
                },
              },
            },
          }}
          modules={[Autoplay, Pagination]}
          className="hero__slider"
        >
          <div
            {...pickDataAttrs(props)}
            className="swiper-wrapper hero__slider-wrapper"
          >
            {props.HeroBranch.map((item, index) => (
              <SwiperSlide key={index} className="hero__slide-item">
                <div
                  {...toFieldPath(`.HeroBranch.${index}`)}
                  className="hero__slide"
                >
                  <h1 className="hero__heading">{item.heading}</h1>
                  <p className="hero__schedule">{item.subheading}</p>
                  {item.buttons?.length > 0 && (
                    <div
                      {...pickDataAttrs('item.buttons')}
                      className="hero-buttons"
                    >
                      {item.buttons.map((button, idx) => (
                        <Link key={idx} href={`tel:${button.url}`}>
                          <a className="button hero__button">
                            <span>{button.label}</span>
                          </a>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>

      <div className="hero__pagination">
        {/* If we need pagination  */}
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};
