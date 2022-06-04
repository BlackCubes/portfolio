import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

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

  @media ${({ theme }) => theme.responsive.below899} {
    max-width: 100% !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
`;
