import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 150%;
  margin-left: -25%;

  &.positive-rotate {
    transform: rotate(4deg);
  }

  &.negative-rotate {
    transform: rotate(-4deg);
  }
`;

export const PrimarySolidLine = styled.div`
  width: 100%;
  height: 0.2rem;
  background-color: ${(props) =>
    `rgba(${props.theme.colors.primary.rgb}, 0.5)`};
`;

export const SecondaryDottedLine = styled.div`
  width: 20%;
  border: ${(props) =>
    `0.1rem dotted rgba(${props.theme.colors.secondary.rgb}, 0.3)`};
`;
