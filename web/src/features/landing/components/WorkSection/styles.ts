import styled from 'styled-components';

interface IProjectLink {
  opacity?: number;
}

// WORK SECTION
export const Section = styled.section``;

export const SectionTitle = styled.div`
  text-align: right;
  border-right: 0.1rem dotted ${(props) => props.theme.colors.primary.hex};
  opacity: 0.7;
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

  &.reverse {
    margin-left: 0;
    margin-right: 3rem;
  }
`;
