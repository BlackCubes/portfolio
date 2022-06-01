import React, { FC, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Paragraph from 'common/typography/Paragraph';

import {
  Button,
  Container,
  DescriptionWrapper,
  ImageStyled,
  ImageWrapper,
} from './styles';

const NotFound: FC = () => {
  const router = useRouter();

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
    <Container animate={containerAnimateControls} ref={containerRef}>
      <ImageWrapper>
        <ImageStyled
          alt="An image that shows the website logo and a 404 code wrapped in a comic bubble"
          layout="fill"
          src="/not-found.png"
        />
      </ImageWrapper>

      <DescriptionWrapper>
        <Paragraph>
          Something went wrong, or this page doesn&apos;t exist.
        </Paragraph>
      </DescriptionWrapper>

      <Button onClick={() => router.back()}>Go back</Button>
    </Container>
  );
};

export default NotFound;
