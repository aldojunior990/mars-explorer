import type { NextPage } from 'next'
import { Header } from '../components/header'
import { Images } from '../components/images'
import { Container } from '../styles/home'

const Home: NextPage = () => {
  return (
    <Container>
      <Header />
      <Images />
    </Container>
  )
}

export default Home
