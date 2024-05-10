import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
// import { useNavigate } from "react-router";
import profileIcon from '../../assets/icons/profile.svg';
import logoutIcon from '../../assets/icons/logout.svg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function classNames(...classes: string[]): string {
	return classes.filter(Boolean).join(' ');
}

type Props = {
	children: any;
	className?: string;
};

const ProfileDropdown: React.FC<Props> = ({ className, children }) => {
	const pathname = usePathname();

	return (
		<Menu as='div' className='relative inline-block text-left'>
			<div>
				<Menu.Button className='text-sm font-semibold text-gray-900'>
					{children}
				</Menu.Button>
			</div>

			<Transition
				as={Fragment}
				enter='transition ease-out duration-100'
				enterFrom='transform opacity-0 scale-95'
				enterTo='transform opacity-100 scale-100'
				leave='transition ease-in duration-75'
				leaveFrom='transform opacity-100 scale-100'
				leaveTo='transform opacity-0 scale-95'>
				<Menu.Items
					className={`absolute ${
						className ? className : 'right-0 mt-2'
					} z-10 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none min-w-[15rem]`}>
					<div className='py-2'>
						<Menu.Item>
							{({ active }) => (
								<Link
									href={
										pathname && pathname === '/client'
											? 'https://app.zedintro.com/login/user'
											: 'https://app.zedintro.com/login/expert'
									}
									className={classNames(
										active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
										'block px-4 py-2 text-sm cursor-pointer'
									)}>
									Login
								</Link>
							)}
						</Menu.Item>

						<Menu.Item>
							{({ active }) => (
								<Link
									href={
										pathname && pathname === '/client'
											? 'https://app.zedintro.com/signup/user'
											: 'https://app.zedintro.com/signup/expert'
									}
									className={classNames(
										active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
										'px-4 py-2 text-sm cursor-pointer flex items-center gap-3'
									)}>
									Sign Up
								</Link>
							)}
						</Menu.Item>

						<Menu.Item>
							{({ active }) => (
								<Link
									href={pathname && pathname === '/client' ? '/' : '/client'}
									className={classNames(
										active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
										'px-4 py-2 text-sm cursor-pointer flex items-center gap-2'
									)}>
									Not{' '}
									{pathname && pathname === '/client'
										? 'a client'
										: 'an expert'}
									?<span className='text-[#270058]'>Click here</span>
								</Link>
							)}
						</Menu.Item>
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
};

export default ProfileDropdown;
