import { TextField } from '@mui/material';
import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { store } from '../../store/store';

const CreateComment: React.FC = () => {
  const [comment, setComment] = useState<string>('');
  const onAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      store.addComment(comment);
      store.commentsCountInc();
      setComment('');
    }
  };

  return (
    <TextField
      fullWidth
      value={comment}
      sx={{
        '& .MuiOutlinedInput-root': { borderRadius: 10 },
        borderRadius: '20%',
      }}
      placeholder="Write a comment"
      inputProps={{ 'aria-label': 'write a comment' }}
      onChange={onAdd}
      onKeyDown={onKeyDown}
    />
  );
};

export default observer(CreateComment);
