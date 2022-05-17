import React from 'react';
import { Box } from '@mui/material';
import { Buttons } from './components/Buttons/Buttons';
import Form from './components/CreateComment/CreateComment';
import Comments from './components/CommentsList/CommentsList';
import Carousel from './components/Carousel/Carousel';

function App() {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      width: '360px',
    }}
    >
      <Carousel />
      <Form />
      <Comments />
    </Box>
  );
}

export default App;
