'use client';
import Image from 'next/image';
import Link from 'next/link';
import {
	FiChevronRight,
	FiChevronUp,
	FiLinkedin,
	FiPhone,
	FiSearch,
} from 'react-icons/fi';
import { LuUser2 } from 'react-icons/lu';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import searchIcon from '../../public/assets/icons/search-icon.svg';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ExpertsCarousel from '../components/ExpertsCarousel';
import { AiOutlineDollar } from 'react-icons/ai';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import { BiChevronDown } from 'react-icons/bi';
import SelectMenu from '../components/SelectMenu';
import { searchOption } from '../components/SelectOptions';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
	const [searchParams, setSearchParams] = useState('');
	const [search, setSearch] = useState('');
	const router = useRouter();

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
			'.difference-section',
			{
				y: 100,
				opacity: 0,
			},
			{
				y: 0,
				opacity: 1,
				duration: 0.6,
				ease: 'power2.in',
				stagger: 0.4,
				scrollTrigger: {
					trigger: '.difference-section',
					start: 'top bottom',
					end: 'bottom top',
					toggleActions: 'play none none none',
				},
			}
		);
	}, []);

	const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// dispatch(searchText(search));
		router.push(`/search?search=${searchParams}&text=${search}`, {
			scroll: false,
		});
	};

	const handleFilterFields = (item: any) => {
		setSearchParams(item.option);
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setSearch(value);
	};

	return (
		<>
			<Head>
				<title>Access world-class industry experts on Zedintro</title>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta name='theme-color' content='#000000' />
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
					content='https://ibb.co/87zB7d7'
				/>
				<meta name='url' property='og:url' content='https://zedintro.com/' />
			</Head>

			<main className=''>
				<div className='min-h-screen w-full relative overflow-hidden hero-client-page'>
					<div className='xl:mt-52 xl:px-0 px-10 md:mt-40 mt-40 m-auto max-w-[1240px]'>
						<div className='flex items-center justify-center relative z-20'>
							<div className='flex bg-[#E7E7E7] sm:text-sm text-xs rounded-3xl sm:p-1 p-0.5'>
								<button className='py-1.5 px-5 rounded-3xl'>
									<a href='/'>Experts</a>
								</button>
								<button className='py-1.5 px-5 rounded-3xl bg-[#01988E] text-white'>
									<a href='/client'>Client</a>
								</button>
							</div>
						</div>

						<div className='font-bold text-black mt-10 md:mt-6'>
							<h1 className='xl:text-[6rem] md:text-[4.5rem] sm:text-[4rem] text-[2.5rem] leading-[1.1] text-center max-w-[65rem] m-auto hero-text relative z-20'>
								Connect with quality industry experts
							</h1>
						</div>

						<p className='text-center text-sm sm:text-base md:text-xl max-w-[50rem] m-auto my-5'>
							Zedintro gives you <b>access to industry experts</b> for
							mentorship and guidance. Schedule sessions at your convenience,
							make easy payments, and <b>choose from vetted experts.</b>
						</p>

						<div className='flex items-center justify-center'>
							<button className='sm:py-3 py-2 sm:px-8 px-5 bg-[#270058] text-white rounded-lg shadow-md mx-auto border-0 inline-block'>
								<Link href='https://app.zedintro.com/signup/user'>
									Create your free account
								</Link>
							</button>
						</div>
					</div>

					<div className='absolute bgIcons -sm:top-10 top-10 -right-12 md:h-64 sm:h-52 h-32 md:w-40 w-32 rounded-2xl z-10 bg-[#FDBC05]'></div>

					<div className='absolute bgIcons -md:top-4 sm:top-0 top-12 z-10 bg-[#01CBBE] -md:left-4 left-0 md:h-56 sm:h-40 h-24 md:w-72 sm:w-40 w-20 rounded-r-2xl'></div>

					<div className='absolute bgIcons sm:bottom-16 bottom-6 z-10 bg-[#748DE0] sm:right-16 right-6 md:h-28 sm:h-16 h-12 md:w-44 sm:w-32 w-24 rounded-2xl'></div>

					<div className='absolute bgIcons sm:-bottom-24 -bottom-12 z-10 bg-[#F9EDFF] -left-24 md:h-56 sm:h-48 h-28 md:w-96 sm:w-72 w-60 rounded-full'></div>
				</div>

				<div className='bg-[#F9EDFF] text-center pt-24 pb-28 xl:px-0 md:px-10 px-6'>
					<h2 className='sm:text-4xl text-2xl font-semibold mt-0 mb-2'>
						A collection of industry experts on Zedintro
					</h2>

					<p className='font-normal text-sm sm:text-base'>
						Search for experts tailored to your needs
					</p>

					<form
						className='text-center mx-auto w-full lg:w-10/12 mt-8 relative'
						onSubmit={handleSearch}>
						<div className='sm:rounded-xl rounded-lg max-w-5xl w-full m-auto flex bg-white shadow-md relative'>
							<div className='bg-[#EDDBFF]/70 sm:rounded-l-xl rounded-l-lg flex items-center'>
								<SelectMenu
									options={searchOption}
									className={'top-12 min-w-[10rem]'}
									optionField='searchField'
									handleSelect={handleFilterFields}>
									<div className='space-x-2 px-4 text-sm flex justify-center items-center text-bgPurple'>
										<p>{searchParams === 'skill' ? 'Skill' : 'Name'}</p>
										<BiChevronDown className='text-xl' />
									</div>
								</SelectMenu>
							</div>

							<input
								type='text'
								name='industry'
								placeholder={
									searchParams === 'skill'
										? 'example: marketing, architecture'
										: 'example: Johnson, Anna'
								}
								className='pl-4 bg-white py-2 sm:py-3 lg:py-4 grow outline-none border-none placeholder:text-sm sm:rounded-r-xl rounded-r-lg'
								value={search}
								onChange={handleChange}
							/>

							<button className='flex items-center justify-center pr-5 text-right sm:rounded-r-xl rounded-r-lg absolute right-0 h-full'>
								<FiSearch className='text-gray-500 lg:text-xl sm:text-lg text-base' />
							</button>
						</div>
					</form>

					<div className='m-auto max-w-[640px] my-10 flex flex-wrap sm:space-x-4 space-x-2 items-center justify-center'></div>

					<div className='m-auto max-w-[1240px] min-h-4'>
						<ExpertsCarousel />
					</div>
				</div>

				<div className='sm:py-20 py-12'>
					<div className='m-auto max-w-[1240px] md:py-8 rounded-md'>
						<h2 className='sm:text-4xl text-2xl font-semibold my-2 text-center'>
							What makes Zedintro different?
						</h2>

						<div className='sm:flex sm:space-x-10 justify-between md:mt-24 mt-12 xl:px-0 md:px-10 px-6'>
							<div className='lg:w-1/3 sm:w-1/2 w-full lg:max-w-[24rem] flex flex-col'>
								<div className='rounded-xl difference-section shadow-md p-8 my-6 h-1/2 bg-[#934CFD] text-white'>
									<h2 className='text-4xl font-bold mb-5'>
										Unmatched expertise
									</h2>
									<p>
										Find experts on Zedintro from various walks of life. Browse
										through our verified experts and be sure that you are
										talking to your preferred expert. When you engage with them
										through ZedIntro, you can be confident that you’re learning
										from the best.
									</p>
								</div>

								<div className='border-2 border-[#FFB4A9] rounded-xl difference-section shadow-md p-8 my-6 h-1/2'>
									<h2 className='text-4xl font-bold mb-5 text-[#410001]'>
										Transparent pricing
									</h2>
									<p className='text-[#333333]'>
										Find experts on Zedintro from various walks of life. Browse
										through our verified experts and be sure that you are
										talking to your preferred expert. When you engage with them
										through ZedIntro, you can be confident that you’re learning
										from the best.
									</p>
								</div>

								<div className='rounded-xl difference-section shadow-md p-8 my-6 h-1/2 bg-[#FFEFD2] lg:hidden'>
									<h2 className='text-4xl font-bold mb-5 text-[#333333]'>
										Confidential and secure
									</h2>
									<p className='text-[#333333]'>
										At Zedintro, we prioritize your privacy and security. All
										interactions and conversations are kept strictly
										confidential, ensuring a safe environment for meaningful
										discussions.
									</p>
								</div>
							</div>

							<div className='lg:w-1/3 sm:w-1/2 w-full lg:max-w-[24rem] flex flex-col relative sm:-translate-y-12'>
								<div className='border-2 border-[#8FA8FD] rounded-xl difference-section shadow-md p-8 my-6 h-1/2'>
									<h2 className='text-4xl font-bold mb-5 text-[#405AA9]'>
										Tailored to your schedule
									</h2>
									<p className='text-[#333333]'>
										Our flexible scheduling is designed to accommodate your busy
										schedule. Book sessions at your convenience, and make the
										most out of your time with industry experts.
									</p>
								</div>

								<div className='rounded-xl difference-section shadow-md p-8 my-6 h-1/2 bg-[#CCFFFB] text-[#00332F]'>
									<h2 className='text-4xl font-bold mb-5'>
										Customized Choices
									</h2>
									<p className='text-[#333333]'>
										Our services range from consultations to mentoring to
										training, depending on the specific needs of your career or
										business
									</p>
								</div>

								<div className='border-2 border-[#AB73FF] rounded-xl difference-section shadow-md p-8 my-6 h-1/2 lg:hidden'>
									<h2 className='text-4xl font-bold mb-5 text-[#41008B]'>
										Pay in African currencies
									</h2>
									<p className='text-[#333333]'>
										Although experts charge in USD, our African audience can
										change the currency to any of our currently available
										currencies (NGN, GHS, UGX, ZAR, TZS and KES) and pay easily
										using their local cards and other payment methods available.
									</p>
								</div>
							</div>

							<div className='lg:w-1/3 sm:w-1/2 w-full lg:max-w-[24rem] hidden lg:flex flex-col sm:-translate-y-24'>
								<div className='rounded-xl difference-section shadow-md p-8 my-6 h-1/2 bg-[#FFEFD2]'>
									<h2 className='text-4xl font-bold mb-5 text-[#333333]'>
										Confidential and secure
									</h2>
									<p className='text-[#333333]'>
										At Zedintro, we prioritize your privacy and security. All
										interactions and conversations are kept strictly
										confidential, ensuring a safe environment for meaningful
										discussions.
									</p>
								</div>

								<div className='border-2 border-[#AB73FF] rounded-xl difference-section shadow-md p-8 my-6 h-1/2'>
									<h2 className='text-4xl font-bold mb-5 text-[#41008B]'>
										Pay in African currencies
									</h2>
									<p className='text-[#333333]'>
										Although experts charge in USD, our African audience can
										change the currency to any of our currently available
										currencies (NGN, GHS, UGX, ZAR, TZS and KES) and pay easily
										using their local cards and other payment methods available.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='text-white pb-16'>
					<div className='m-auto max-w-[1240px] text-black rounded-xl p-10 py-12 bg-[#EEF0FF]'>
						<h2 className='sm:text-4xl text-2xl font-semibold sm:text-center'>
							Get all the information you need in 4 Easy Steps
						</h2>

						<p className='sm:text-center font-normal max-w-[39rem] m-auto my-5'>
							At ZedIntro, we&apos;re committed to helping you access the
							knowledge and expertise of industry leaders. Meet with an industry
							expert for 30 minutes to 1 hour.
						</p>

						<div className='mb-5 rounded-xl relative'>
							<div className='rounded-xl bg-white shadow-md md:flex items-center md:p-8 p-5 mt-8 sticky sm:top-[6rem] top-[12rem] z-10'>
								<div className='md:w-[30rem] text-black'>
									<div className='h-12 sm:h-20 w-12 sm:w-20'>
										<Image priority src={searchIcon} alt='search expert icon' />
									</div>

									<h3 className='font-semibold text-2xl mt-4 mb-1'>
										Search from a selection of experts.
									</h3>

									<p className='font-light max-w-[16rem]'>
										Decide on an expert based on your industry sector.
									</p>
								</div>

								<div className='grow h-full md:py-8 py-4 md:px-4 px-3'>
									<div className='h-full'>
										<Image
											src={`/assets/images/search-expert.png`}
											width={100}
											height={100}
											className='h-full w-full'
											alt='sign up'
										/>
									</div>
								</div>
							</div>

							<div className='rounded-xl bg-white shadow-md md:flex items-center md:p-8 p-5 mt-[10rem] sticky sm:top-[5rem] top-[10rem] z-20'>
								<div className='md:w-[30rem] text-black'>
									<div className='h-12 sm:h-20 w-12 sm:w-20'>
										<LuUser2 className='sm:text-[5.5rem] text-5xl font-light' />
									</div>

									<h3 className='font-semibold text-2xl mt-4 mb-1'>
										Book a slot with an expert.
									</h3>

									<p className='font-light'>
										Make sure to choose your why; consultation, training, or
										mentorship.
									</p>
								</div>

								<div className='grow h-full md:py-8 py-4 md:px-4 px-3'>
									<div className='h-full'>
										<Image
											src={`/assets/images/book-expert.png`}
											width={100}
											height={100}
											className='h-full w-full'
											alt='sign up'
										/>
									</div>
								</div>
							</div>

							<div className='rounded-xl bg-white shadow-md md:flex items-center md:p-8 p-5 mt-[10rem] sticky sm:top-[2rem] top-[10rem] z-30'>
								<div className='md:w-[30rem] text-black'>
									<div className='h-12 sm:h-20 w-12 sm:w-20'>
										<AiOutlineDollar className='sm:text-[5.5rem] text-5xl font-light' />
									</div>

									<h3 className='font-semibold text-2xl mt-4 mb-1'>
										Confirm payment.
									</h3>

									<p className='font-light'>
										This may vary depending on the duration preferred for the
										call.
									</p>
								</div>

								<div className='grow h-full md:py-8 py-4 md:px-4 px-3'>
									<div className='h-full'>
										<Image
											src={`/assets/images/call-approved.png`}
											width={100}
											height={100}
											className='h-full w-full'
											alt='sign up'
										/>
									</div>
								</div>
							</div>

							<div className='rounded-xl bg-white shadow-md md:flex items-center md:p-8 p-5 mt-[10rem] sticky sm:top-[-1rem] top-[6.5rem] z-40'>
								<div className='md:w-[30rem] text-black'>
									<div className='h-12 sm:h-20 w-12 sm:w-20'>
										<FiPhone className='sm:text-6xl text-5xl font-light' />
									</div>

									<h3 className='font-semibold text-2xl mt-4 mb-1'>
										Jump on the call.
									</h3>

									<p className='font-light'>
										Enjoy a rich and insightful conversation with your selected
										expert.
									</p>
								</div>

								<div className='grow h-full md:py-8 py-4 md:px-4 px-3'>
									<div className='h-full'>
										<Image
											src={`/assets/images/phone.png`}
											width={100}
											height={100}
											className='h-full w-full'
											alt='sign up'
										/>
									</div>
								</div>
							</div>

							<div className='h-[15rem]'></div>
						</div>
					</div>
				</div>

				<div className='bg-white m-auto max-w-[1240px] pb-20 mt-4'>
					<div className='flex md:flex-row flex-col-reverse items-center justify-between xl:px-0 md:px-10 px-6'>
						<div className='md:w-1/2 w-full animate-left mt-6 md:mt-0 md:max-w-[33rem]'>
							<h2 className='sm:text-4xl text-2xl font-bold my-0'>
								Abundant opportunities, meaningful connections.
							</h2>

							<p className='my-5 text-[#1E293B]'>
								Get exclusive access to experienced professionals who will guide
								you towards success. Make less errors on your way to a thriving
								career and prosperous business.
							</p>

							<Link href='https://app.zedintro.com/search'>
								<button className='py-2.5 px-6 bg-[#270058] text-white rounded-lg shadow-md mx-auto border-0 inline-block'>
									Book a session
								</button>
							</Link>
						</div>

						<div className='md:w-1/2 w-full animate-right h-[27rem] overflow-hidden rounded-lg shadow-md'>
							<Image
								src={`/assets/images/opportunity.png`}
								width={100}
								height={100}
								className='h-full w-full object-cover'
								alt='sign up'
							/>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
