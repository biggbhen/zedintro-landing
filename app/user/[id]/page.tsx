'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import star from '../../../public/assets/icons/star.svg';
// import giftSvg from '../../public/assets/icons/giftSvg.svg';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import ReactLoading from 'react-loading';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';

type Props = {};

const Expert = (props: Props) => {
	const router = useRouter();
	const params = useParams();
	const URL = process.env.NEXT_PUBLIC_API_URL;

	const [expert, setExpert] = useState<any>({});
	const [loading, setLoading] = useState<boolean>(false);

	const getExpertsFromUrl = async () => {
		try {
			const api = `${URL}/v1/experts/profile/public?username=${params.id}`;
			setLoading(true);
			const res = await axios.get(api);
			if (res.status && res.status === 200) {
				setExpert(res.data.data);
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

	useEffect(() => {
		getExpertsFromUrl();
		// eslint-disable-next-line
	}, [params.id]);

	const handleBook = () => {
		router.push(`https://app.zedintro.com/book/${expert.id}`, {
			scroll: false,
		});
	};

	return (
		<div className=' min-h-[100vh] py-[7rem]'>
			{' '}
			<div className='mx-auto flex flex-col lg:flex-row gap-16 justify-between max-w-[1240px] xl:px-0 px-10'>
				<div className='bg-white shadow-md rounded-lg p-6 md:basis-1/2 sm:min-w-[30rem] sm:self-center lg:self-start'>
					<div className='h-80 md:h-[31rem] rounded-lg bg-slate-100 object-cover relative'>
						<Image
							src={expert?.profilePhoto}
							alt='profile image'
							className='w-full h-full object-cover'
							fill
						/>
					</div>

					<div className='flex items-center mt-2'>
						<h2 className='font-bold'>{`${expert?.firstName} ${expert?.lastName}`}</h2>
						<Image src={star} alt='rating-icon' className='ml-auto' />
						<p className='text-black text-lg font-semibold'>{expert?.rating}</p>
					</div>

					<p className='text-textLight'>{expert?.jobTitle}</p>
				</div>

				<div className='bg-white shadow-md rounded-lg p-6 sm:basis-1/2 flex flex-col'>
					<h3 className='font-bold'>About Me</h3>

					<div className='md:max-h-[20rem] max-h-[12rem] overflow-scroll'>
						<p className='my-2'>{expert?.bio}</p>
					</div>

					<div className='sm:my-10 my-6 flex gap-5 md:mt-auto sm:mt-auto'>
						{expert?.linkedinUrl && (
							<button className='!bg-textPurple/10 text-textPurple rounded-lg text-sm'>
								<a
									href={expert.linkedinUrl}
									className='flex gap-2 items-center justify-between px-2 py-0.5 '
									target='_blank'
									rel='noreferrer'>
									<FaLinkedinIn className='text-textPurple text-sm' />
									LinkedIn
								</a>
							</button>
						)}

						{expert?.twitterUrl && (
							<button className='!bg-textPurple/10 text-textPurple rounded-lg text-sm'>
								<a
									href={expert.twitterUrl}
									className='flex gap-2 items-center justify-between px-2 py-0.5 '
									target='_blank'
									rel='noreferrer'>
									<FaTwitter className='text-textPurple text-sm' />
									Twitter
								</a>
							</button>
						)}
					</div>

					<div className='flex flex-wrap text-xs text-gray-700 py-2 font-medium'>
						{expert?.skills &&
							expert?.skills.map((skill: any, index: number) => (
								<p
									className='bg-gray-100 px-2 py-1 h-min rounded-xl'
									key={skill + index}>
									{skill}
								</p>
							))}
					</div>

					<div className='mt-4 flex flex-col md:flex-row gap-4 md:justify-between md:items-center'>
						<p className='text-sm text-textLight'>
							From
							<span className='text-lg text-black font-bold ml-2'>
								{/* {rateInUserCurrency && expert
									? new Intl.NumberFormat('en-US', {
											style: 'currency',
											currency,
									  }).format(expert.fee * rateInUserCurrency)
									: null} */}
								₦20,000
							</span>
						</p>

						<button
							className='bg-[#00164F] text-white flex items-center justify-center gap-2 rounded py-3 sm:px-0 px-5 w-full sm:w-56 text-sm sm:text-base'
							type='submit'
							id='btnAction'
							onClick={handleBook}>
							{false && (
								<ReactLoading
									type='cylon'
									color='#fff'
									className=''
									height={20}
									width={20}
								/>
							)}
							Book call
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Expert;
