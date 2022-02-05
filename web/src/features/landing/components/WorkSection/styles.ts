import styled from 'styled-components';

interface IProjectLink {
  opacity?: number;
}

export const Section = styled.section``;

export const SectionTitle = styled.div`
  text-align: right;
  border-right: 0.1rem dotted ${(props) => props.theme.colors.primary};
  opacity: 0.7;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WorkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

export const WorkTitle = styled.div``;

export const WorkDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WorkDescription = styled.div`
  margin-bottom: 2rem;
`;

export const WorkLinkWrapper = styled.div``;

export const WorkLink = styled.a<IProjectLink>`
  font-size: ${(props) => props.theme.fonts.paragraph};
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;

  ${({ opacity }) => opacity && `opacity: ${opacity}`}
`;
