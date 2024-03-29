import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface ModalProps {
	open: boolean;
	setOpen: (open: boolean) => void;
	children: React.ReactNode;
	title: string;
}

const Modal = ({ open, setOpen, children, title }: ModalProps) => {
	return (
		<>
			{open ? (
				<>
					<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
						<div className='relative w-auto my-6 mx-auto max-w-3xl'>
							{/*content*/}
							<div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
								{/*header*/}
								<div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
									<h3 className='text-2xl font-semibold'>{title}</h3>
									<button
										className='p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
										onClick={() => setOpen(false)}
									>
										<XMarkIcon className='h-6 w-6 text-black ' />
									</button>
								</div>
								{/*body*/}
								<div className='relative p-6 flex-auto'>{children}</div>
								{/*footer*/}
							</div>
						</div>
					</div>
					<div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
				</>
			) : null}
		</>
	);
};

export default Modal;
