import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import notFoundPic from 'assets/img/not-found.png';

import Paragraph from 'common/typography/Paragraph';

import {
  Button,
  Container,
  DescriptionWrapper,
  Image,
  ImageWrapper,
} from './styles';

const NotFound: FC = () => {
  const navigate = useNavigate();

  const containerAnimateControls = useAnimation();

  const { inView: containerInView, ref: containerRef } = useInView();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (containerInView) {
        containerAnimateControls.start('visible');
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [containerAnimateControls, containerInView]);

  return (
    <Container
      animate={containerAnimateControls}
      className="not-found"
      ref={containerRef}
    >
      <ImageWrapper>
        <Image
          alt="An image that shows the website logo and a 404 code wrapped in a comic bubble"
          src={notFoundPic}
        />
      </ImageWrapper>

      <DescriptionWrapper>
        <Paragraph>
          Something went wrong, or this page doesn&apos;t exist.
        </Paragraph>
      </DescriptionWrapper>

      <Button onClick={() => navigate(-1)}>Go back</Button>
    </Container>
  );
};

export default NotFound;
