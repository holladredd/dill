import React from 'react'
import { Box } from "@mui/material";

const rightbar = () => {
  return (
    <Box bgcolor="red" p={2} flex={2} sx={{display:{xs: "none", sm: "block"}}}>
      rightbar
    </Box>
  )
}

export default rightbar
