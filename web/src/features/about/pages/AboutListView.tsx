import React, { FC } from 'react';

import LineSeparator from 'common/components/LineSeparator';
import LoadingIcon from 'common/components/LoadingIcon';
import SEO from 'common/components/SEO';
import WithLoadingOverlay from 'common/components/WithLoadingOverlay';

import {
  AboutImage,
  AboutSection,
  BeliefsSection,
  ExperienceSection,
  MoreSection,
} from 'features/about/components';

import { Col, PageContainer, Row } from './styles';

const AboutListView: FC = () => (
  <>
    <SEO
      openGraphMetaTags={[
        {
          property: 'og:description',
          content:
            'Software Engineer and Full-Stack Web Developer. Architecturing the art and mathemical model to create beautiful user experiences.',
        },
        {
          property: 'og:image',
          content: `${window.location.origin}/website-preview.png`,
        },
        {
          property: 'og:site_name',
          content: "Elias Gutierrez's Portfolio",
        },
        {
          property: 'og:title',
          content:
            'About | Elias Gutierrez, Software Engineer & Full-Stack Web Developer',
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:url',
          content: window.location.href,
        },
      ]}
      primaryMetaTags={[
        {
          name: 'description',
          content:
            'Software Engineer and Full-Stack Web Developer. Architecturing the art and mathemical model to create beautiful user experiences.',
        },
        {
          name: 'title',
          content:
            'About | Elias Gutierrez, Software Engineer & Full-Stack Web Developer',
        },
      ]}
      title="About | Elias Gutierrez, Software Engineer & Full-Stack Web Developer"
      twitterMetaTags={[
        {
          property: 'twitter:card',
          content: 'summary',
        },
        {
          property: 'twitter:creator',
          content: '@_BlackCubes_',
        },
        {
          property: 'twitter:description',
          content:
            'Software Engineer and Full-Stack Web Developer. Architecturing the art and mathemical model to create beautiful user experiences.',
        },
        {
          property: 'twitter:image',
          content: `${window.location.origin}/website-preview.png`,
        },
        {
          property: 'twitter:site',
          content: '@_BlackCubes_',
        },
        {
          property: 'twitter:title',
          content:
            'About | Elias Gutierrez, Software Engineer & Full-Stack Web Developer',
        },
        {
          property: 'twitter:url',
          content: window.location.href,
        },
      ]}
    />

    <PageContainer className="default-container navbar-footer-space">
      <WithLoadingOverlay
        contentComponent={
          <>
            <AboutSection />

            <LineSeparator />

            <Row className="default-margin-top">
              <Col>
                <AboutImage />
              </Col>

              <Col>
                <ExperienceSection />
              </Col>
            </Row>

            <Row>
              <Col>
                <BeliefsSection />
              </Col>

              <Col>
                <MoreSection />
              </Col>
            </Row>
          </>
        }
        isLoading={false}
        loaderComponent={<LoadingIcon />}
        loaderDuration={1000}
      />
    </PageContainer>
  </>
);

export default AboutListView;
