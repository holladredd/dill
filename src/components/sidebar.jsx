import React from 'react'
import { Box } from "@mui/material";
const sidebar = () => {
  return (
    <Box bgcolor="lightcoral" p={2} flex={1} sx={{display:{xs: "none", sm: "block"}}}>
      SideBar
    </Box>
  )
}

export default sidebar
