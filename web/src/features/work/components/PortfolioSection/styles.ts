import { Link } from 'react-router-dom';
import styled from 'styled-components';

// PORTFOLIO SECTION
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

// PORTFOLIO CONTAINER
export const PortfolioContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 9rem;
  margin-bottom: 9rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const PortfolioDescription = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 2rem 1rem;
  text-align: right;
`;

export const PortfolioImageWrapper = styled.div``;

export const PortfolioLink = styled(Link)``;

export const PortfolioTitle = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  padding-left: 1rem;
`;
