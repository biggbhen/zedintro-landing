import React, { ReactNode, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

type Props = {
	options: any;
	optionField: any;
	className: string;
	handleSelect: (item: any, optionField: any) => void;
	children: ReactNode;
};

const SelectMenu = ({
	options,
	optionField,
	className,
	handleSelect,
	children,
}: Props) => {
	return (
		<Menu as='div' className='relative text-left'>
			<div>
				<Menu.Button className='text-sm font-semibold text-gray-900 w-full text-left'>
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
					} z-10 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}>
					<div className='py-2'>
						{options.map((item: any) => (
							<Menu.Item key={item.id}>
								{({ active }) => (
									<p
										className={`${
											active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
										}
											px-4 py-2 text-sm cursor-pointer flex items-center gap-3`}
										onClick={() => handleSelect(item, optionField)}>
										{item.value ? item.value : item.name}
									</p>
								)}
							</Menu.Item>
						))}
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
};

export default SelectMenu;
