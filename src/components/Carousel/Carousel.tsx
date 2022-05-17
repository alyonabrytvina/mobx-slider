import React, { useEffect, useState } from 'react';
import { Box, Card, IconButton } from '@mui/material';
import './Carousel.scss';
import { observer } from 'mobx-react';
import { useTransition, animated } from 'react-spring';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { store } from '../../store/store';
import Count from '../Count/Count';
import { Buttons } from '../Buttons/Buttons';

const Carousel: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const { imagesArr } = store;

  const transitions = useTransition(imagesArr[index], {
    key: null,
    from: { opacity: 1, position: 'absolute', transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 1, transform: 'translate3d(-50%,0,0)' },
    config: {
      duration: 550,
    },
  } as React.CSSProperties);

  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);

  useEffect(() => {
    store.fetchData();
  }, []);

  const nextSlide = () => {
    const next = index + 1 < imagesArr.length ? index + 1 : 0;
    setIndex(next);
  };

  const prevSlide = () => {
    const prev = index === 0 ? imagesArr.length - 1 : 0;
    setIndex(prev);
  };

  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX);

  const handleTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 150) {
      nextSlide();
    }

    if (touchStart - touchEnd < -150) {
      prevSlide();
    }
  };

  return (
    <>
      <Card sx={{
        width: '100%',
      }}
      >
        <Box sx={{
          display: 'flex',
        }}
        >
          <IconButton onClick={prevSlide}>
            <ArrowBackIosNewIcon />
          </IconButton>
          <Box className="carousel">
            {transitions((style, item) => (
              <animated.img
                className="carousel__item"
                style={style}
                src={item.imgUrl}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              />
            ))}
          </Box>
          <IconButton onClick={nextSlide}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>

        <Count />
      </Card>
      <Buttons />
    </>
  );
};
export default observer(Carousel);
