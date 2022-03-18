import { Link } from 'react-router-dom';
import styled from 'styled-components';

// WORK LIST
export const Section = styled.section``;

export const SectionTitle = styled.div`
  text-align: right;
  border-right: ${({ theme }) =>
    `0.1rem dotted rgba(${theme.colors.primary.rgb}, 0.7)`};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4rem;

  @media ${({ theme }) => theme.responsive.below1199} {
    padding-top: 2.5rem;
  }
`;

// WORK CONTAINER
export const WorkContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  padding-left: 17rem;

  &.reverse {
    flex-direction: row-reverse;
    padding-right: 17rem;
    padding-left: 0;

    @media ${({ theme }) => theme.responsive.below1199} {
      padding-right: 10rem;
    }

    @media ${({ theme }) => theme.responsive.below599} {
      padding-right: 0;
    }
  }

  @media ${({ theme }) => theme.responsive.below1199} {
    padding-left: 10rem;
  }

  @media ${({ theme }) => theme.responsive.below599} {
    display: block;
    margin-top: 5rem;
    margin-bottom: 2rem;
    padding-left: 0;
  }
`;

export const WorkLink = styled(Link)`
  text-decoration: none;
`;
