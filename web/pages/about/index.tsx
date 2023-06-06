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
      <title>About | Elias Gutierrez, Software Developer</title>

      <meta
        name="description"
        content="Learn more about Elias Gutierrez. Elias is a software developer that loves to help others while learning on new technologies"
      />

      <meta
        property="og:site_name"
        content="Elias Gutierrez, Software Developer"
      />

      <meta property="og:title" content="About" />

      <meta
        property="og:description"
        content="Learn more about Elias Gutierrez. Elias is a software developer that loves to help others while learning on new technologies"
      />

      <meta
        property="og:image"
        content={`${environment.webRoute}/website-preview.png`}
      />

      <meta property="og:type" content="website" />

      <meta property="og:url" content={`${environment.webRoute}/about`} />

      <meta property="twitter:title" content="About" />

      <meta
        property="twitter:description"
        content="Learn more about Elias Gutierrez. Elias is a software developer that loves to help others while learning on new technologies"
      />

      <meta
        property="twitter:image"
        content={`${environment.webRoute}/website-preview.png`}
      />

      <meta property="twitter:card" content="summary" />

      <meta property="twitter:creator" content="@_BlackCubes_" />

      <meta property="twitter:site" content="@_BlackCubes_" />

      <meta property="twitter:url" content={`${environment.webRoute}/about`} />

      <link
        rel="canonical"
        href={`${environment.webRoute}/about`}
        key="canonical"
      />
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
