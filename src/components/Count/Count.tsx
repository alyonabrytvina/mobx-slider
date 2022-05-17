import {
  Box, CardActions, CardMedia, IconButton, Typography,
} from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import React from 'react';
import { observer } from 'mobx-react';
import { store } from '../../store/store';
import './Count.scss';

const Count: React.FC = () => (
  <CardMedia>
    <CardActions
      className="card-actions-container"
    >
      <Box className="card-actions-container__icons">
        <IconButton disabled>
          <ThumbUpIcon fontSize="small" />
        </IconButton>
        <Typography>{store.postLikesCount}</Typography>
      </Box>
      <Box className="card-actions-container__icons">
        <Typography>{store.commentsCount}</Typography>
        <Typography sx={{ ml: '5px' }}>
          Comments
        </Typography>
      </Box>
    </CardActions>
  </CardMedia>
);

export default observer(Count);
