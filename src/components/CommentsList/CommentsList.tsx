import {
  List, ListItem, ListItemText, Divider, Box,
} from '@mui/material';
import React from 'react';
import { observer } from 'mobx-react';
import { v4 as uuidv4 } from 'uuid';
import { store } from '../../store/store';

const CommentsList: React.FC = () => (
  <List
    sx={{
      width: '100%',
    }}
  >
    {store.commentsArr.map((comment) => (
      <Box key={uuidv4()}>
        <ListItem>
          <ListItemText primary={comment} />
        </ListItem>
        <Divider />
      </Box>
    ))}
  </List>
);

export default observer(CommentsList);
