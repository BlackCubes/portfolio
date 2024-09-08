import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import { nextReduxWrapper } from 'app';
import {
  getArticles,
  getRunningOperationPromises as getArticlesRunningOperationPromises,
} from 'app/api/articleExtendedApi';
import {
  getWorksByCategory,
  getRunningOperationPromises as getWorksRunningOperationPromises,
} from 'app/api/workExtendedApi';

import LineSeparator from 'common/components/LineSeparator';
import LoadingIcon from 'common/components/LoadingIcon';
import PageContainer from 'common/components/PageContainer';
import WithLoadingOverlay from 'common/components/WithLoadingOverlay';

import {
  AboutImage,
  BeliefsSection,
  Col,
  ExperienceSection,
  HeroBanner,
  InitialSiteTransition,
  MoreSection,
  Row,
} from 'components/home';

import environment from 'environment';

interface IHome {
  isFirstMount: boolean;
}

export const getStaticProps = nextReduxWrapper.getStaticProps(
  (store) => async () => {
    store.dispatch(
      getArticles.initiate({
        category: 0,
        limit: 3,
        tags: [],
      })
    );

    await Promise.all(getArticlesRunningOperationPromises());

    store.dispatch(
      getWorksByCategory.initiate({
        category: 'Work',
        limit: 5,
      })
    );

    await Promise.all(getWorksRunningOperationPromises());

    return {
      props: {},
    };
  }
);

const Home: NextPage<IHome> = ({ isFirstMount }) => {
  const [finishIsFirstMount, setFinishIsFirstMount] = useState(isFirstMount);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isFirstMount) setFinishIsFirstMount(isFirstMount);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isFirstMount]);

  return (
    <>
      <Head>
        <title>Elias Gutierrez, Software Engineer</title>

        <meta
          name="description"
          content="Full-Stack Software Engineer. Drinking coffee while learning and improving on new and existing tech."
        />

        <meta
          property="og:site_name"
          content="Elias Gutierrez, Software Engineer"
        />

        <meta property="og:url" content={environment.webRoute} />

        <meta
          property="og:title"
          content="Elias Gutierrez, Software Engineer"
        />

        <meta
          property="og:description"
          content="Full-Stack Software Engineer. Drinking coffee while learning and improving on new and existing tech."
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:image"
          content={`${environment.webRoute}/website-preview.png`}
        />

        <meta property="twitter:card" content="summary_large_image" />

        <meta property="twitter:url" content={environment.webRoute} />

        <meta
          property="twitter:title"
          content="Elias Gutierrez, Software Engineer"
        />

        <meta
          property="twitter:description"
          content="Full-Stack Software Engineer. Drinking coffee while learning and improving on new and existing tech."
        />

        <meta
          property="twitter:image"
          content={`${environment.webRoute}/website-preview.png`}
        />

        <link
          rel="canonical"
          href={`${environment.webRoute}`}
          key="canonical"
        />
      </Head>

      <PageContainer extraClassName="landing-list-page" isFirstMount={false}>
        <WithLoadingOverlay
          contentComponent={
            <>
              {finishIsFirstMount && (
                <InitialSiteTransition isFirstMount={isFirstMount} />
              )}

              <HeroBanner />

              <LineSeparator />

              <Row className="default-margin-top">
                <Col>
                  <AboutImage
                    customClassName="home-page home-page--image-1"
                    imgAlt="Elias at GICHD"
                    imgSrc="/about-pic1.jpeg"
                  />
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
                  <AboutImage
                    customClassName="home-page home-page--image-2"
                    imgAlt="Elias with good friends"
                    imgSrc="/about-pic3.jpg"
                  />
                </Col>
              </Row>

              <Row>
                <Col>{/* <BeliefsSection /> */}</Col>

                <Col>
                  <MoreSection />
                </Col>
              </Row>
            </>
          }
          isLoading={false}
          loaderDuration={1000}
          {...(!finishIsFirstMount && {
            loaderComponent: <LoadingIcon />,
          })}
        />
      </PageContainer>
    </>
  );
};

export default Home;
