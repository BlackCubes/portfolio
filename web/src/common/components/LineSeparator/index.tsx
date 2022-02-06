import React, { FC } from 'react';

import { Container, PrimarySolidLine, SecondaryDottedLine } from './styles';

export interface ILineSeparator {
  rotateClass?: string;
}

const LineSeparator: FC<ILineSeparator> = ({ rotateClass }) => (
  <Container className={rotateClass}>
    <SecondaryDottedLine />

    <PrimarySolidLine className="default-container" />

    <SecondaryDottedLine />
  </Container>
);

export default LineSeparator;
