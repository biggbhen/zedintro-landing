'use client';
import React, { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { MdOutlineClose } from 'react-icons/md';
import Link from 'next/link';
// import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';

type Props = {
	toggle: boolean;
	handleToggle: () => void;
};

const SideBar: React.FC<Props> = ({ toggle, handleToggle }) => {
	const [login, setLogin] = useState('');
	const [signup, setSignup] = useState('');
	const pathname = usePathname();

	useEffect(() => {
		// Perform pathname check and any client-side actions within useEffect
		if (pathname.includes('client')) {
			// console.log('Pathname contains "client"');
			setSignup('https://app.zedintro.com/signup/user');
			setLogin('https://app.zedintro.com/login/user');
		} else {
			setSignup('https://app.zedintro.com/signup/expert');
			setLogin('https://app.zedintro.com/login/expert');
		}
	}, [pathname]);

	return (
		<div>
			<Transition.Root show={toggle} as={Fragment}>
				<Dialog as='div' className='relative z-40' onClose={handleToggle}>
					<Transition.Child
						as={Fragment}
						enter='ease-in-out duration-500'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in-out duration-500'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'>
						<div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
					</Transition.Child>

					<div className='fixed inset-0 overflow-hidden'>
						<div className='absolute inset-0 overflow-hidden'>
							<div className='pointer-events-none fixed inset-y-0 left-0 flex max-w-full'>
								<Transition.Child
									as={Fragment}
									enter='transform transition ease-in-out duration-500 sm:duration-700'
									enterFrom='-translate-x-full'
									enterTo='translate-x-0'
									leave='transform transition ease-in-out duration-500 sm:duration-700'
									leaveFrom='translate-x-0'
									leaveTo='-translate-x-full'>
									<Dialog.Panel className='pointer-events-auto relative w-screen max-w-[18rem]'>
										<Transition.Child
											as={Fragment}
											enter='ease-in-out duration-500'
											enterFrom='opacity-0'
											enterTo='opacity-100'
											leave='ease-in-out duration-500'
											leaveFrom='opacity-100'
											leaveTo='opacity-0'>
											<div className='absolute left-0 top-0 w-full flex px-10 z-50'>
												<button
													type='button'
													className='relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white my-8'
													onClick={handleToggle}>
													<span className='absolute -inset-2.5' />
													<span className='sr-only'>Close panel</span>
													<MdOutlineClose
														className='text-black text-3xl'
														aria-hidden='true'
													/>
												</button>
											</div>
										</Transition.Child>
										<div className='flex h-full flex-col overflow-y-scroll bg-white shadow-xl'>
											<div className='relative flex-1 px-10 pt-24'>
												<ul className='flex flex-col space-y-10 text-[#270058]'>
													<li>
														<Link
															href='/about'
															className='hover:underline hover:underline-offset-8 hover:decoration-purple-500 rounded-md text-lg font-medium ml-auto'>
															About
														</Link>
													</li>

													<li>
														<Link
															href='/contact'
															className='hover:underline hover:underline-offset-8 hover:decoration-purple-500 rounded-md text-lg font-medium mr-auto'>
															Contact
														</Link>
													</li>
													<li>
														<Link href={signup}>
															<button className='sm:py-3 py-2 sm:px-8 px-5 bg-[#270058] text-white rounded-lg shadow-md mx-auto border-0 inline-block w-36'>
																Sign Up
															</button>
														</Link>
													</li>

													<li>
														<Link href={login}>
															<button className='sm:py-3 py-2 sm:px-8 px-5 border-2 border-[#270058] text-[#270058] rounded-lg shadow-md mx-auto inline-block w-36'>
																Login
															</button>
														</Link>
													</li>

													<li>
														<p className='text-black'>
															{pathname.includes('client')
																? 'Not a client? '
																: 'Not an expert? '}
															<Link
																href={
																	pathname.includes('client') ? '/' : '/client'
																}
																className='text-[#270058]'>
																Click here
															</Link>
														</p>
													</li>
												</ul>
											</div>
										</div>
									</Dialog.Panel>
								</Transition.Child>
							</div>
						</div>
					</div>
				</Dialog>
			</Transition.Root>
		</div>
	);
};

export default SideBar;
