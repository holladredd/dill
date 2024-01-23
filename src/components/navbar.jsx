import React from 'react'
import { Appbar,Toolbar, styled } from "@mui/material"

const StyleToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",

})
const navbar = () => {
  return (
    <Appbar position="stick">
      <StyleToolbar >Navbar</StyleToolbar>
    </Appbar>
  )
}

export default navbar
