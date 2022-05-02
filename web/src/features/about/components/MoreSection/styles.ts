import styled from 'styled-components';

export const Section = styled.section`
  margin-top: 12rem;
  padding-left: 12rem;
  text-align: right;

  @media ${({ theme }) => theme.responsive.below1199} {
    padding-left: 3rem;
  }

  @media ${({ theme }) => theme.responsive.below899} {
    margin-top: 0;
    padding-right: 3rem;
  }

  @media ${({ theme }) => theme.responsive.below599} {
    padding-right: 0;
    padding-left: 0;
  }
`;

export const SectionTitle = styled.div`
  margin-bottom: 2.5rem;

  @media ${({ theme }) => theme.responsive.below599} {
    margin-bottom: 1.75rem;
  }

  @media ${({ theme }) => theme.responsive.below479} {
    margin-bottom: 1.5rem;
  }
`;

export const ParagraphWrapper = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  line-height: 1.5;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media ${({ theme }) => theme.responsive.below899} {
    line-height: 1.8;
  }

  @media ${({ theme }) => theme.responsive.below599} {
    margin-top: 1.75rem;
    margin-bottom: 1.75rem;
  }

  @media ${({ theme }) => theme.responsive.below479} {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  @media ${({ theme }) => theme.responsive.below379} {
    line-height: 1.5;
  }
`;

export const Italic = styled.i``;

export const ExternalLink = styled.a`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary.hex};
  text-decoration: none;
  word-break: break-all;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
    opacity: 0.9;
  }
`;
