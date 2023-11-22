import React, { useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import { components } from "ComponentRenderer.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, Content2Xl, ContentWithVerticalPadding } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { LogoLink } from "components/headers/light.js";
import { SectionHeading as HeadingBase } from "components/misc/Headings";
import { SectionDescription as DescriptionBase } from "components/misc/Typography";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";

import { ReactComponent as CheckboxIcon } from "feather-icons/dist/icons/check-circle.svg";

import heroScreenshotImageSrc from "images/demo/MainLandingPageHero.png";
import logo from "images/icon.png";

/* Hero */
const Row = tw.div`flex`;
const NavRow = tw(Row)`flex flex-col lg:flex-row items-center justify-between`;
const NavLink = tw.a`mt-4 lg:mt-0 transition duration-300 font-medium pb-1 border-b-2 mr-12 text-gray-700 border-gray-400 hocus:border-gray-700`;
const PrimaryNavLink = tw(
  NavLink
)`text-gray-100 bg-primary-500 px-6 py-3 border-none rounded hocus:bg-primary-900 focus:shadow-outline mt-6 md:mt-4 lg:mt-0`;
const HeroRow = tw(Row)`flex-col lg:flex-row justify-between items-center pt-8 lg:pt-12 pb-16 max-w-screen-2xl mx-auto flex-wrap`;

const Column = tw.div`flex-1`;

const TextColumn = tw(Column)`mx-auto lg:mr-0 max-w-2xl lg:max-w-xl xl:max-w-2xl flex-shrink-0`;
const Heading = tw(HeadingBase)`text-center lg:text-left text-primary-900 leading-snug`;
const Description = tw(
  DescriptionBase
)`mt-4 text-center lg:text-left lg:text-base text-gray-700 max-w-lg mx-auto lg:mx-0`;
const Actions = tw.div`flex flex-col sm:flex-row justify-center lg:justify-start`;
const ActionButton = tw(
  AnchorLink
)`px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300 mt-12 inline-block tracking-wide text-center px-10 py-4 font-semibold tracking-normal`;
const PrimaryButton = tw(ActionButton)``;
const FeatureList = tw.ul`mt-6 leading-loose flex flex-wrap max-w-xl mx-auto lg:mx-0`;
const Feature = tw.li`mt-2 flex items-center flex-shrink-0 w-full sm:w-1/2 justify-center lg:justify-start`;
const FeatureIcon = tw(CheckboxIcon)`w-5 h-5 text-primary-500`;
const FeatureText = tw.p`ml-2 font-medium text-gray-700`;
const ImageColumn = tw(Column)`mx-auto lg:mr-0 relative mt-16 lg:mt-0 lg:ml-8`;
const ImageContainer = tw.div``;
const Image = tw.img`max-w-full rounded-t sm:rounded`;

const SectionContainer = tw(ContentWithVerticalPadding)``;
const SectionHeading = tw(HeadingBase)`text-primary-900`;
const SectionDescription = tw(DescriptionBase)`text-center mx-auto text-gray-600 max-w-4xl`;

const PreviewCards = tw.div`flex flex-wrap -mr-12`;
const PreviewCardContainer = tw.div`mt-24 mx-auto md:mx-0 max-w-lg w-full md:w-1/2 lg:w-1/3 pr-12`;
const PreviewCard = tw(motion.a)`block rounded-lg shadow-raised`;
const PreviewCardImageContainer = tw.div`rounded-t-lg border-0 border-b-0`;
const PreviewCardImage = styled(motion.div)`
  ${props => css`background-image: url("${props.$imageSrc}");`}
  ${tw`h-128 md:h-144 bg-cover bg-left-top`}
`;
const PreviewButton = tw(PrimaryButtonBase)`w-full rounded-b-lg rounded-t-none py-5 font-semibold`;

export default ({
  features = null,
  primaryButtonUrl = "#landingPageDemos",
  primaryButtonText = "Explorer les modèles",
  buttonRoundedCss = "",
  landingPages = components.landingPages,
  innerPages = components.innerPages,
  blocks = components.blocks,
  heading = "Des modèles GRATUITS de CV en ligne !",
  description = "Personnalisable et blablablabla loremp ipsum voila voila"
}) => {
  /*
   * Using gtag like this because we only want to use Google Analytics when Main Landing Page is rendered
   * Remove this part and the the gtag script inside public/index.html if you dont need google analytics
   */
  useEffect(() => {
    window.gtag("js", new Date());
    window.gtag("config", "UA-45799926-9");
  }, [])

  const previewImageAnimationVariants = {
    rest: {
      backgroundPositionY: "0%"
    },
    hover: {
      backgroundPositionY: "100%",
      transition: { type: "tween", ease: "linear", duration: 5 }
    }
  };

  const noOfLandingPages = Object.keys(landingPages).length;
  
  features = features || [
    `${noOfLandingPages} Modèles de CV disponible`,
  ];

  return (
    <AnimationRevealPage disabled>
      <Container tw="bg-gray-100 -mx-8 -mt-8 pt-8 px-8">
        <Content2Xl>
          <NavRow>
            <LogoLink href="/components/innerPages/AboutUsPage">
              <img src={logo} alt="" />
              Créateurs En Vue
            </LogoLink>
            <div tw="flex flex-wrap justify-center lg:justify-end items-center -mr-12">
              {/* <NavLink target="_blank" href="#">
                License & Usage
              </NavLink> */}
              <div tw="md:hidden flex-100 h-0"></div>
              <PrimaryNavLink target="_blank" href="/components/innerPages/SignupPage">
                S'inscrire
              </PrimaryNavLink>
            </div>
          </NavRow>
          <HeroRow>
            <TextColumn>
              <Heading as="h1">{heading}</Heading>
              <Description>{description}</Description>
              <FeatureList>
                {features.map((feature, index) => (
                  <Feature key={index}>
                    <FeatureIcon />
                    <FeatureText>{feature}</FeatureText>
                  </Feature>
                ))}
              </FeatureList>
              <Actions>
                <PrimaryButton href={primaryButtonUrl} css={buttonRoundedCss}>
                  {primaryButtonText}
                </PrimaryButton>
              </Actions>
            </TextColumn>
            <ImageColumn>
              <ImageContainer>
                <Image src={heroScreenshotImageSrc} />
              </ImageContainer>
            </ImageColumn>
          </HeroRow>
          <SectionContainer id="landingPageDemos">
            <SectionHeading>Modèles CV</SectionHeading>
            <SectionDescription>
              Avec {noOfLandingPages} modèles de CVs, cliquez sur "Commencer avec ce modèle" pour créer votre propre CV !
            </SectionDescription>
            <PreviewCards>
              {Object.entries(landingPages).map(([pageName, page], index) => (
                <PreviewCardContainer key={index}>
                  <PreviewCard initial="rest" animate="rest" whileHover="hover" href={page.url} target="_blank">
                    <PreviewCardImageContainer>
                      <PreviewCardImage
                        transition={{ type: "tween" }}
                        variants={previewImageAnimationVariants}
                        $imageSrc={page.imageSrc}
                      />
                    </PreviewCardImageContainer>
                    <PreviewButton>Commencer avec ce modèle</PreviewButton>
                  </PreviewCard>
                </PreviewCardContainer>
              ))}
            </PreviewCards>
          </SectionContainer>

        </Content2Xl>
      </Container>
    </AnimationRevealPage>
  );
};
