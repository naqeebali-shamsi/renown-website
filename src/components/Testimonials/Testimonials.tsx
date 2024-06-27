import React from 'react'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import Image from "next/image"
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

type Props = {}

const Testimonials = (props: Props) => {

  const carouselConfig = {
    merge: true,
    smartSpeed: 1000,
    loop: true,
    nav: false,
    center: false,
    dots: true,
    navText: [
      '<i class="fa fa-long-arrow-left"></i> Prev',
      'Next <i class="fa fa-long-arrow-right"></i>',
    ],
    autoplay: true,
    autoplayTimeout: 3000,
    margin: 20,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
      1200: {
        items: 2,
      },
    },
  };

  return (
    <section className="testimonial-area area-padding">
        <div className="container">
          <div className="area-heading">
            <h3 className="line">Customer reviews</h3>
            <p>Together female let signs for for fish fowl may first.</p>
          </div>
          <div className="row">
          <OwlCarousel
              className="active-testimonial-carusel owl-carousel"
              {...carouselConfig}
            >
              <div className="single-testimonial item d-flex flex-row">
                <div className="thumb">
                  <Image width={91} height={91}
                    className="img-fluid"
                    src="https://avatar.iran.liara.run/username?username=Carol+Magister"
                    alt=""
                  />
                </div>
                <div className="desc">
                  <h4>Carol Magister</h4>
                  <p className="designation">Chief Customer</p>
                  <p>
                  I recently decided to make enquires about getting my Dads military watch repaired.  It’s been sitting in a drawer since he passed away in 1977.  I met with Yasir and upon inspection said due  to its age it was in need of reconditioning, cleaning and some new parts. Ie  springs/mechanism was broken, the crown was damaged and the  crystal in very bad shape.  Considering it was the only watch my Dad had ever worn while (even while  serving in north Africa and Italy )  I was hopeful this very special piece could be fixed And it was!  Within a week :-)
Yasir did an amazing job, watch is running perfectly, looks great and I’m so pleased to be able to wear it.  Yasir is pure professionalism and a pleasure to deal with. Thank you so much.
Below are the before and after photos.
                  </p>
                </div>
              </div>
              <div className="single-testimonial item d-flex flex-row">
                <div className="thumb">
                  <Image width={91} height={91}
                    className="img-fluid"
                    src="https://avatar.iran.liara.run/username?username=Matt+B"
                    alt=""
                  />
                </div>
                <div className="desc">
                  <h4>Matthew B</h4>
                  <p className="designation">Chief Customer</p>
                  <p>
                  Great service. Replaced some damaged links and pins on a Movado done by another Watch service place. This man is a gentleman and knows his craft. Very professional and humble. Great pricing. Good experience.  Is now my Go-To Watch repair man.
                  </p>
                </div>
              </div>
              <div className="single-testimonial item d-flex flex-row">
                <div className="thumb">
                  <Image width={91} height={91}
                    className="img-fluid"
                    src="https://avatar.iran.liara.run/username?username=Salar+Babazadeh"
                    alt=""
                  />
                </div>
                <div className="desc">
                  <h4>Salar Babazadeh</h4>
                  <p className="designation">Chief Customer</p>
                  <p>
                  Yasir has worked on many of my watches, and he does it to absolute perfection, like a magician. I am grateful for you and your work Yasir!
                  </p>
                </div>
              </div>
              <div className="single-testimonial item d-flex flex-row">
                <div className="thumb">
                  <Image width={91} height={91}
                    className="img-fluid"
                    src="https://avatar.iran.liara.run/username?username=John+Whang"
                    alt=""
                  />
                </div>
                <div className="desc">
                  <h4>John Whang</h4>
                  <p className="designation">Chief Customer</p>
                  <p>
                  Yasir provides exceptional service! He is such a good man and caters as best as he can to make sure you are satisfied with the work. 100% recommended
                  </p>
                </div>
              </div>
              <div className="single-testimonial item d-flex flex-row">
                <div className="thumb">
                  <Image width={91} height={91}
                    className="img-fluid"
                    src="/images/tes1.jpg.webp"
                    alt=""
                  />
                  
                </div>
                <div className="desc">
                  <h4>Adame Nesane</h4>
                  <p className="designation">Chief Customer</p>
                  <p>
                    You{`'`}re had. Subdue grass Meat us winged years you{`'`}ll
                    doesn{`'`}t. fruit two also won one yielding creepeth third
                    give may never lie alternet food.
                  </p>
                </div>
              </div>
            </OwlCarousel>
          </div>
          <button className="btn_1" type="button"> <a href="https://www.google.com/search?q=renown+watch+services&sca_esv=4da7e4a506bae9b2&sca_upv=1&sxsrf=ADLYWIItjgjVp4QRFfpSjH7ECWU7LYbWZw%3A1719453305999&ei=ecZ8ZvXbPP_Up84Pzrmu0Aw&ved=0ahUKEwi1_Ivc1vqGAxV_6skDHc6cC8oQ4dUDCA8&uact=5&oq=renown+watch+services&gs_lp=Egxnd3Mtd2l6LXNlcnAiFXJlbm93biB3YXRjaCBzZXJ2aWNlczIFEAAYgAQyDhAuGIAEGMcBGI4FGK8BMgYQABgWGB4yAhAmMgsQABiABBiGAxiKBTILEAAYgAQYhgMYigUyCxAAGIAEGIYDGIoFMgsQABiABBiGAxiKBTIIEAAYgAQYogQyCBAAGIAEGKIESOgiULgHWOkhcAF4AZABAJgB3QGgAYYWqgEGMS4xOC4xuAEDyAEA-AEBmAIVoALxFsICChAAGLADGNYEGEfCAg0QABiABBiwAxhDGIoFwgIZEC4YgAQYsAMY0QMYQxjHARjIAxiKBdgBAcICBBAjGCfCAgoQABiABBhDGIoFwgIREC4YgAQYsQMY0QMYgwEYxwHCAgsQLhiABBixAxiDAcICCxAuGIAEGNEDGMcBwgILEAAYgAQYsQMYgwHCAggQABiABBixA8ICERAuGIAEGLEDGNEDGMcBGIoFwgINEAAYgAQYsQMYQxiKBcICEBAAGIAEGLEDGEMYgwEYigXCAgoQIxiABBgnGIoFwgILEAAYgAQYkQIYigXCAg0QABiABBhDGMkDGIoFwgIQEC4YgAQY0QMYQxjHARiKBcICDRAuGIAEGLEDGEMYigXCAggQLhiABBixA8ICEhAAGIAEGLEDGEMYigUYRhj5AcICEBAuGIAEGEMYxwEYigUYrwHCAgUQLhiABMICLBAAGIAEGLEDGEMYigUYRhj5ARiXBRiMBRjdBBhGGPkBGPQDGPUDGPYD2AECwgILEC4YgAQYxwEYrwHCAh8QLhiABBhDGMcBGIoFGK8BGJcFGNwEGN4EGOAE2AEDwgIKEAAYgAQYFBiHAsICCBAuGIAEGOUEwgIIEAAYFhgKGB6YAwCIBgGQBgu6BgQIARgIugYGCAIQARgTugYGCAMQARgUkgcGMS4xOS4xoAfg8gE&sclient=gws-wiz-serp#">See more reviews</a></button>
        </div>
      </section>
  )
}

export default Testimonials