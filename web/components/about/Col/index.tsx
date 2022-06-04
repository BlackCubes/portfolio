import styled from 'styled-components';

const Col = styled.div`
  width: 50%;

  @media ${({ theme }) => theme.responsive.below899} {
    width: 100%;
  }
`;

export default Col;
