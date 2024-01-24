import React from 'react'
import {  Card, CardHeader, Avatar, IconButton, CardMedia, CardContent, Typography, CardActions, Checkbox } from "@mui/material";
import {  Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material';
const Post = () => {
  return (
    <Card>
    <CardHeader
      avatar={
        <Avatar sx={{backgroundColor:'red'}} aria-label="recipe">
           R
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVert />
        </IconButton>
      }
      title="My First Social Post"
      subheader="January 20, 2024"
      
    />
          <CardMedia
    component="img"
    height="194"
    image="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
    alt="My First Image"
  />
  <CardContent>
    <Typography variant="body2" color="text.secondary">This impressive paella is a perfect party dish and a fun meal to cook
      together with your guests. Add 1 cup of frozen peas along with the mussels,
      if you like.</Typography>
  </CardContent>
  <CardActions disableSpacing>
      <IconButton aria-label='Add To Favorites'>
      <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />
      </IconButton>
      <IconButton aria-label="share">
      <Share />
    </IconButton>
  </CardActions>
  </Card>
  )
}

export default Post
