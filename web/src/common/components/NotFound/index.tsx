import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

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

  return (
    <Container>
      <ImageWrapper>
        <Image
          alt="An image that shows the website logo and a 404 code wrapped in a comic bubble"
          src={notFoundPic}
        />
      </ImageWrapper>

      <DescriptionWrapper>
        <Paragraph>
          Something went wrong, or this page doesn&apos;t exist anymore.
        </Paragraph>
      </DescriptionWrapper>

      <Button onClick={() => navigate(-1)}>Go back</Button>
    </Container>
  );
};

export default NotFound;
