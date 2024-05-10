import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Flickity from 'react-flickity-component';
import 'flickity/css/flickity.css';
import Image from 'next/image';
import { MdOutlineCalendarMonth, MdOutlineStarPurple500 } from 'react-icons/md';
import { LuUser2 } from 'react-icons/lu';
import { AiOutlineDollar } from 'react-icons/ai';
import { FiPhone } from 'react-icons/fi';

type Props = {};

const flickityOptions = {
  initialIndex: 1,
  contain: true,
  imagesLoaded: true,
  wrapAround: true,
  autoPlay: true,
  friction: 0.25,
  accessibility: true,
  selectedAttraction: 0.01,
  cellAlign: 'left',
};

const EasyStepCarousel: React.FC<Props> = () => {
  const sliderRef = useRef(null);

  return (
    <div>
      <Flickity
        className={'carousel'}
        elementType={'div'}
        options={flickityOptions}
        disableImagesLoaded={false}
        reloadOnUpdate
      >
        <div className="bg-white w-full shadow-md mt-6 rounded-xl ml-12 md:h-[36rem] flex md:hidden flex-col-reverse md:items-center sm:p-8 p-5 relative">
          <div className="md:w-[30rem] text-black">
            <LuUser2 className="sm:text-6xl text-5xl font-light" />

            <h3 className="font-semibold sm:text-xl text-lg mt-4 mb-1">
              Sign up as an expert on ZedIntro
            </h3>

            <p className="font-light">
              Easily sign up with your email or with google.
            </p>
          </div>

          <div className="grow h-full sm:py-8 py-3 sm:px-4 px-2">
            <div className="h-full">
              <Image
                src={`/assets/images/signUp.png`}
                width={100}
                height={100}
                className="h-full w-full"
                alt="sign up"
              />
            </div>
          </div>
        </div>

        <div
          className="bg-white w-full shadow-md mt-6 rounded-xl ml-12 md:h-[36rem] flex md:hidden flex-col-reverse md:items-center sm:p-8 p-5 relative"
        >
          <div className="md:w-[30rem] text-black">
            <MdOutlineCalendarMonth className="sm:text-6xl text-5xl font-light" />

            <h3 className="font-semibold sm:text-xl text-lg mt-4 mb-1">
              Sign up as an expert on ZedIntro
            </h3>

            <p className="font-light">
              Easily sign up with your email or with google.
            </p>
          </div>

          <div className="grow h-full sm:py-8 py-3 sm:px-4 px-2">
            <div className="h-full">
              <Image
                src={`/assets/images/availability.png`}
                width={100}
                height={100}
                className="h-full w-full"
                alt="sign up"
              />
            </div>
          </div>
        </div>

        <div
          className="bg-white w-full shadow-md mt-6 rounded-xl ml-12 md:h-[36rem] flex md:hidden flex-col-reverse md:items-center sm:p-8 p-5 relative"
        >
          <div className="md:w-[30rem] text-black">
            <AiOutlineDollar className="sm:text-6xl text-5xl font-light" />

            <h3 className="font-semibold sm:text-xl text-lg mt-4 mb-1">
              Sign up as an expert on ZedIntro
            </h3>

            <p className="font-light">
              Easily sign up with your email or with google.
            </p>
          </div>

          <div className="grow h-full sm:py-8 py-3 sm:px-4 px-2">
            <div className="h-full">
              <Image
                src={`/assets/images/price.png`}
                width={100}
                height={100}
                className="h-full w-full"
                alt="sign up"
              />
            </div>
          </div>
        </div>

        <div
          className="bg-white w-full shadow-md mt-6 rounded-xl ml-12 md:h-[36rem] flex md:hidden flex-col-reverse md:items-center sm:p-8 p-5 relative"
        >
          <div className="md:w-[30rem] text-black">
            <FiPhone className="sm:text-6xl text-5xl font-light" />

            <h3 className="font-semibold sm:text-xl text-lg mt-4 mb-1">
              Sign up as an expert on ZedIntro
            </h3>

            <p className="font-light">
              Easily sign up with your email or with google.
            </p>
          </div>

          <div className="grow h-full sm:py-8 py-3 sm:px-4 px-2">
            <div className="h-full">
              <Image
                src={`/assets/images/phone.png`}
                width={100}
                height={100}
                className="h-full w-full"
                alt="sign up"
              />
            </div>
          </div>
        </div>
      </Flickity>
    </div>
  );
};

export default EasyStepCarousel;
