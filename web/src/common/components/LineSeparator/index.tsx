import React, { FC } from 'react';

import { Container, PrimarySolidLine, SecondaryDottedLine } from './styles';

const LineSeparator: FC = () => (
  <Container>
    <SecondaryDottedLine />

    <PrimarySolidLine className="default-container" />

    <SecondaryDottedLine />
  </Container>
);

export default LineSeparator;
