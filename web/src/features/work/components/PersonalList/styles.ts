import { Link } from 'react-router-dom';
import styled from 'styled-components';

// PERSONAL LIST
export const Section = styled.section``;

export const SectionTitle = styled.div`
  text-align: right;
  border-right: ${(props) =>
    `0.1rem dotted rgba(${props.theme.colors.primary.rgb}, 0.7)`};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4rem;

  @media ${({ theme }) => theme.responsive.below1199} {
    padding-top: 2.5rem;
  }
`;

// PERSONAL CONTAINER
export const PersonalContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 9rem;
  margin-bottom: 9rem;
  padding-top: 1rem;
  padding-bottom: 1rem;

  @media ${({ theme }) => theme.responsive.below899} {
    flex-direction: column-reverse;
    align-items: center;
    margin-top: 4rem;
    margin-bottom: 4rem;
    padding-right: 5rem;
    padding-left: 5rem;
  }
`;

export const PersonalDescription = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 2rem 1rem;
  text-align: right;

  @media ${({ theme }) => theme.responsive.below899} {
    display: block;
    text-align: center;
  }
`;

export const PersonalImageWrapper = styled.div`
  & img {
    width: 60%;
  }

  @media ${({ theme }) => theme.responsive.below899} {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
`;

export const PersonalLink = styled(Link)``;

export const PersonalTitle = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  padding-left: 1rem;

  @media ${({ theme }) => theme.responsive.below899} {
    display: block;
    width: 100%;
    padding-left: 0;
    text-align: center;
  }
`;
