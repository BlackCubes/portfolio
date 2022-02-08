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

// WORK CONTAINER
export const WorkContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: -9rem;
  margin-bottom: -9rem;

  &.reverse {
    flex-direction: row-reverse;
  }
`;

export const WorkLink = styled(Link)``;
