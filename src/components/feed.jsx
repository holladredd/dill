import React from 'react'
import Post from './Post'
import { Box } from '@mui/material'
const feed = () => {



  return (
    <Box p={2} flex={4}>
   <Post/>
   <Post/>
   <Post/>
   <Post/>
   <Post/>
   <Post/>
    </Box>
  )
}

export default feed
