import React, {
  Children, cloneElement, useEffect, useState,
} from 'react';
import { Box } from '@mui/material';
import { fetchData } from '../../api/fetchData';
import './Carousel.css';

export const Carousel: React.FC = () => {
  const [data, setData] = useState<string[]>([]);
  const [pages, setPages] = useState<string[]>([]);

  useEffect(() => {
    fetchData().then((response) => setData(() => response.recipes.map((recipe) => recipe.imgUrl)));
  }, []);

  useEffect(() => {
    setPages(
      Children.map(data, (child) => cloneElement(child, {
        style: {
          height: '100%',
          minWidth: '450px',
          maxWidth: '450px',
        },
      })),
    );
  }, [data]);

  console.log(pages);

  return (
    <Box
      className="main-container"
    >
      <Box className="all-pages-container">
        {data?.map((img) => (
          <img
            src={img}
            alt="img"
            className="img"
          />
        ))}
      </Box>
    </Box>
  );
};
