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
