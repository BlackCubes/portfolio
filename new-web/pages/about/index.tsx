import type { NextPage } from 'next';
import Head from 'next/head';

import LineSeparator from 'common/components/LineSeparator';
import LoadingIcon from 'common/components/LoadingIcon';
import PageContainer from 'common/components/PageContainer';
import WithLoadingOverlay from 'common/components/WithLoadingOverlay';

import {
  AboutImage,
  AboutSection,
  BeliefsSection,
  Col,
  ExperienceSection,
  MoreSection,
  Row,
} from 'components/about';

import environment from 'environment';

const About: NextPage = () => (
  <>
    <Head>
      <title>About | Elias Gutierrez, Software Engineer</title>

      <meta
        name="description"
        content="Software Engineer and Full-Stack Web Developer. Architecting the art and mathematical model to create beautiful user experiences."
      />

      <meta
        property="og:site_name"
        content="Elias Gutierrez, Software Engineer"
      />

      <meta property="og:title" content="About" />

      <meta
        property="og:description"
        content="Software Engineer and Full-Stack Web Developer. Architecting the art and mathematical model to create beautiful user experiences."
      />

      <meta property="og:image" content="/website-preview.png" />

      <meta property="og:type" content="website" />

      <meta property="og:url" content={`${environment.webRoute}/about`} />

      <meta property="twitter:title" content="About" />

      <meta
        property="twitter:description"
        content="Software Engineer and Full-Stack Web Developer. Architecting the art and mathematical model to create beautiful user experiences."
      />

      <meta property="twitter:image" content="/website-preview.png" />

      <meta property="twitter:card" content="summary" />

      <meta property="twitter:creator" content="@_BlackCubes_" />

      <meta property="twitter:site" content="@_BlackCubes_" />

      <meta property="twitter:url" content={`${environment.webRoute}/about`} />
    </Head>

    <PageContainer>
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

export default About;
