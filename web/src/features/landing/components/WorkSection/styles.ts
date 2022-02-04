import styled from 'styled-components';

interface IProjectLink {
  opacity?: number;
}

export const Section = styled.section``;

export const SectionTitle = styled.div`
  border-right: 0.1rem solid ${(props) => props.theme.colors.primary};
  opacity: 0.7;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProjectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

export const ProjectTitle = styled.div``;

export const ProjectDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProjectDescription = styled.div`
  margin-bottom: 2rem;
`;

export const ProjectLinkWrapper = styled.div``;

export const ProjectLink = styled.a<IProjectLink>`
  font-size: ${(props) => props.theme.fonts.paragraph};
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};

  ${({ opacity }) => opacity && `opacity: ${opacity}`}
`;
