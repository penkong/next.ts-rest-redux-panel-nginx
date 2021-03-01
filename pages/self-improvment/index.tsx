// --- Pages

import { GetServerSideProps, NextPage } from 'next'

// --- Locals

import { LayoutProvider } from '../../layouts/'

// --- interface

interface IPassingProps {}

// type AppProps = NextPage & PassingProps & GetServerSideProps
interface IAppProps extends IPassingProps, GetServerSideProps {}

// ---

const SelfImprovment: NextPage<IAppProps> = props => {
  return (
    <LayoutProvider>
      <div>this collect news here</div>
    </LayoutProvider>
  )
}

// ---

// // pathName and AppTree does not exist on NextPageContext.
// export const getServerSideProps: GetServerSideProps = async context => {
// 	return {
// 		props: {}
// 	}
// }

// ---

export default SelfImprovment
