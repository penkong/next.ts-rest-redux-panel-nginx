// --- Packages

import { GetServerSideProps, NextPage } from 'next'

// --- Locals

interface IPassingProps {
	hisText: string
}

interface IAppProps extends IPassingProps {}

// ---

export const SideNavLabel: NextPage<IAppProps> = ({ hisText }) => (
	<li className="my-px">
		<span className="flex font-medium text-sm text-gray-500 tracking-wider px-4 my-4 ">
			{hisText}
		</span>
	</li>
)
