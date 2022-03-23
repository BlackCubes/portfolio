import React, { FC } from 'react';

import { Container, PrimarySolidLine } from './styles';

export interface ILineSeparator {
  rotateClass?: string;
}

const LineSeparator: FC<ILineSeparator> = ({ rotateClass }) => (
  <Container className={rotateClass}>
    <PrimarySolidLine className="default-container" />
  </Container>
);

export default LineSeparator;
