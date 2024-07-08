import React from "react";
import { Parallax } from "react-parallax";
import Image from "next/legacy/image";

type Props = {};

const HomeBanner = (props: Props) => {
  return (
    <section className="home_banner_area">
        <Parallax
          blur={0}
          bgImage="/images/home-banner-tp.png"
          bgImageAlt="home banner"
          strength={100}
          className="container-fluid banner_inner d-flex"
          contentClassName="container-fluid d-flex align-items-center"
        >
          <div className="container">
            <div className="banner_content text-center">
              {/* Wrap the Image in a div and apply custom styling */}
              <div style={{ marginBottom: '30px' }}> {/* Adjust the margin as needed */}
              <span style={{fontSize: '60px', color: '#000'}}> Renown Watch Services</span>
              </div>
              <h3 style={{fontSize: '35px', color: '#000'}}>
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