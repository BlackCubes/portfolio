import styled from 'styled-components';

interface IProjectLink {
  opacity?: number;
}

export const Section = styled.section``;

export const SectionTitle = styled.div`
  text-align: right;
  border-right: 0.1rem dotted ${(props) => props.theme.colors.primary.hex};
  opacity: 0.7;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WorkContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

export const WorkTitle = styled.div`
  width: 35%;
`;

export const WorkDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 3rem 1.5rem;
`;

export const WorkDescription = styled.div`
  margin-bottom: 2rem;
`;

export const WorkLinkWrapper = styled.div`
  text-align: right;
`;

export const WorkLink = styled.a<IProjectLink>`
  font-size: ${(props) => props.theme.fonts.paragraph};
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary.hex};
  text-decoration: none;

  ${({ opacity }) => opacity && `opacity: ${opacity}`}
`;

export const WorkImageWrapper = styled.div`
  width: 18%;
  margin-left: 3rem;
`;
