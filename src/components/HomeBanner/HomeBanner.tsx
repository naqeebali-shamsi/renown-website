import React from "react";
import { Parallax } from "react-parallax";
import Image from 'next/image';

type Props = {};

const HomeBanner = (props: Props) => {
  return (
    <section className="home_banner_area">
        <Parallax
          blur={1}
          bgImage="/images/home-banner-tp.png"
          bgImageAlt="home banner"
          strength={100}
          className="container-fluid banner_inner d-flex bg-center bg-no-repeat bg-gray-700 bg-blend-multiply"
          contentClassName="container-fluid d-flex align-items-center bg-center bg-no-repeat bg-gray-700 bg-blend-multiply"
        >
          <div className="container">
            <div className="banner_content text-center">
              {/* Wrap the Image in a div and apply custom styling */}
              <div style={{ marginBottom: '30px' }}> {/* Adjust the margin as needed */}
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"> Renown Watch Services</h1>
              </div>
              <h3>
                Time Heals All, We Heal Time
              </h3>
              <a className="main_btn" href="#">
                get a quote
              </a>
            </div>
          </div>
        </Parallax>
    </section>
    
  );
};

export default HomeBanner;