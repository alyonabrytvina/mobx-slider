import React from 'react';
import { Box } from '@mui/material';
import { Post } from './components/Post/Post';
import { Buttons } from './components/Buttons/Buttons';
import Form from './components/Form/Form';
import Comments from './components/Comments/Comments';

function App() {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      width: '440px',
    }}
    >
      <Post />
      <Buttons />
      <Form />
      <Comments />
    </Box>
  );
}

export default App;
