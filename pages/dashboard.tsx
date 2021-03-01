// --- Pages

import axios from 'axios'
import { GetServerSideProps, NextPage } from 'next'
import { useEffect, useState } from 'react'

// --- Locals

import { LayoutProvider } from '../layouts/'

// ---

interface IPassingProps {}

interface IAppProps extends IPassingProps, GetServerSideProps {}

// ---

// ---

const Dashboard: NextPage<IAppProps, IPassingProps> = props => {
  const [userd, setUserd] = useState<any>()

  useEffect(() => {
    // const apiCaller = async () => {
    // 	const { data } = await axios.get('/api/hello')
    // 	console.log(data)
    // }
    // apiCaller()
  }, [])
  console.log(userd)
  return (
    <LayoutProvider>
      <div>{userd && userd.username} i am dashboard</div>
    </LayoutProvider>
  )
}

// ---

// export const getServerSideProps: GetServerSideProps = async context => {
//   return {
//     props: {}
//   }
// }

// ---

export default Dashboard
