import {
  Box,
  Card, CardActions, CardMedia, IconButton, Typography,
} from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import React from 'react';
import { observer } from 'mobx-react';
import { store } from '../../store/store';

const Count: React.FC = () => (
  <Card>
    <CardMedia>
      <CardActions sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        m: '3px',
      }}
      >
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
        }}
        >
          <IconButton disabled>
            <ThumbUpIcon fontSize="small" />
          </IconButton>
          <Typography>{store.postLikesCount}</Typography>
        </Box>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
        }}
        >
          <Typography>{store.commentsCount}</Typography>
          <Typography sx={{ ml: '5px' }}>
            Comments
          </Typography>
        </Box>
      </CardActions>
    </CardMedia>
  </Card>
);

export default observer(Count);
