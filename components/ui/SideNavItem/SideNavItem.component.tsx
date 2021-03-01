// --- Packages

import { NextPage } from 'next'
import Link from 'next/link'

// --- Locals

interface IPassingProps {
	href: string
	hisText: string
	messageNum?: number
	IconComp: React.ReactNode
}

// type AppProps = NextPage & PassingProps & GetServerSideProps
interface IAppProps extends IPassingProps {}

// ---

export const SideNavItem: NextPage<IAppProps> = ({
	href,
	hisText,
	messageNum,
	IconComp
}) => (
	<li className="my-px">
		<Link href={href}>
			<span
				className={`flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100 ${
					hisText === 'Dashboard' ? 'bg-gray-100' : ''
				} cursor-pointer`}
			>
				{IconComp}
				<span className="ml-3">{hisText}</span>
				{messageNum && (
					<span className="flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-200 h-6 px-2 rounded-full ml-auto">
						{messageNum}
					</span>
				)}
			</span>
		</Link>
	</li>
)
