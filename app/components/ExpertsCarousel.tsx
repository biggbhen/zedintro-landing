import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Flickity from 'react-flickity-component';
import 'flickity/css/flickity.css';
import Image from 'next/image';
import { MdOutlineStarPurple500 } from 'react-icons/md';

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

const ExpertsCarousel: React.FC<Props> = () => {
	const [loading, setLoading] = useState(true);
	const [experts, setExperts] = useState([]);
	const sliderRef = useRef(null);

	useEffect(() => {
		(async () => {
			setLoading(true);
			const api = `${process.env.NEXT_PUBLIC_API_URL}/v1/experts/search?limit=10&skip=0&orderBy=rating`;
			await axios
				.get(api)
				.then((result) => {
					const experts = result.data.data.docs;
					setLoading(false);
					setExperts(experts);
				})
				.catch(function (error) {
					setLoading(false);
					console.error(error);
				});
		})();
	}, []);

	return (
		<div>
			<Flickity
				className={'carousel'}
				elementType={'div'}
				options={flickityOptions}
				disableImagesLoaded={false}
				reloadOnUpdate>
				{experts.map((item: any) => (
					<div
						className='px-4 py-6 bg-white text-neutral-400 shadow-sm rounded-2xl min-h-[15rem] h-full md:h-72 sm:max-w-[24rem] w-full  ml-10 flex flex-col'
						key={item.id}>
						<div className='flex'>
							<div className='h-20 w-20 object-cover relative'>
								{item?.profilePhoto ? (
									<Image
										src={item?.profilePhoto}
										width='100'
										height='100'
										alt={`${item.firstName} photo`}
										className='w-full h-full rounded-lg object-cover'
									/>
								) : (
									<Image
										src={'profileIcon'}
										alt={`${item.firstName} photo`}
										className='w-full h-full rounded-lg object-cover'
									/>
								)}
							</div>

							<div className='grid pl-2 text-left'>
								<p className='text-[22px] font-bold text-black'>
									{(item.firstName + ' ' + item.lastName).length > 20 ? (
										(item.firstName + ' ' + item.lastName).slice(0, 20) + '...'
									) : (
										<>{item.firstName + ' ' + item.lastName}</>
									)}
								</p>

								<p>
									{item.jobTitle?.length > 35
										? item.jobTitle.slice(0, 35) + '...'
										: item.jobTitle}
								</p>

								<div className='flex items-center space-x-1'>
									<MdOutlineStarPurple500 className='text-[#FEC84B] text-xl' />
									<span className='font-bold self-center text-black'>
										{item.rating}
									</span>
								</div>
							</div>
						</div>

						<p className='text-sm py-2 pr-8 lg:pr-0 h-20 text-left'>
							{item.bio?.length > 120 ? (
								item.bio.slice(0, 120) + '...'
							) : (
								<>{item.bio}</>
							)}
						</p>

						<div className='flex gap-2 text-xs md:text-sm'>
							{item.skills[0]?.length > 18 ? (
								<p className='font-medium bg-neutral-200 text-gray-800 rounded-lg px-3 lg:px-1.5 xl:px-3 py-0.5 h-min'>
									{item.skills[0].slice(0, 18) + '...'}
								</p>
							) : item.skills[0] ? (
								<p className='font-medium bg-neutral-200 text-gray-800 rounded-lg px-3 lg:px-1.5 xl:px-3 py-0.5 h-min'>
									{item.skills[0]}
								</p>
							) : (
								''
							)}

							{item.skills[1]?.length > 18 ? (
								<p className='font-medium bg-neutral-200 text-gray-800 rounded-lg px-3 lg:px-1.5 xl:px-3 py-0.5 h-min'>
									{item.skills[1].slice(0, 18) + '...'}
								</p>
							) : item.skills[0] ? (
								<p className='font-medium bg-neutral-200 text-gray-800 rounded-lg px-3 lg:px-1.5 xl:px-3 py-0.5 h-min'>
									{item.skills[1]}
								</p>
							) : (
								''
							)}
						</div>

						<div className='flex pt-4 mt-auto'>
							<p className='self-center'>
								From{' '}
								<span className='text-black font-semibold'>
									{new Intl.NumberFormat('en-US', {
										style: 'currency',
										currency: 'USD',
									}).format(item?.fee)}
								</span>
							</p>

							<Link
								href={`https://app.zedintro.com/book/${item?.id}`}
								className='ml-auto'>
								<button className='bg-[#270058] text-sm font-medium text-white py-2.5 px-6 rounded-lg'>
									Book call
								</button>
							</Link>
						</div>
					</div>
				))}
			</Flickity>

			{loading && (
				<div className='flex gap-6'>
					<div className='grid rounded-2xl shadow-sm px-4 py-6 bg-white text-neutral-400 w-[42rem] mr-3 h-max md:h-72'>
						<div
							role='status'
							className='animate-pulse flex content-between place-content-between align-middle flex-col w-full'>
							<div className='h-5 bg-gray-50 dark:bg-gray-200 w-48 rounded-lg' />
							<div className='h-5 bg-gray-50 dark:bg-gray-200 rounded-lg my-3' />
							<div className='h-5 bg-gray-50 dark:bg-gray-200 rounded-lg' />
							<div className='h-5 bg-gray-50 dark:bg-gray-200 rounded-lg mt-3 max-w-[37rem]' />
						</div>
					</div>

					<div className='grid rounded-2xl shadow-sm px-4 py-6 bg-white text-neutral-400 w-[42rem] mr-3 h-max md:h-72'>
						<div
							role='status'
							className='animate-pulse flex content-between place-content-between align-middle flex-col w-full'>
							<div className='h-5 bg-gray-50 dark:bg-gray-200 w-48 rounded-lg' />
							<div className='h-5 bg-gray-50 dark:bg-gray-200 rounded-lg my-3' />
							<div className='h-5 bg-gray-50 dark:bg-gray-200 rounded-lg' />
							<div className='h-5 bg-gray-50 dark:bg-gray-200 rounded-lg mt-3 max-w-[37rem]' />
						</div>
					</div>

					<div className='grid rounded-2xl shadow-sm px-4 py-6 bg-white text-neutral-400 w-[42rem] mr-3 h-max md:h-72'>
						<div
							role='status'
							className='animate-pulse flex content-between place-content-between align-middle flex-col w-full'>
							<div className='h-5 bg-gray-50 dark:bg-gray-200 w-48 rounded-lg' />
							<div className='h-5 bg-gray-50 dark:bg-gray-200 rounded-lg my-3' />
							<div className='h-5 bg-gray-50 dark:bg-gray-200 rounded-lg' />
							<div className='h-5 bg-gray-50 dark:bg-gray-200 rounded-lg mt-3 max-w-[37rem]' />
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ExpertsCarousel;
