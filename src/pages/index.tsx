import type {NextPage} from 'next'
import {Heading} from "@chakra-ui/react";
import {trpc} from "../utils/trpc";

const Home: NextPage = () => {
  const users = trpc.user.all.useQuery()
  if (!users.data) {
    return <div>Loading...</div>
  }
  return (
    <Heading>{users.data.map((user) => user.name)}</Heading>
  )
}

export default Home
