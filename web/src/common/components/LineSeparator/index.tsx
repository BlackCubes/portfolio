import React, { FC } from 'react';

import { Container, PrimarySolidLine, SecondaryDottedLine } from './styles';

const LineSeparator: FC = () => (
  <Container className="non-default-container">
    <SecondaryDottedLine />

    <PrimarySolidLine />

    <SecondaryDottedLine />
  </Container>
);

export default LineSeparator;
