import React ,{ useState } from 'react'
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <Box>
      <Navbar />
      <HeroBanner />
      {/* <SearchExercises />
      <Exercises /> */}
    </Box>
  )
}

export default Home
