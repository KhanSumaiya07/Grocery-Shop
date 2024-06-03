import Banner from '@/component/banner/Banner';
import ArrivalCards from '@/component/newArrival/arrivalCards';
import Product from '@/component/Product';
import React from 'react'

const Home = () => {
  return (
    <>
     <Banner/>
     <Product/>
     <ArrivalCards/>
    </>
  )
}

export default Home;
