'use client';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { FiChevronRight, FiChevronUp, FiPhone } from 'react-icons/fi';
import { LuUser2 } from 'react-icons/lu';
import ExpertsCarousel from './components/ExpertsCarousel';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { MdOutlineCalendarMonth } from 'react-icons/md';
import { AiOutlineDollar } from 'react-icons/ai';
import EasyStepCarousel from './components/EasyStepCarousel';
import Head from 'next/head';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
	const [accordion, setAccordion] = useState<number>(0);
	const [faq, setFaq] = useState<number>(0);
	const [loading, setLoading] = useState(false);
	const [experts, setExperts] = useState([]);
	const sectionRef = useRef(null);
	const apiUrl: string | any = process.env.NEXT_PUBLIC_API_URL;

	useEffect(() => {
		gsap.fromTo(
			'.bgIcons',
			{
				y: 280,
			},
			{
				y: 0,
				duration: 3,
				ease: 'bounce',
				stagger: 0.2,
				delay: 0.2,
			}
		);

		gsap.fromTo(
			'.faq-section',
			{
				y: 100,
				opacity: 0,
			},
			{
				y: 0,
				opacity: 1,
				duration: 0.8,
				ease: 'power2.in',
				stagger: 0.4,
				scrollTrigger: {
					trigger: '.faq-section',
					start: 'top bottom',
					end: 'bottom top',
					toggleActions: 'play none none none',
				},
			}
		);
	}, []);

	useEffect(() => {
		(async () => {
			setLoading(true);
			await axios
				.get(`${apiUrl}/v1/experts/search?limit=10&skip=0&orderBy=rating`)
				.then((result) => {
					const experts = result.data.data.docs;
					console.log(experts);
					setLoading(false);
					setExperts(experts);
					console.log(experts);
				})
				.catch(function (error) {
					setLoading(false);
					console.error(error);
				});
		})();
		// eslint-disable-next-line
	}, []);

	const handleFAQ = (idx: number) => {
		if (faq === idx) {
			setFaq(0);
		} else {
			setFaq(idx);
		}
	};

	const handleAccordion = (idx: number) => {
		if (accordion === idx) {
			setAccordion(0);
		} else {
			setAccordion(idx);
		}
	};

	const currentDisplay = () => {
		switch (accordion) {
			case 1:
				return `/assets/images/joinImage.png`;
				break;
			case 2:
				return `/assets/images/price-availability.png`;
				break;

			case 3:
				return `/assets/images/custom-link.png`;
				break;

			case 4:
				return `/assets/images/uninterrupted.png`;
				break;

			default:
				return `/assets/images/joinImage.png`;
				break;
		}
	};

	return (
		<>
			<Head>
				<title>Access world-class industry experts on Zedintro</title>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta name='theme-color' content='#000000' />
				<meta
					name='Zedintro'
					content='Web site created using create-react-app'
				/>
				<meta
					name='title'
					property='og:title'
					content='Find Industry Experts on Zedintro'
				/>
				<meta name='type' property='og:type' content='website' />
				<meta
					name='description'
					property='og:description'
					content='Access world-class industry experts at your convenience with ZedIntro. Our platform connects career and business professionals with top-notch mentors, offering valuable insights and guidance. Book time slots, reschedule if needed, and experience a simplified process through our user-friendly website and supportive community.'
				/>
				<meta
					name='image'
					property='og:image'
					content='https://ibb.co/YDnkn0G'
				/>
				<meta name='url' property='og:url' content='https://zedintro.com/' />
			</Head>

			<main className=''>
				<div className='min-h-screen w-full relative overflow-hidden hero-page flex items-center justify-center'>
					<div className='xl:mt-52 xl:px-0 px-10 md:mt-40 mt-40 m-auto max-w-[1240px]'>
						<div className='flex items-center justify-center relative z-20'>
							<div className='flex bg-[#E7E7E7] sm:text-sm text-xs rounded-3xl sm:p-1 p-0.5'>
								<button className='py-1.5 px-5 bg-[#01988E] text-white rounded-3xl'>
									<a href='/'>Experts</a>
								</button>
								<button className='py-1.5 px-5 rounded-3xl'>
									<a href='/client'>Client</a>
								</button>
							</div>
						</div>

						<div className='font-bold text-black mt-10 md:mt-6'>
							<h1 className='xl:text-[6rem] md:text-[4.5rem] sm:text-[4rem] text-[2.5rem] leading-[1.1] text-center max-w-[65rem] m-auto hero-text relative z-20'>
								Give value and get paid for your time too!
							</h1>
						</div>

						<p className='text-center text-sm sm:text-base md:text-xl max-w-[50rem] m-auto my-5'>
							ZedIntro gives you an opportunity to share your knowledge with
							clients who needs it and you get paid for your time
						</p>

						<div className='flex items-center justify-center'>
							<Link href='https://app.zedintro.com/signup/expert'>
								<button className='sm:py-3 py-2 sm:px-8 px-5 bg-[#270058] text-white rounded-lg shadow-md mx-auto border-0 inline-block'>
									Create your free account
								</button>
							</Link>
						</div>
					</div>

					<div className='absolute bgIcons -md:top-10 top-10 -sm:right-52 -right-40 md:h-64 sm:h-40 h-32 md:w-96 sm:w-80 w-64 rounded-full z-10 bg-[#FDBC05]'></div>

					<div className='absolute bgIcons sm:top-28 top-20 z-10 bg-[#01CBBE] left-3 sm:left-10 md:left-16 md:h-24 sm:h-16 h-12 md:w-36 sm:w-32 w-24 rounded-2xl'></div>

					<div className='absolute bgIcons md:bottom-12 sm:bottom-8 bottom-4 z-10 bg-[#D7BAFF] md:right-16 sm:right-10 right-4 md:h-24 sm:h-16 h-12 md:w-36 sm:w-32 w-24 rounded-2xl'></div>

					<div className='absolute bgIcons -bottom-20 -lg:bottom-48 sm:-bottom-24 z-10 bg-[#8FA8FD] -left-24 md:h-56 sm:h-48 h-36 md:w-96 sm:w-72 w-60 rounded-full'></div>
				</div>

				<div className='bg-[#8FA8FD] border-2 border-[#8FA8FD] text-center py-10 pb-16 xl:px-0 md:px-10 px-6'>
					<h2 className='sm:text-3xl text-2xl font-semibold my-2'>
						Join these experts that use Zedintro
					</h2>

					<p className='font-normal'>
						Join these seasoned experts, from various walks of life, and leave
						an impact in peoples lives while earning
					</p>

					<div className='m-auto max-w-[640px] mb-16 mt-5 flex flex-wrap sm:space-x-4 space-x-2 items-center justify-center'>
						<button className='sm:py-2 py-1.5 sm:px-5 px-3 text-sm sm:text-base border-b-2 mt-6 font-semibold border-white text-white'>
							FRONTEND
						</button>
						<button className='sm:py-2 py-1.5 sm:px-5 px-3 text-sm sm:text-base border-b-2 mt-6 font-semibold border-black'>
							FITNESS
						</button>
						<button className='sm:py-2 py-1.5 sm:px-5 px-3 text-sm sm:text-base border-b-2 mt-6 font-semibold border-black'>
							STYLE & BEAUTY
						</button>
						<button className='sm:py-2 py-1.5 sm:px-5 px-3 text-sm sm:text-base border-b-2 mt-6 font-semibold border-black'>
							HOME DECOR
						</button>
						<button className='sm:py-2 py-1.5 sm:px-5 px-3 text-sm sm:text-base border-b-2 mt-6 font-semibold border-black'>
							CAREER & BUSINESS
						</button>
						<button className='sm:py-2 py-1.5 sm:px-5 px-3 text-sm sm:text-base border-b-2 mt-6 font-semibold border-black'>
							HEALTH
						</button>
						<button className='sm:py-2 py-1.5 sm:px-5 px-3 text-sm sm:text-base border-b-2 mt-6 font-semibold border-black'>
							MARKETING
						</button>
					</div>

					<div className='m-auto max-w-[1240px] min-h-4'>
						<ExpertsCarousel />
						<Link href='https://app.zedintro.com/signup/expert'>
							<button className='bg-[#270058] text-sm font-medium text-white py-2.5 px-6 rounded-lg mt-16'>
								Create your own account
							</button>
						</Link>
					</div>
				</div>

				<div className='py-28'>
					<div className='m-auto max-w-[1240px] bg-[#F9F5FF] py-8 xl:px-24 md:px-10 px-6 rounded-md'>
						<h2 className='sm:text-3xl text-2xl font-semibold my-2 text-center'>
							Join Zedintro as an expert and enjoy many benefits
						</h2>

						<div className='py-12 pt-10 lg:flex lg:items-center'>
							<div className='md:max-w-[28rem] m-auto w-full transition-all duration-500 fade-in'>
								<Image
									src={currentDisplay()}
									alt={'Find Industry Experts on Zedintro.'}
									width={100}
									height={100}
									className='w-full h-full transition-all'
									unoptimized
								/>
							</div>

							<div className='grow mt-12 lg:mt-0 lg:pl-24'>
								<ul className='flex flex-col space-y-6'>
									<li>
										<div
											className='flex items-center justify-between cursor-pointer'
											onClick={() => handleAccordion(1)}>
											<h3
												className={`font-semi text-lg sm:text-xl ${
													accordion === 1 ? ' font-semibold text-[#270058]' : ''
												}`}>
												Start earning for your time
											</h3>
											<FiChevronRight
												className={`font-semi text-lg sm:text-xl transform transition-transform duration-500 ${
													accordion === 1 ? 'rotate-90' : 'rotate-0'
												}`}
											/>
										</div>
										<p
											className={`overflow-hidden ${
												accordion === 1 ? 'h-full mt-3' : 'h-0'
											}`}>
											Make money for that valuable knowledge you have gathered
											over the years.
										</p>
									</li>

									<li>
										<div
											className='flex items-center justify-between cursor-pointer'
											onClick={() => handleAccordion(2)}>
											<h3
												className={`font-semi text-lg sm:text-xl ${
													accordion === 2 ? ' font-semibold text-[#270058]' : ''
												}`}>
												Set your own price and availability
											</h3>
											<FiChevronRight
												className={`font-semi text-lg sm:text-xl transform transition-transform duration-500 ${
													accordion === 2 ? 'rotate-90' : 'rotate-0'
												}`}
											/>
										</div>
										<p
											className={`overflow-hidden ${
												accordion === 2 ? 'h-full mt-3' : 'h-0'
											}`}>
											State when you would be available for calls and how much
											you think your 15 minutes are worth
										</p>
									</li>

									<li>
										<div
											className='flex items-center justify-between cursor-pointer'
											onClick={() => handleAccordion(3)}>
											<h3
												className={`font-semi text-lg sm:text-xl ${
													accordion === 3 ? ' font-semibold text-[#270058]' : ''
												}`}>
												Get a custom link to share
											</h3>
											<FiChevronRight
												className={`font-semi text-lg sm:text-xl transform transition-transform duration-500 ${
													accordion === 3 ? 'rotate-90' : 'rotate-0'
												}`}
											/>
										</div>
										<p
											className={`overflow-hidden ${
												accordion === 3 ? 'h-full mt-3' : 'h-0'
											}`}>
											Add a username and get a link you can share with your
											audience on all your social platforms and sites
										</p>
									</li>

									<li>
										<div
											className='flex items-center justify-between cursor-pointer'
											onClick={() => handleAccordion(4)}>
											<h3
												className={`font-semi text-lg sm:text-xl ${
													accordion === 4 ? ' font-semibold text-[#270058]' : ''
												}`}>
												Have uninterrupted 1:1 calls
											</h3>
											<FiChevronRight
												className={`font-semi text-lg sm:text-xl transform transition-transform duration-500 ${
													accordion === 4 ? 'rotate-90' : 'rotate-0'
												}`}
											/>
										</div>
										<p
											className={`overflow-hidden ${
												accordion === 4 ? 'h-full mt-3' : 'h-0'
											}`}>
											Don’t worry, only you and who booked you can join a call,
											no unwanted guests.
										</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div
					className='bg-[#270058] text-white sm:py-16 py-12 xl:px-0 md:px-10 px-6 relative md:!pb-[10rem]'
					ref={sectionRef}>
					<h2 className='sm:text-4xl text-2xl font-semibold mb-2 text-center'>
						Start earning in 4 easy steps
					</h2>

					<p className='sm:text-center font-light'>
						The process of becoming an expert on ZedIntro has been simplified in
						4 easy steps
					</p>

					{/* <div className="md:hidden pb-12 md:pb-0">
            <EasyStepCarousel />
          </div> */}

					<div className='bg-white m-auto max-w-[1240px] shadow-md mt-[4rem] rounded-xl md:h-[36rem] flex md:flex md:flex-row flex-col-reverse md:items-center sm:p-8 p-5 sticky sm:top-[8rem] top-[11rem]'>
						<div className='md:w-[30rem] text-black'>
							<LuUser2 className='sm:text-[5.5rem] text-5xl font-light' />

							<h3 className='font-semibold sm:text-2xl text-lg mt-4 mb-1'>
								Sign up as an expert on ZedIntro
							</h3>

							<p className='font-light'>
								Easily sign up with your email or with google.
							</p>
						</div>

						<div className='grow h-full sm:py-8 py-3 sm:px-4 px-2'>
							<div className='h-full'>
								<Image
									src={`/assets/images/signUp.png`}
									width={100}
									height={100}
									className='h-full w-full'
									alt='sign up image'
								/>
							</div>
						</div>
					</div>

					<div className='bg-white m-auto max-w-[1240px] shadow-md mt-[10rem] rounded-xl md:h-[36rem] flex md:flex md:flex-row flex-col-reverse md:items-center sm:p-8 p-5 z-10 sticky sm:top-[5rem] top-[9rem]'>
						<div className='md:w-[30rem] text-black'>
							<MdOutlineCalendarMonth className='sm:text-[5.5rem] text-5xl font-light' />

							<h3 className='font-semibold sm:text-2xl text-lg mt-4 mb-1'>
								Set your available time
							</h3>

							<p className='font-light max-w-[15rem]'>
								Set your availability and get booked on your available time.
							</p>
						</div>

						<div className='grow h-full sm:py-8 py-3 sm:px-4 px-2'>
							<div className='h-full'>
								<Image
									src={`/assets/images/availability.png`}
									width={100}
									height={100}
									className='h-full w-full'
									alt='availability image'
								/>
							</div>
						</div>
					</div>

					<div className='bg-white m-auto max-w-[1240px] shadow-md mt-[10rem] rounded-xl md:h-[36rem] flex md:flex-row flex-col-reverse md:items-center sm:p-8 p-5 card z-30 sticky sm:top-[2rem] top-[5rem]'>
						<div className='md:w-[30rem] text-black'>
							<AiOutlineDollar className='sm:text-[5.5rem] text-5xl font-light' />

							<h3 className='font-semibold sm:text-2xl text-lg mt-4 mb-1'>
								Set your call fee and add payment details
							</h3>

							<p className='font-light'>
								Add your payment details and set your call fee
							</p>
						</div>

						<div className='grow h-full sm:py-8 py-3 sm:px-4 px-2'>
							<div className='h-full'>
								<Image
									src={`/assets/images/price.png`}
									width={100}
									height={100}
									className='h-full w-full'
									alt='payment image'
								/>
							</div>
						</div>
					</div>

					<div className='bg-white m-auto max-w-[1240px] shadow-md mt-[10rem] rounded-xl md:h-[36rem] flex md:flex-row flex-col-reverse md:items-center sm:p-8 p-5 card z-40 sticky sm:top-[-1rem] top-[3.8rem]'>
						<div className='md:w-[30rem] text-black'>
							<FiPhone className='sm:text-[5.5rem] text-5xl font-light' />

							<h3 className='font-semibold sm:text-2xl text-lg mt-4 mb-1'>
								Get booked and earn for your time
							</h3>

							<p className='font-light max-w-[25rem]'>
								Get millions of clients who pay for your time and knowledge
							</p>
						</div>

						<div className='grow h-full sm:py-8 py-3 sm:px-4 px-2'>
							<div className='h-full'>
								<Image
									src={`/assets/images/phone.png`}
									width={100}
									height={100}
									className='h-full w-full'
									alt='booked image'
								/>
							</div>
						</div>
					</div>

					<div className='h-[12rem]'></div>
				</div>

				<div className='bg-white m-auto max-w-[1240px] py-20 xl:px-0 md:px-10 px-6'>
					<h2 className='sm:text-4xl text-2xl font-semibold mb-2'>
						What experts frequently ask
					</h2>

					<ul className='py-4 flex flex-col space-y-6'>
						<li className='bg-[#F9F5FF] px-4 min-h-[4.5rem] py-4 flex flex-col justify-center shadow rounded-xl faq-section'>
							<div
								className='flex items-center justify-between py-0'
								onClick={() => handleFAQ(1)}>
								<h3 className='font-semi text-lg sm:text-xl my-0 p-0'>
									How do I earn as an expert on ZedIntro?
								</h3>
								<FiChevronUp
									className={`md:text-4xl text-2xl my-0 p-0 transform transition-transform duration-500 ${
										faq === 1 ? 'rotate-180' : 'rotate-0'
									}`}
								/>
							</div>
							<p
								className={`overflow-hidden text-sm mt-2 ${
									faq === 1 ? 'h-full mt-3' : 'h-0'
								}`}>
								Earn as an expert on ZedIntro when you set your call fee, share
								your profile link, get booked for a call and get paid.
							</p>
						</li>

						<li className='bg-[#F7F7FA] px-4 min-h-[4.5rem] py-4 flex flex-col justify-center shadow rounded-xl faq-section'>
							<div
								className='flex items-center justify-between py-0'
								onClick={() => handleFAQ(2)}>
								<h3 className='font-semi text-lg sm:text-xl my-0 p-0'>
									How do I earn as an expert on ZedIntro?
								</h3>
								<FiChevronUp
									className={`md:text-4xl text-2xl my-0 p-0 transform transition-transform duration-500 ${
										faq === 2 ? 'rotate-180' : 'rotate-0'
									}`}
								/>
							</div>
							<p
								className={`overflow-hidden text-sm mt-2 ${
									faq === 2 ? 'h-full mt-3' : 'h-0'
								}`}>
								Earn as an expert on ZedIntro when you set your call fee, share
								your profile link, get booked for a call and get paid.
							</p>
						</li>

						<li className='bg-[#F7F7FA] px-4 min-h-[4.5rem] py-4 flex flex-col justify-center shadow rounded-xl faq-section'>
							<div
								className='flex items-center justify-between py-0'
								onClick={() => handleFAQ(3)}>
								<h3 className='font-semi text-lg sm:text-xl my-0 p-0'>
									How do I earn as an expert on ZedIntro?
								</h3>
								<FiChevronUp
									className={`md:text-4xl text-2xl my-0 p-0 transform transition-transform duration-500 ${
										faq === 3 ? 'rotate-180' : 'rotate-0'
									}`}
								/>
							</div>
							<p
								className={`overflow-hidden text-sm mt-2 ${
									faq === 3 ? 'h-full mt-3' : 'h-0'
								}`}>
								Earn as an expert on ZedIntro when you set your call fee, share
								your profile link, get booked for a call and get paid.
							</p>
						</li>
					</ul>
				</div>

				<div className='h-[30rem] mb-24 relative'>
					<Image
						src={`/assets/images/experience.png`}
						width={100}
						height={100}
						className='h-full w-full object-cover'
						alt='experience image'
					/>

					<div className='absolute top-0 left-0 w-full h-full flex items-center justify-center text-white flex-col xl:px-0 md:px-10 px-6'>
						<h2 className='sm:text-4xl text-2xl font-semibold max-w-[65rem] text-center'>
							“I enjoy sharing knowledge and impacting people with all I’ve been
							able to learn during my years of experience”
						</h2>
						<Link href='https://app.zedintro.com/signup/expert'>
							<button className='bg-white text-sm font-medium text-[#270058] py-2.5 px-6 rounded-lg mt-10'>
								Become An Expert
							</button>
						</Link>
					</div>
				</div>
			</main>
		</>
	);
}
