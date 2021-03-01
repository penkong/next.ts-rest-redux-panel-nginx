// --- Pages

import { NextPage } from 'next'

// --- Locals

import { SideNavItem, SideNavLabel } from '../../components/ui'
import { ClientIcon } from '../../components/icons/'

// --- interface

interface IItem {
	href: string
	hisText: string
	messageNum?: number
	IconComp: React.ReactNode
}

type IInfo = { [key: string]: IItem[] }

interface IPassingProps {}

interface IAppProps extends IPassingProps {}

// ---

const INFO: IInfo = {
	selfImprov: [
		{
			href: '/',
			hisText: 'My Habits',
			messageNum: 2,
			IconComp: <ClientIcon />
		},
		{
			href: '/',
			hisText: 'Notes / Quotes',
			messageNum: 2,
			IconComp: <ClientIcon />
		},
		{
			href: '/',
			hisText: 'Learning',
			messageNum: 2,
			IconComp: <ClientIcon />
		}
	],

	businesses: [
		{
			href: '/',
			hisText: 'My Clients',
			messageNum: 2,
			IconComp: <ClientIcon />
		},
		{
			href: '/',
			hisText: 'Notes',
			messageNum: 2,
			IconComp: <ClientIcon />
		},
		{
			href: '/',
			hisText: 'Learning',
			messageNum: 2,
			IconComp: <ClientIcon />
		}
	]
}

// ---

export const SideBarLayout: NextPage<IAppProps, IPassingProps> = props => {
	// --- renderer

	const renderItem = (item: IItem[]) =>
		item.map(({ href, hisText, messageNum, IconComp }) => (
			<SideNavItem
				href={href}
				hisText={hisText}
				messageNum={messageNum}
				IconComp={IconComp}
			/>
		))

	return (
		<ul className="flex flex-col w-full">
			<SideNavItem
				href="/"
				hisText="Dashboard"
				messageNum={2}
				IconComp={<ClientIcon />}
			/>
			<SideNavLabel hisText="Self Improvment" />
			{renderItem(INFO.selfImprov)}
			<SideNavLabel hisText="Businesses" />
			{renderItem(INFO.businesses)}
		</ul>
	)
}

// <li className="my-px">
// <a
// 	href="#"
// 	className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100"
// >
// 	<span className="flex items-center justify-center text-lg text-green-400">
// 		<svg
// 			fill="none"
// 			strokeLinecap="round"
// 			strokeLinejoin="round"
// 			strokeWidth="2"
// 			viewBox="0 0 24 24"
// 			stroke="currentColor"
// 			className="h-6 w-6"
// 		>
// 			<path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
// 		</svg>
// 	</span>
// 	<span className="ml-3">Add new</span>
// </a>
// </li>

{
	/* <li className="my-px">
<a
	href="#"
	className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100"
>
	<span className="flex items-center justify-center text-lg text-red-400">
		<svg
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			viewBox="0 0 24 24"
			stroke="currentColor"
			className="h-6 w-6"
		>
			<path d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"></path>
		</svg>
	</span>
	<span className="ml-3">Logout</span>
</a>
</li> */
}
