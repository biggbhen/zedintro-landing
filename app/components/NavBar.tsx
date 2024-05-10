'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import SideBar from './SideBar';
import { MdMenu } from 'react-icons/md';
import ProfileDropdown from './ProfileDropdown';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

type Props = {};

const NavBar: React.FC<Props> = ({}) => {
	const [scrollPosition, setScrollPosition] = useState<number>(0);
	const [navView, setNavView] = useState<string>('top');
	const [open, setOpen] = useState<boolean>(false);
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			const currentPosition = window.scrollY;
			setScrollPosition(currentPosition);
			if (currentPosition < 76 && currentPosition < scrollPosition) {
				setNavView('top');
			} else if (currentPosition > scrollPosition || currentPosition < 56) {
				setNavView('down');
			} else {
				setNavView('up');
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [scrollPosition]);

	const handleSideBar = () => {
		setOpen(!open);
	};

	return (
		<div>
			<nav
				className={`w-full fixed top-0 bg-[#41008B66]/40 sm:bg-white/80 z-[70] backdrop-blur-md transition-all duration-100 ${
					navView === 'down' ? '-translate-y-full' : ''
				}`}>
				<div className='relative flex justify-between items-center h-24 sm:h-20 m-auto max-w-[1240px] xl:px-0 md:px-10 px-6 w-full text-white sm:text-black'>
					<div className='md:basis-1/3'>
						<button className='text-2xl sm:text-2xl font-bold w-auto flex items-center gap-3'>
							<div className=''>
								<Image
									src='/assets/icons/logo.svg'
									width={100}
									height={100}
									alt='zedintro'
									className='w-5 object-cover'
								/>
							</div>
							<a href='/'>
								<p>Zedintro</p>
							</a>
						</button>
					</div>

					<div className='sm:flex hidden -ml-2 sm:ml-0 md:basis-1/3'>
						<Link
							href='/about'
							className='hover:underline hover:underline-offset-8 hover:decoration-purple-500 px-3 py-2 rounded-md text-sm lg:text-base font-medium ml-auto'>
							About
						</Link>

						<Link
							href='/contact'
							className='px-3 py-2 hover:underline hover:underline-offset-8 hover:decoration-purple-500 rounded-md text-sm lg:text-base font-medium mr-auto'>
							Contact
						</Link>
					</div>

					<div className='sm:flex justify-end hidden md:basis-1/3'>
						<ProfileDropdown>
							<a
								href={`${
									pathname && pathname === '/client'
										? 'https://app.zedintro.com/login/user'
										: 'https://app.zedintro.com/login/expert'
								}`}
								className='py-3 px-8 bg-[#F9EDFF] text-textPurple text-sm font-semibold'>
								{pathname && pathname !== '/client'
									? 'Go to Expert dashboard'
									: 'Go to Client dashboard'}
							</a>
						</ProfileDropdown>
					</div>

					<MdMenu
						className='text-3xl cursor-pointer sm:hidden'
						onClick={handleSideBar}
					/>
				</div>
			</nav>
			<SideBar toggle={open} handleToggle={handleSideBar} />
		</div>
	);
};

export default NavBar;
