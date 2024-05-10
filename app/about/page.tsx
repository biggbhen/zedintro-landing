'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FiChevronRight, FiChevronUp, FiLinkedin } from 'react-icons/fi';
import { LuUser2 } from 'react-icons/lu';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import searchIcon from '../../public/assets/icons/search-icon.svg';
import aboutHeroImg from '../../public/assets/images/about-hero-img.png';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Head from 'next/head';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    elementsRef.current.forEach((element) => {
      gsap.fromTo(
        element,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.in',
          // stagger: 0.4,
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  return (
    <>
      <Head>
        <title>Access world-class industry experts on Zedintro</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="title"
          property="og:title"
          content="Access world-class industry experts on Zedintro"
        />
        <meta name="type" property="og:type" content="website" />
        <meta
          name="description"
          property="og:description"
          content="Access world-class industry experts at your convenience with ZedIntro. Our platform connects career and business professionals with top-notch mentors, offering valuable insights and guidance. Book time slots, reschedule if needed, and experience a simplified process through our user-friendly website and supportive community."
        />
        <meta
          name="image"
          property="og:image"
          content="https://ibb.co/SKngGWg"
        />
        <meta name="url" property="og:url" content="https://zedintro.com/" />
      </Head>

      <main className="">
        <div className="min-h-screen w-full relative overflow-hidden about-hero-page">
          <div className="sm:pt-28 pt-32 m-auto max-w-[1240px] xl:px-0 md:px-10 px-6">
            <div className="font-bold text-black">
              <h1 className="md:text-[5rem] sm:text-[2.5rem] text-3xl leading-[1.1] text-center sm:max-w-[80rem] m-auto hero-text">
                Access world-class industry experts with Zedintro
              </h1>
            </div>

            <p className="text-center m-auto font-normal my-6 text-xl">
              Access world-class industry experts conveniently with ZedIntro.
            </p>

            <p className="text-center m-auto font-normal text-xl">
              Our platform connects career and business professionals and
              everyday individuals with experts, offering valuable insights and
              guidance in whatever field. Book available time slots, request for
              time outside their available time (for special cases), and
              experience a simplified process through all this with our
              user-friendly website and supportive community.
            </p>

            <div className="my-12">
              <Image
                className="m-auto"
                priority
                src={aboutHeroImg}
                alt="Access world-class industry experts on Zedintro."
              />
            </div>
          </div>
        </div>

        <div className="bg-white m-auto max-w-[1240px] xl:px-0 md:px-10 px-6 pb-20 mt-16">
          <div
            className="flex md:flex-row flex-col-reverse md:space-y-0 md:space-x-10 items-center justify-between bg-[#DAE1FF] md:p-8 p-5 rounded-xl shadow-md fade-in"
            ref={(el) => {
              if (el) elementsRef.current.push(el);
            }}
          >
            <div className="md:w-1/2 w-full md:max-w-[33rem] mt-8 md:mt-0">
              <h2 className="md:text-6xl text-4xl font-bold my-0">
                About Zedintro
              </h2>

              <p className="my-5 text-[#1E293B]">
                Life and business can be challenging, and achieving even the
                smallest measure of success often requires the guidance and
                support of mentors, friends, and family. Expert assistance from
                professionals with extensive experience is essential for
                individuals and businesses alike.
              </p>

              <p className="my-5 text-[#1E293B]">
                At Zedintro, we believe there&apos;s a better way to access
                world-class industry experts. That is why we have created a
                platform that offers valuable and immersive opportunities for
                career and business professionals to connect with industry
                experts and gain their insights and advice.
              </p>
            </div>

            <div className="md:w-1/2 w-full sm:h-[24rem] h-[18rem] rounded-lg shadow-md overflow-hidden">
              <Image
                src={`/assets/images/about-zedIntro.png`}
                width={100}
                height={100}
                className="h-full w-full object-cover"
                alt="life & business"
              />
            </div>
          </div>

          <div className="md:flex md:space-x-10 md:justify-between mt-10">
            <div
              className="md:w-1/2 w-full bg-[#FFEFD2] md:p-8 p-5 rounded-xl shadow-md fade-in"
              ref={(el) => {
                if (el) elementsRef.current.push(el);
              }}
            >
              <h2 className="md:text-6xl text-4xl font-bold my-0">
                Our Mission
              </h2>

              <p className="my-5 text-[#1E293B]">
                Our mission at ZedIntro is simple yet powerful: to help people
                get access to quality industry experts at their convenience.
              </p>
            </div>

            <div
              className="md:w-1/2 w-full bg-[#E6FFFD] md:p-8 p-5 mt-10 md:mt-0 rounded-xl shadow-md fade-in"
              ref={(el) => {
                if (el) elementsRef.current.push(el);
              }}
            >
              <h2 className="md:text-6xl text-4xl font-bold my-0">
                More About Us
              </h2>

              <p className="my-5 text-[#1E293B]">
                We understand that emergencies happen or plans change, so we
                offer flexibility. If you need to reschedule, simply let us
                know. In case an expert is unavailable, they can cancel the
                call, and you will receive a refund within 24 hours. <br />{' '}
                <br />
                Accessing industry experts can be a complex and opaque process,
                but we see it as an opportunity. At ZedIntro, we simplify this
                problem for everyone by offering innovative software,
                educational resources, and a supportive community so businesses
                and individuals can access world-class industry experts.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
