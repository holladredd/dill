import React from 'react'
import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";

const rightbar = () => {
  return (
    <Box p={2} flex={2} sx={{display:{xs: "none", sm: "block"}}}>
      <Box position={'fixed'}>

      <Typography variant="h6" fontWeight={100}>Online Friends</Typography>
    <AvatarGroup total={24} max={6} sx={{
      justifyContent: 'left'
    }}>
      <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
      <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/4.jpg" />
      <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/5.jpg" />
    </AvatarGroup>
    <Typography variant="h6" fontWeight={100} mt={2} mb={2}>Latest Photo</Typography>
    <ImageList col={3} rowHeight={100} gap={5}>
      <ImageListItem>
        <img
        src='https://material-ui.com/static/images/image-list/breakfast.jpg'
        alt=''
        />
      </ImageListItem>
      <ImageListItem>
        <img
        src='https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2'
        alt=''
        />
      </ImageListItem>

    </ImageList>
    <Typography variant="h6" fontWeight={100} mt={2} mb={2}>Latest Conversation</Typography>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
                >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
                >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
    </Box>
    </Box>
  )
}

export default rightbar
