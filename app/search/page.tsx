'use client';
import React, {
	ChangeEvent,
	FormEvent,
	Fragment,
	MouseEvent,
	useEffect,
	useRef,
	useState,
} from 'react';
import { BiChevronDown } from 'react-icons/bi';
import SelectMenu from '../components/SelectMenu';
import { FiChevronDown, FiSearch, FiUser } from 'react-icons/fi';
import {
	orderOption,
	priceFromOption,
	priceToOption,
	searchOption,
} from '../components/SelectOptions';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Image from 'next/image';
import star from '../../public/assets/icons/star.svg';
import giftSvg from '../../public/assets/icons/giftSvg.svg';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';
import { Dialog, Transition } from '@headlessui/react';

type Props = {};
interface GiftRecipientData {
	email?: string;
	name?: string;
	// Add other properties if needed
}

const Page = (props: Props) => {
	const searchParams = useSearchParams();
	const searchValue = searchParams.get('search');
	const nameSearchValue = searchParams.get('text');
	const URL = process.env.NEXT_PUBLIC_API_URL;
	const cancelButtonRef = useRef(null);
	const router = useRouter();

	const [skip, setSkip] = useState(0);
	const [searchText, setSearchText] = useState('');
	const [profile, setProfile] = useState<any[any]>([]);
	const [giftRecipientData, setGiftRecipientData] = useState<GiftRecipientData>(
		{}
	);
	const [filterFields, setFilterFields] = useState({
		skill: '',
		priceFrom: '',
		priceTo: '',
		limit: '',
		orderBy: '',
		searchField: nameSearchValue ? nameSearchValue : 'name',
	});
	const [expertsData, setExpertsData] = useState<any[any]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [open, setOpen] = useState(false);

	const handleFilterFields = (item: any, field: any) => {
		setFilterFields({ ...filterFields, [field]: item.option });
	};

	useEffect(() => {
		const getExpertsFromUrl = async () => {
			try {
				const api = `${URL}/v1/experts/search?limit=10&skip=${skip}&orderBy=${
					filterFields.orderBy !== '' ? filterFields.orderBy : '-rating'
				}&${filterFields.skill}&name=${
					searchText !== '' ? searchText : filterFields.searchField
				}`;
				setLoading(true);
				const res = await axios.get(api);
				if (res.status && res.status === 200) {
					setExpertsData(res.data.data);
					setLoading(false);
					return res.data.data;
				} else {
					setLoading(false);
				}
			} catch (error) {
				setLoading(false);
				console.error(error);
			}
		};
		getExpertsFromUrl();
		// eslint-disable-next-line
	}, []);

	const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const api = `${URL}/v1/experts/search?limit=10&skip=${skip}&orderBy=${
				filterFields.orderBy !== '' ? filterFields.orderBy : '-rating'
			}&${filterFields.skill}&name=${
				searchText !== '' ? searchText : filterFields.searchField
			}`;
			setLoading(true);
			const res = await axios.get(api);
			if (res.status && res.status === 200) {
				setExpertsData(res.data.data);
				setLoading(false);
				return res.data.data;
			} else {
				setLoading(false);
			}
		} catch (error) {
			setLoading(false);
			console.error(error);
		}
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setSearchText(value);
	};

	const handlePageClick = (e: { selected: React.SetStateAction<number> }) => {
		setSkip(e.selected);
	};

	const giftModal = (expert: any) => {
		setProfile(expert);
		setOpen(true);
	};

	const handleGiftChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setGiftRecipientData((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleSetGiftRecipient = (
		e: MouseEvent<HTMLButtonElement>,
		expertId: number
	) => {
		e.preventDefault();
		// sessionStorage.setItem('giftInfo', JSON.stringify(giftState));
		router.push(
			`https://app.zedintro.com/gift/${expertId}?email=${giftRecipientData.email}&name=${giftRecipientData.name}`,
			{
				scroll: false,
			}
		);
	};

	return (
		<main className='searchresults  altNav min-h-[100vh] relative bg-[#EFEFEF] pt-[7rem] '>
			<div className='max-w-[1240px] xl:px-0 px-10 mx-auto'>
				<form className='' onSubmit={handleSearch}>
					<div className='sm:rounded-xl rounded-lg max-w-5xl w-full m-auto flex bg-white shadow-md relative'>
						<div className='bg-[#EDDBFF]/50 sm:rounded-l-xl rounded-l-lg flex items-center'>
							<SelectMenu
								options={searchOption}
								className={'top-12 min-w-[10rem]'}
								optionField='searchField'
								handleSelect={handleFilterFields}>
								<div className='space-x-2 px-4 text-sm flex justify-center items-center text-bgPurple'>
									<p>
										{filterFields.searchField === 'skill' ? 'Skill' : 'Name'}
									</p>
									<BiChevronDown className='text-xl' />
								</div>
							</SelectMenu>
						</div>

						<input
							type='text'
							name='industry'
							placeholder={
								filterFields.searchField === 'skill'
									? 'example: marketing, architecture'
									: 'example: Johnson, Anna'
							}
							className='pl-4 bg-white py-2 sm:py-3 lg:py-4 grow outline-none border-none placeholder:text-sm sm:rounded-r-xl rounded-r-lg'
							value={searchText}
							onChange={handleChange}
						/>

						<button className='flex items-center justify-center pr-5 text-right sm:rounded-r-xl rounded-r-lg absolute right-0 h-full'>
							<FiSearch className='text-gray-500 lg:text-xl sm:text-lg text-base' />
						</button>
					</div>

					<div className='mx-auto mt-4 flex flex-wrap space-x-2 sm:justify-center'>
						<SelectMenu
							options={priceFromOption}
							className={'w-16 top-14 right-6'}
							optionField='priceFrom'
							handleSelect={handleFilterFields}>
							<div className='bg-white border flex gap-4 justify-between items-center border-gray-200 min-w-[6.5rem] text-left font-normal lg:mx-3 text-xs sm:text-sm lg:text-base py-2 px-2 lg:px-3 rounded-md text-gray-500 shadow'>
								<p>
									{filterFields.priceFrom
										? filterFields.priceFrom
										: 'Price From'}
								</p>
								<FiChevronDown />
							</div>
						</SelectMenu>

						<SelectMenu
							options={priceToOption}
							className={'w-16 top-14 right-6'}
							handleSelect={handleFilterFields}
							optionField='priceTo'>
							<div className='bg-white border flex justify-between items-center border-gray-200 min-w-[6.5rem] text-left font-normal lg:mx-3 text-xs sm:text-sm lg:text-base py-2 px-2 lg:px-3 rounded-md text-gray-500 shadow'>
								<p>
									{filterFields.priceTo ? filterFields.priceTo : 'Price To'}
								</p>
								<FiChevronDown />
							</div>
						</SelectMenu>

						<SelectMenu
							options={orderOption}
							className={'w-32 top-14 right-6'}
							handleSelect={handleFilterFields}
							optionField='orderBy'>
							<div className='bg-white border flex justify-between items-center border-gray-200 min-w-[6.5rem] text-left font-normal lg:mx-3 text-xs sm:text-sm lg:text-base py-2 px-2 lg:px-3 rounded-md text-gray-500 shadow'>
								<p>
									{filterFields.orderBy ? filterFields.orderBy : 'Order By'}
								</p>
								<FiChevronDown />
							</div>
						</SelectMenu>
					</div>
				</form>
				<section className='sm:py-20 py-8 pb-24'>
					<div className='flex pt-10 pb-8'>
						{expertsData?.docs && (
							<p className='mr-auto'>
								{expertsData?.docs?.length} experts found
							</p>
						)}
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-auto container'>
						{loading === true ? (
							<>
								<div className='grid rounded-2xl shadow-sm px-4 py-6 bg-white text-neutral-400 mr-3 h-max md:h-72'>
									<div
										role='status'
										className='animate-pulse flex content-between place-content-between align-middle flex-col w-full'>
										<div className='h-5 bg-gray-50 dark:bg-gray-200 w-48 rounded-lg' />
										<div className='h-5 bg-gray-50 dark:bg-gray-200 rounded-lg my-3' />
										<div className='h-5 bg-gray-50 dark:bg-gray-200 rounded-lg' />
										<div className='h-5 bg-gray-50 dark:bg-gray-200 rounded-lg mt-3 max-w-[37rem]' />
									</div>
								</div>

								<div className='grid rounded-2xl shadow-sm px-4 py-6 bg-white text-neutral-400 mr-3 h-max md:h-72'>
									<div
										role='status'
										className='animate-pulse flex content-between place-content-between align-middle flex-col w-full'>
										<div className='h-5 bg-gray-50 dark:bg-gray-200 w-48 rounded-lg' />
										<div className='h-5 bg-gray-50 dark:bg-gray-200 rounded-lg my-3' />
										<div className='h-5 bg-gray-50 dark:bg-gray-200 rounded-lg' />
										<div className='h-5 bg-gray-50 dark:bg-gray-200 rounded-lg mt-3 max-w-[37rem]' />
									</div>
								</div>
							</>
						) : (
							expertsData &&
							expertsData?.docs?.map((expert: any) => (
								<div
									className='py-6 px-6 bg-white shadow-sm rounded-2xl'
									key={expert.id}>
									<div className='flex flex-col h-full'>
										<div className='lg:flex'>
											{expert?.profilePhoto ? (
												<div className='h-24 w-24 rounded-lg mr-2 object-cover relative overflow-hidden'>
													<Image
														src={expert?.profilePhoto}
														width={96}
														height={96}
														alt=''
														className='w-full h-full object-cover'
													/>
												</div>
											) : (
												<div className='w-24 h-24'>
													<FiUser className='text-[#270058] m-auto' size={88} />
												</div>
											)}

											<div className='flex justify-between w-full'>
												<div className='mr-28 2xl:mr-72'>
													<div className=' '>
														<p className='text-[22px] font-bold'>
															{(expert.firstName + ' ' + expert.lastName)
																.length > 12 ? (
																(
																	expert.firstName +
																	' ' +
																	expert.lastName
																).slice(0, 12) + '...'
															) : (
																<>{expert.firstName + ' ' + expert.lastName}</>
															)}
														</p>
													</div>
													<p className='text-sm text-gray-500'>
														{expert.jobTitle?.length > 22
															? expert.jobTitle?.slice(0, 22) + '...'
															: expert.jobTitle}
													</p>
													<div className='flex'>
														<Image
															src={star}
															alt='rating-icon'
															width={20}
															height={20}
														/>
														<span className='text-[22px] font-bold pt-1'>
															{expert.rating}
														</span>
													</div>
												</div>
												<div className='self-start lg:text-right'>
													<p className='text-gray-500'>From</p>
													<p className='font-bold'>₦20,000</p>
												</div>
											</div>
										</div>

										<p className='text-gray-500 py-4'>
											{expert?.bio?.length > 100 ? (
												expert?.bio.slice(0, 100) + '...'
											) : (
												<>{expert?.bio}</>
											)}
										</p>

										{process.env.NEXT_PUBLIC_FF_AD_IMAGES === 'true' && (
											<div className='w-full mb-4 flex gap-3 items-center'>
												<button className='!bg-textPurple/10 text-textPurple rounded-lg flex gap-2 items-center justify-between px-2 py-0.5 text-sm'>
													<FaLinkedinIn className='text-textPurple text-sm' />
													LinkedIn
												</button>

												<button className='!bg-textPurple/10 text-textPurple rounded-lg flex gap-2 items-center justify-between px-2 py-0.5 text-sm'>
													<FaTwitter className='text-textPurple text-sm' />
													Twitter
												</button>
											</div>
										)}

										<div className='flex flex-wrap gap-2 lg:gap-4'>
											{expert?.skills.map((item: any, idx: number) => (
												<span
													className='bg-gray-100 rounded-lg text-xs md:text-sm w-max px-2 py-1'
													key={item + idx}>
													{item}
												</span>
											))}
										</div>

										<div className='pt-6 grid grid-cols-2 gap-4 gap-expert-10 mt-auto'>
											<Link href={'https://app.zedintro.com/book/' + expert.id}>
												<button className='btn-default w-full py-3 rounded-lg text-white bg-[#270058]'>
													Book call
												</button>
											</Link>
											<button
												className='btn-default w-full !bg-[#EDDBFF] !text-[#270058] py-3 rounded-lg'
												onClick={() => giftModal(expert)}>
												Gift call
											</button>
										</div>
									</div>
								</div>
							))
						)}
						<Transition.Root show={open} as={Fragment}>
							<Dialog
								as='div'
								className='relative z-10'
								initialFocus={cancelButtonRef}
								onClose={setOpen}>
								<Transition.Child
									as={Fragment}
									enter='ease-out duration-300'
									enterFrom='opacity-0'
									enterTo='opacity-100'
									leave='ease-in duration-200'
									leaveFrom='opacity-100'
									leaveTo='opacity-0'>
									<div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
								</Transition.Child>

								<div className='fixed inset-0 z-10 overflow-y-auto'>
									<div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
										<Transition.Child
											as={Fragment}
											enter='ease-out duration-300'
											enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
											enterTo='opacity-100 translate-y-0 sm:scale-100'
											leave='ease-in duration-200'
											leaveFrom='opacity-100 translate-y-0 sm:scale-100'
											leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
											<Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
												<div className='bg-white p-4 sm:p-7 '>
													<div className='sm:flex sm:items-start'>
														<div className='text-center mx-auto sm:mt-0 sm:text-left '>
															<Image
																src={giftSvg}
																alt='gift-icon'
																className='mx-auto'
																width={100}
																height={100}
															/>
															<hr className='my-10 border border-solid border-[#AEAEAE]' />
															<div className='mt-2'>
																<section className='card !bg-[#E8E0EB] p-8 rounded-2xl mt-12 lg:mt-0'>
																	<p className='font-semibold text-xl'>
																		Gift a call with{' '}
																		{profile?.firstName +
																			' ' +
																			profile?.lastName}{' '}
																	</p>
																	<p className='text-sm pt-1'>
																		{`Please fill in the recipient's details below`}
																	</p>
																	<form className='grid mt-5 gap-4'>
																		<input
																			type='text'
																			placeholder='Full name'
																			className='border border-neutral-300 rounded-lg w-full py-2 px-3'
																			onChange={handleGiftChange}
																			name='name'
																			required
																		/>
																		<div className='flex gap-expert-4 gap-2'>
																			<input
																				type='email'
																				placeholder='Email address'
																				className='border border-neutral-300 rounded-lg w-full py-2 px-3'
																				onChange={handleGiftChange}
																				name='email'
																				required
																			/>
																			<button
																				className='flex-none rounded-lg bg-[#270058] text-white px-8 text-sm disabled:bg-[#280058af]'
																				disabled={
																					Boolean(giftRecipientData.email) ==
																						false ||
																					Boolean(giftRecipientData.name) ==
																						false
																				}
																				onClick={(e) =>
																					handleSetGiftRecipient(e, profile.id)
																				}
																				type='button'>
																				Gift call
																			</button>
																		</div>
																	</form>
																</section>
															</div>
														</div>
													</div>
												</div>
											</Dialog.Panel>
										</Transition.Child>
									</div>
								</div>
							</Dialog>
						</Transition.Root>
					</div>

					<ReactPaginate
						breakLabel='...'
						nextLabel=''
						onPageChange={handlePageClick}
						pageRangeDisplayed={5}
						pageCount={expertsData.totalPages}
						previousLabel=''
						renderOnZeroPageCount={null}
						activeClassName='w-min rounded-xl bg-[#8338EC] text-white py-2 px-4 font-bold'
						className='flex gap-expert-4 w-min mx-auto mt-10'
					/>
				</section>
			</div>
		</main>
	);
};

export default Page;
