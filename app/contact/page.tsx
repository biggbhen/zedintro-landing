import Image from 'next/image';
import Link from 'next/link';
import { FiChevronRight, FiChevronUp, FiLinkedin } from 'react-icons/fi';
import { LuUser2 } from 'react-icons/lu';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import searchIcon from '../../public/assets/icons/search-icon.svg';
import aboutHeroImg from '../../public/assets/images/about-hero-img.png';
import { MdOutlineMailOutline } from 'react-icons/md';

export default function Home() {
	return (
		<main className=''>
			<div className='w-full relative overflow-hidden'>
				<div className='about-hero-page py-20 xl:px-24 md:px-10 px-6'>
					<div className='mt-24 m-auto max-w-[1240px]'>
						<div className='mt-32'>
							<h5>Contact Us</h5>
							<h2 className='hero-text text-5xl font-semibold my-2'>
								Get in touch with us
							</h2>
							<p className='text-[#1E293B]'>
								Easily get in touch with us whenever you may need us.
							</p>
						</div>

						<div className='mt-12 flex flex-wrap gap-10 items-center justify-between'>
							<div className='flex items-center'>
								<div className='p-3 rounded-md bg-[#F9EDFF]'>
									<MdOutlineMailOutline className='text-3xl font-semibold' />
								</div>
								<div className='ml-3'>
									<h4 className='font-semibold'>Email Address</h4>
									<p className='font-light'>info@getintro.com</p>
								</div>
							</div>

							<div className='flex items-center'>
								<div className='p-3 rounded-md bg-[#F9EDFF]'>
									<MdOutlineMailOutline className='text-3xl font-semibold' />
								</div>
								<div className='ml-3'>
									<h4 className='font-semibold'>Phone Number</h4>
									<p className='font-light'>+234-812-654-8750</p>
								</div>
							</div>

							<div className='flex items-center'>
								<div className='p-3 rounded-md bg-[#F9EDFF]'>
									<MdOutlineMailOutline className='text-3xl font-semibold' />
								</div>
								<div className='ml-3'>
									<h4 className='font-semibold'>Location</h4>
									<p className='font-light'>
										7 Akin George Street, Obanikoro, Lagos.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='h-full pb-28 bg-[#FBF2FF] xl:px-24 md:px-10 px-6'>
					<form className='m-auto max-w-[1240px] flex flex-col space-y-6'>
						<div className='flex flex-col space-y-2'>
							<label className='text-sm' htmlFor='name'>
								Your Name
							</label>
							<input
								type='text'
								className='p-2 rounded-md border=0.5 border-[#D0D5DD]'
								name='name'
								id='name'
								placeholder='Enter your name'
							/>
						</div>

						<div className='flex flex-col space-y-2'>
							<label className='text-sm' htmlFor='name'>
								Your Email Address
							</label>
							<input
								type='text'
								className='p-2 rounded-md border=0.5 border-[#D0D5DD]'
								name='name'
								id='name'
								placeholder='Enter your email address'
							/>
						</div>

						<div className='flex flex-col space-y-2'>
							<label className='text-sm' htmlFor='name'>
								Your Phone Number
							</label>

							<input
								type='text'
								className='p-2 rounded-md border=0.5 border-[#D0D5DD]'
								name='name'
								id='name'
								placeholder='Enter your phone number'
							/>
						</div>

						<div className='flex flex-col space-y-2'>
							<label className='text-sm' htmlFor='message'>
								Your Message
							</label>

							<textarea
								name='message'
								className='p-2 rounded-md border=0.5 border-[#D0D5DD] min-h-[10rem]'
								id=''></textarea>
						</div>
					</form>
				</div>
			</div>
		</main>
	);
}
