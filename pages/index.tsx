import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import Testimonials from 'views/HomePage/Testimonials';

export default function Homepage() {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <Partners />
          <BasicSection imageUrl="/enbiz_business_growth.png" title="Business Growth Tracks" overTitle="Enlarge">
            <p>
              Having a business growth track provides businesses with a structured framework, strategic guidance, and a roadmap to achieve
              sustainable growth. It helps businesses make informed decisions, allocate resources effectively, manage risks, and track
              progress towards their growth goals.
            </p>
          </BasicSection>
          <BasicSection imageUrl="/enbiz_join_organization.png" title="Join Associations" overTitle="Engage" reversed>
            <p>
              Joining a business association provides businesses with a multitude of advantages. It offers valuable networking
              opportunities, allowing companies to connect with industry professionals, potential clients, suppliers, and partners. Through
              these connections, businesses can forge mutually beneficial relationships, collaborate on projects, gain access to new
              opportunities, and expand their professional network.
            </p>
          </BasicSection>
          <BasicSection imageUrl="/enbiz_ai_companion.png" title="AI Business Companion" overTitle="Enhance">
            <p>
              AI-powered chatbots and virtual assistants provide efficient and personalized customer service, ensuring round-the-clock
              availability and quick responses to inquiries, thereby enhancing customer satisfaction and loyalty.
            </p>
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <FeaturesGallery />
          <Features />
          <Testimonials />
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;
