import styled from 'styled-components';

export const Work = styled.article`
  max-width: 75rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2rem;
  padding-right: 2rem;
`;

export const WorkAdditionalInfo = styled.div`
  display: flex;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const WorkCategory = styled.div`
  position: relative;
  text-transform: uppercase;
  margin-right: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    top: 0.1rem;
    right: -0.3rem;
    display: block;
    height: 1.5rem;
    border-right: 0.1rem solid ${(props) => props.theme.colors.black.hex};
  }

  & p {
    font-size: 1.3rem;
    letter-spacing: 0.06rem;
  }
`;

export const WorkTitle = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const WorkCompany = styled.div``;

export const WorkDate = styled.div`
  margin-right: 1.5rem;

  & p {
    font-size: 1.3rem;
  }
`;

export const WorkDescription = styled.div`
  max-width: 54rem;
  margin-top: 4rem;
  margin-bottom: 4rem;

  & p {
    font-size: 1.8rem;
    line-height: 1.55;
  }
`;

export const WorkMainImage = styled.div`
  display: flex;
  justify-content: center;
`;

export const WorkBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6rem;
`;