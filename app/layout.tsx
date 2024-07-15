import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from './components/NavBar';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Zed-intro',
	description:
		'Access world-class industry experts at your convenience with ZedIntro. Our platform connects career and business professionals with top-notch mentors, offering valuable insights and guidance. Book time slots, reschedule if needed, and experience a simplified process through our user-friendly website and supportive community.',
	icons: {
		icon: '/favicon.ico',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${inter.className} relative`}>
				<div className='fixed top-0 left-0 w-full z-30'>
					<NavBar />
				</div>

				<div>{children}</div>

				<div className='pt-12 pb-8 bg-[#270058] '>
					<div className='m-auto max-w-[1240px] lg:flex xl:px-0 md:px-10 px-6'>
						<div className='sm:flex justify-between grow'>
							<div className='max-w-[20rem] text-[#EAECF0]'>
								<h3 className='text-[28px] font-semibold'>
									<Link href='/'>Zedintro</Link>
								</h3>

								<p className='my-6 text-base'>
									Book world-class experts and get advice tailored just for you
								</p>

								<a href='https://app.zedintro.com/signup/expert'>
									<button className='py-2.5 px-5 mt-2 border border-white/50 rounded-lg'>
										Become an Expert
									</button>
								</a>
							</div>

							<div className='mt-10 sm:mt-0 w-fit justify-between sm:justify-start flex space-x-16'>
								<div className=''>
									<h4 className='text-[#98A2B3] mb-2'>Company</h4>
									<ul className='text-[#EAECF0] flex flex-col space-y-2'>
										<li>
											<a href='/about'>About</a>
										</li>
										<li>
											<a href='#'>Communities</a>
										</li>
										<li>
											<a href='/contact'>Contact</a>
										</li>
									</ul>
								</div>

								<div className=''>
									<h4 className='text-[#98A2B3] mb-2'>Product</h4>
									<ul className='text-[#EAECF0] flex flex-col space-y-2'>
										<li>
											<a href='#'>Help centre</a>
										</li>
										<li>
											<a href='#'>Support</a>
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className='text-white mt-10 lg:mt-0 lg:ml-16'>
							<form>
								<label htmlFor='newsLetter'>Stay up to date</label>

								<div className='flex space-x-4 mt-2'>
									<input
										type='text'
										name='newsLetter'
										id='newsLetter'
										className='border-0 py-2 text-sm sm:text-base sm:px-3 px-2 rounded shadow-md'
										placeholder='Enter your email'
									/>
									<button className='bg-[#6A25CA] h-full py-2 px-3 rounded text-sm sm:text-base'>
										Subscribe
									</button>
								</div>
							</form>
						</div>
					</div>
					<div className='border-t mt-6 border-[#475467]'></div>
					<div className=' py-2 m-auto max-w-[1240px] mt-10 flex sm:flex-row flex-col space-y-4 md:space-y-0 items-center justify-between text-[#98A2B3] text-sm xl:px-0 md:px-10 px-6'>
						<p>&copy; 2024 Get Intro. All rights reserved.</p>

						<div className=''>
							<ul className='flex space-x-4'>
								<li>Terms</li>
								<li>Privacy</li>
								<li>Cookies</li>
							</ul>
						</div>
					</div>
				</div>
			</body>
		</html>
	);
}
