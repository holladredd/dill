import React from 'react'
import { AppBar, Toolbar, Typography } from "@mui/material"

const StyleToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",

})
const navbar = () => {
  return (
    <AppBar  position='stick'>
      <StyleToolbar>
        <Typography variant="h4" sx={{display:{sx:"none", sm:"block"}}}>DREDD</Typography>
        <pets sx={{display:{sx:"block", sm:"none"}}} />
      </StyleToolbar>
    </AppBar>
  )
}

export default navbar
