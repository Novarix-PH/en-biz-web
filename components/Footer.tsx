import NextLink from 'next/link';
import { FacebookIcon, LinkedinIcon, TwitterIcon } from 'react-share';
import styled from 'styled-components';
import Container from 'components/Container';
import { media } from 'utils/media';

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <BottomBar>
          <ShareBar>
            <NextLink href="#" passHref>
              <a>
                <TwitterIcon size={50} round={true} />
              </a>
            </NextLink>

            <NextLink href="#" passHref>
              <a>
                <FacebookIcon size={50} round={true} />
              </a>
            </NextLink>

            <NextLink href="#" passHref>
              <a>
                <LinkedinIcon size={50} round={true} />
              </a>
            </NextLink>
          </ShareBar>
          <Copyright>&copy; Copyright 2023</Copyright>
        </BottomBar>
      </Container>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  padding-top: 1rem;
  padding-bottom: 4rem;
  background: rgb(var(--secondary));
  color: rgb(var(--textSecondary));
`;

const ShareBar = styled.div`
  & > *:not(:first-child) {
    margin-left: 1rem;
  }
`;

const Copyright = styled.p`
  font-size: 1.5rem;
  margin-top: 0.5rem;
`;

const BottomBar = styled.div`
  margin-top: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media('<=tablet')} {
    flex-direction: column;
  }
`;
