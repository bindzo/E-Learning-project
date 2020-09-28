import React from 'react'
import Carousel from '../../components/Carousel'
import wrapper from '../../HOCs/functionWrapper'
const Home = () => {
  return (
    <div>
      <Carousel />
    </div>
  )
}

export default wrapper(Home);
