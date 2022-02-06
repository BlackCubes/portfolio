import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 150%;
  margin-left: -25%;
  transform: rotate(-4deg);
`;

export const PrimarySolidLine = styled.div`
  width: 80%;
  border: ${(props) =>
    `0.1rem solid rgba(${props.theme.colors.primary.rgb}, 0.7)`};
`;

export const SecondaryDottedLine = styled.div`
  width: 20%;
  border: ${(props) =>
    `0.1rem dotted rgba(${props.theme.colors.secondary.rgb}, 0.3)`};
`;
