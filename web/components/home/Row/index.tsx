import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-direction: row;

  @media ${({ theme }) => theme.responsive.below899} {
    flex-direction: column;
  }
`;

export default Row;
