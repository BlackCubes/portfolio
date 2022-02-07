import { Link } from 'react-router-dom';
import styled from 'styled-components';

// WORK SECTION
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
`;

export const ExploreMoreWrapper = styled.div`
  margin-top: 5rem;
  text-align: center;
`;

export const ExploreMoreLink = styled(Link)`
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
    opacity: 0.9;
  }
`;

// WORK CONTAINER
export const WorkContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 9rem;
  margin-bottom: 9rem;
  padding-top: 1rem;
  padding-bottom: 1rem;

  &.reverse {
    flex-direction: row-reverse;
  }
`;

export const WorkTitle = styled.div`
  width: 35%;

  &.reverse {
    text-align: right;
  }
`;

export const WorkDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem 4.5rem;
`;

export const WorkDescription = styled.div`
  margin-bottom: 2rem;

  &.reverse {
    text-align: right;
  }
`;

export const WorkLinkWrapper = styled.div`
  text-align: right;

  &.reverse {
    text-align: left;
  }
`;

export const WorkLink = styled(Link)`
  font-size: ${(props) => props.theme.fonts.paragraph};
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary.hex};
  text-decoration: none;

  &:hover {
    opacity: 0.7;
  }
`;

export const WorkImageWrapper = styled.div`
  width: 18%;
  margin-left: 3rem;

  &.reverse {
    margin-left: 0;
    margin-right: 3rem;
  }
`;
