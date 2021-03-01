// --- Pages

import { GetServerSideProps, NextPage } from 'next'

// --- Locals

import { LayoutProvider } from '../../../layouts/'
import { WhatUpCard } from '../../../components/common/'

// --- interface

interface IInfo {
  hisHeader: string
  motiveText: string
  spendedTimeThisWeek: string
  progress: string
}

interface IPassingProps {}

// type AppProps = NextPage & PassingProps & GetServerSideProps
interface IAppProps extends IPassingProps, GetServerSideProps {}

// ---
const INFO: IInfo[] = [
  {
    hisHeader: 'My Habits',
    motiveText: 'This text motivate you very much',
    spendedTimeThisWeek: '60',
    progress: 'be intense'
  },
  {
    hisHeader: 'My Habits',
    motiveText: 'This text motivate you very much',
    spendedTimeThisWeek: '60',
    progress: 'be intense'
  },
  {
    hisHeader: 'My Habits',
    motiveText: 'This text motivate you very much',
    spendedTimeThisWeek: '60',
    progress: 'be intense'
  }
]
// ---

const SelfImprovment: NextPage<IAppProps, IPassingProps> = props => {
  // --- renderer

  const renderer = (info: IInfo[]) =>
    info.map(({ hisHeader, motiveText, spendedTimeThisWeek, progress }) => (
      <WhatUpCard
        hisHeader={hisHeader}
        motiveText={motiveText}
        spendedTimeThisWeek={spendedTimeThisWeek}
        progress={progress}
      />
    ))

  return (
    <LayoutProvider>
      <div className="flex flex-wrap ">{renderer(INFO)}</div>
    </LayoutProvider>
  )
}

// ---

// pathName and AppTree does not exist on NextPageContext.
// export const getServerSideProps: GetServerSideProps = async context => {
// 	return {
// 		props: {}
// 	}
// }

// ---

export default SelfImprovment
