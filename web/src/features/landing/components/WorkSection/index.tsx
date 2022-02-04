import React, { FC, useState } from 'react';

import HeadingSecondary from 'common/typography/HeadingSecondary';
import HeadingTertiary from 'common/typography/HeadingTertiary';
import Paragraph from 'common/typography/Paragraph';

import {
  Container,
  ProjectContainer,
  ProjectDescription,
  ProjectDescriptionContainer,
  ProjectLink,
  ProjectLinkWrapper,
  ProjectTitle,
  Section,
  SectionTitle,
} from './styles';

const WorkSection: FC = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Section>
      <SectionTitle>
        <HeadingSecondary letterSpacing={1.6} opacity={0.8}>
          Work
        </HeadingSecondary>
      </SectionTitle>

      <Container>
        <ProjectContainer
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <ProjectTitle>
            <HeadingTertiary
              {...(isHover && {
                opacity: 0.8,
                textDecoration: 'underline',
              })}
            >
              Kovvi
            </HeadingTertiary>
          </ProjectTitle>

          <ProjectDescriptionContainer>
            <ProjectDescription>
              <Paragraph
                {...(isHover && {
                  opacity: 0.8,
                })}
              >
                A cross-platform mobile app built with React Native that allows
                users to search COVID-19 data in a region, and view vaccine
                trial data.
              </Paragraph>
            </ProjectDescription>

            <ProjectLinkWrapper>
              <ProjectLink
                {...(isHover && {
                  opacity: 0.7,
                })}
              >
                View
              </ProjectLink>
            </ProjectLinkWrapper>
          </ProjectDescriptionContainer>
        </ProjectContainer>

        <ProjectContainer
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <ProjectTitle>
            <HeadingTertiary
              {...(isHover && {
                opacity: 0.8,
                textDecoration: 'underline',
              })}
            >
              The Toad Tribune
            </HeadingTertiary>
          </ProjectTitle>

          <ProjectDescriptionContainer>
            <ProjectDescription>
              <Paragraph
                {...(isHover && {
                  opacity: 0.8,
                })}
              >
                A web app built with React and Node.js to provide top headline
                news from around the world: Politics, sports, stonks, movies,
                animals and your local weather.
              </Paragraph>
            </ProjectDescription>

            <ProjectLinkWrapper>
              <ProjectLink
                {...(isHover && {
                  opacity: 0.7,
                })}
              >
                View
              </ProjectLink>
            </ProjectLinkWrapper>
          </ProjectDescriptionContainer>
        </ProjectContainer>

        <ProjectContainer
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <ProjectTitle>
            <HeadingTertiary
              {...(isHover && {
                opacity: 0.8,
                textDecoration: 'underline',
              })}
            >
              The Pokédex App
            </HeadingTertiary>
          </ProjectTitle>

          <ProjectDescriptionContainer>
            <ProjectDescription>
              <Paragraph
                {...(isHover && {
                  opacity: 0.8,
                })}
              >
                A web app built with React that checks the type matchups of your
                Pokémon vs. any other Pokémon. With over 900 Pokémon in the
                Pokémon API database, the combinations are almost endless.
              </Paragraph>
            </ProjectDescription>

            <ProjectLinkWrapper>
              <ProjectLink
                {...(isHover && {
                  opacity: 0.7,
                })}
              >
                View
              </ProjectLink>
            </ProjectLinkWrapper>
          </ProjectDescriptionContainer>
        </ProjectContainer>
      </Container>
    </Section>
  );
};

export default WorkSection;
