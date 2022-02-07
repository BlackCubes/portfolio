import styled from 'styled-components';

// TALK SECTION
export const Section = styled.section``;

export const SectionTitle = styled.div`
  position: relative;
  text-align: center;

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-left: ${(props) =>
      `0.1rem dotted rgba(${props.theme.colors.primary.rgb}, 0.7)`};
  }

  &:before {
    bottom: 39rem;
    left: 94rem;
    transform: rotate(-45deg);
  }

  &:after {
    left: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  padding-top: 4rem;
`;

// TALK CONTAINER
export const TalkContainerStyle = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

export const TalkDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &.reverse {
    flex-direction: column-reverse;
    padding-top: 10rem;
  }
`;

export const TalkImageWrapper = styled.div`
  margin-bottom: 2rem;

  &.reverse {
    margin-top: 2rem;
    margin-bottom: 0;
  }
`;

export const TalkTitleLink = styled.a`
  padding-left: 7rem;
  padding-right: 7rem;
  text-decoration: none;
`;
