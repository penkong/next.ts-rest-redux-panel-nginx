// --- Pages

import { NextPage } from 'next'

// --- Locals

import { SideBarLayout } from '../'

// --- interface

interface IPassingProps {}

interface IAppProps extends IPassingProps {}

// ---

export const LayoutProvider: NextPage<IAppProps, IPassingProps> = ({
	children
}) => {
	return (
		<div className="min-h-screen flex ml-1 bg-gray-100 py-1">
			<div className="flex w-full overflow-x-hidden  max-w-xs p-4 bg-white">
				<SideBarLayout />
			</div>
			{children}
		</div>
	)
}
