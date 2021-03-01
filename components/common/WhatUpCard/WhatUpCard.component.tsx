// --- Pages

import { NextPage } from 'next'

// --- Locals

// --- interface

interface IPassingProps {
	hisHeader: string
	motiveText: string
	spendedTimeThisWeek: string
	progress: string
}

// type AppProps = NextPage & PassingProps & GetServerSideProps
interface IAppProps extends IPassingProps {}

// ---

export const WhatUpCard: NextPage<IAppProps> = ({
	hisHeader,
	motiveText,
	spendedTimeThisWeek,
	progress
}) => {
	return (
		<div className="xl:w-1/3 md:w-1/2 p-4 ">
			<div className="border border-gray-300 bg-yellow-50 p-6 rounded-lg">
				<div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
					<svg
						className=" fill-current h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 384 512"
					>
						<path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" />
					</svg>
				</div>
				<h2 className="text-lg  font-medium title-font mb-2">{hisHeader}</h2>
				<p className="leading-relaxed text-base">{motiveText}</p>

				<div className="text-center mt-2 leading-none flex justify-between w-full">
					<span className=" mr-3 inline-flex items-center leading-none text-sm  py-1 ">
						<svg
							className=" fill-current w-4 h-4 mr-2 text-blue-500"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
						>
							<path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" />
						</svg>
						{spendedTimeThisWeek}
					</span>
					<span className=" inline-flex items-center leading-none text-sm">
						<svg width="22" height="22" xmlns="http://www.w3.org/2000/svg">
							<g fill="none" fill-rule="evenodd">
								<path
									fill="#D8D8D8"
									d="M9.2 6.583v11.08h3.5V6.583zm6.4 11.084h3.5V3h-3.5z"
								/>
								<path fill="#667EEA" d="M2.6 17.667h3.5v-7.334H2.6z" />
							</g>
						</svg>
						{progress}
					</span>
				</div>
			</div>
		</div>
	)
}
