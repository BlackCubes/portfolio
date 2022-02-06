import React, { FC } from 'react';

import { Container, PrimarySolidLine, SecondaryDottedLine } from './styles';

const LineSeparator: FC = () => (
  <Container>
    <SecondaryDottedLine />

    <PrimarySolidLine />

    <SecondaryDottedLine />
  </Container>
);

export default LineSeparator;
