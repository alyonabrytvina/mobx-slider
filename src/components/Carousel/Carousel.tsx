import React, { useEffect, useMemo, useState } from 'react';
import { Box, Card, IconButton } from '@mui/material';
import './Carousel.scss';
import { observer } from 'mobx-react';
import { useTransition, animated, useSpringRef } from 'react-spring';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { store } from '../../store/store';
import Count from '../Count/Count';
import { Buttons } from '../Buttons/Buttons';

enum Enum {
  duration = 550,
  touchNextSlide = 150,
  touchPrevSlide= -151,
}

const Carousel: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const { imagesArr } = store;

  const [direction, setDirection] = useState<string>('right');
  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);

  const transRef = useSpringRef();

  useEffect(() => {
    store.fetchData();
  }, []);

  useEffect(() => {
    transRef.start();
  }, [index]);

  const getTransition = () => ({
    from: { opacity: 1, position: 'absolute', transform: `translate3d(${direction === 'right' ? '100%' : '-100%'},0,0)` },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 1, transform: `translate3d(${direction === 'right' ? '-100%' : '100%'},0,0)` },
    config: {
      timeout: Enum.duration,
    },
  } as React.CSSProperties);

  const transitionConfig = useMemo(() => ({
    ref: transRef,
    key: null,
    ...getTransition(),
  }), [direction, getTransition]);

  const transitions = useTransition(index, transitionConfig);

  const nextSlide = () => {
    const next = index + 1 < imagesArr.length ? index + 1 : 0;
    setIndex(next);
    setDirection('right');
  };

  const prevSlide = () => {
    const prev = index === 0 ? imagesArr.length - 1 : index - 1;
    setIndex(prev);
    setDirection('left');
  };

  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > Enum.touchNextSlide) {
      nextSlide();
    }

    if (touchStart - touchEnd < Enum.touchPrevSlide) {
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
            {transitions((style, i) => (
              <animated.img
                src={imagesArr[i]?.imgUrl}
                className="carousel__item"
                style={style}
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
