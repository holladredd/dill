import React, { useState } from 'react'
import { AppBar, Avatar, AvatarGroup, Badge, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from "@mui/material"
import { GamepadRounded, GroupRounded,  HomeRounded,   KeyboardArrowDown,   MenuOpen,   MessageRounded,   NotificationsRounded,   PlayArrowRounded,   StoreRounded, Widgets,  } from '@mui/icons-material'

const AvatarBar = styled("Box")({
  justifyContent: 'space-between',
  width: "70%",
  height: "30px",
  display: 'flex',
  alignItems: "center"

});
const Search = styled("div")(({theme}) =>({
  backgroundColor: 'white',
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "16%"

}));
const Icons = styled("Box")(({theme}) =>({
    display: 'flex',
    alignItems: 'center',
    width: "60%",
    gap: '20px',
    justifyContent: 'space-between',

}));
const UserBox = styled("Box")(({theme}) =>({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  // [theme.breakpoints.up("sm")]:{
  //   display: 'none'
  // }

}));
const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 18,
  height: 18,
  border: `none`
}));
const navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <AppBar position='sticky'>
      <Toolbar sx={{  display: "flex",
  justifyContent: "space-between"}}>
      <AvatarBar>
      <Avatar sx={{backgroundColor: 'skyblue', marginRight: '4px'}} >
        HD
        </Avatar>
        <Search><InputBase placeholder='Search...' ></InputBase></Search>


        <Icons direction="row" spacing={20} >
          <Badge overlap="circular" color="secondary" variant='dot' >
            <HomeRounded color='white' sx={{ width: 40, height: 40 }}/>
          </Badge>
          <Badge color="secondary" >
            <PlayArrowRounded color='white' sx={{ width: 40, height: 40 }}/>
          </Badge>
          <Badge  overlap="circular" color="secondary" variant='dot' >
            <StoreRounded color='white' sx={{ width: 40, height: 40 }}/>
          </Badge>
          <Badge color="secondary" >
            <GroupRounded color='white' sx={{ width: 40, height: 40 }}/>
          </Badge>
          <Badge color="secondary"  >
            <GamepadRounded color='white' sx={{ width: 40, height: 40 }}/>
          </Badge>
        </Icons>
        </AvatarBar>

        <UserBox direction="row" spacing={20} >
          <Badge color="secondary">
              <Widgets color='white' sx={{ width: 40, height: 40 }}/>
          </Badge>
          <Badge color="secondary">
              <MessageRounded color='white' sx={{ width: 40, height: 40 }}/>
          </Badge>
          <Badge color="secondary">
              <NotificationsRounded color='white' sx={{ width: 40, height: 40 }}/>
          </Badge>
          <Badge onClick={e =>setOpen(true)} bgcolor="deepOrange[500]" sx={{
            width: 24, height: 24
          }}
          overlap='circular'         anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
  badgeContent={
    <SmallAvatar>

        <KeyboardArrowDown sx={{'.MuiOutlinedInput-notchedOutline': { border: 0 }}}/>

    </SmallAvatar>
  }
>
  <Avatar alt="Travis Howard" src='https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2' />
          </Badge>
        </UserBox>
      </Toolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default navbar
