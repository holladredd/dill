import React from 'react'
import { AppBar, Toolbar, Typography, styled } from "@mui/material"
import { Pets } from '@mui/icons-material'

const StyleToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",

})
const navbar = () => {
  return (
    <AppBar  position='stick'>
      <StyleToolbar>
        <Typography variant="h6" sx={{dispaly:{sx:"none", sm:"block"}}}>DREDD</Typography>
        <Pets sx={{dispaly:{sx:"block", sm:"none"}}}/>
      </StyleToolbar>
    </AppBar>
  )
}

export default navbar
