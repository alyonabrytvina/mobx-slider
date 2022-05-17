import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import MessageIcon from '@mui/icons-material/Message';
import { store } from '../../store/store';

export const Buttons: React.FC = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      margin: '10px 0',
    }}
  >
    <IconButton onClick={store.postLikesInc}>
      <ThumbUpIcon sx={{
        m: '5px',
      }}
      />
      <Typography>Like</Typography>
    </IconButton>
    <IconButton>
      <MessageIcon sx={{
        m: '5px',
      }}
      />
      <Typography>Comments</Typography>
    </IconButton>
  </Box>
);
