import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";

import chefIconImageSrc from "images/chef-icon.svg";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import shopIconImageSrc from "images/shop-icon.svg";

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={<>Doe, John <HighlightedText>Cuisinier</HighlightedText></>}
        description="Tout d'abord commis dans le restaurant Gordon Ramsay Bar & Grill - Park Walk situé à Londres, je recherche ma prochaine épreuve dans le monde culinaire pour atteindre l'étoile Michelin."
        imageSrc="https://www.workbc.ca/sites/default/files/styles/hero_image/public/NTI5NzE_fjhrzONXOUH0HUAZ-6322-NOC.jpg?itok=VGFcMoDE"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="lien"
      />
      <MainFeature
        subheading={<Subheading>2012-2014</Subheading>}
        heading={
          <>
            Cuisinier
            <wbr /> <HighlightedText>Buffalo Grills</HighlightedText>
          </>
        }
        description={
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
            <br />
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Latest Offers"
        imageSrc={
          "https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        }
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      <MainFeature
        subheading={<Subheading>2010-2012</Subheading>}
        heading={
          <>
            Commis de Cuisine
            <wbr /> <HighlightedText>Park & Grills</HighlightedText>
          </>
        }
        description={
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
            <br />
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Latest Offers"
        imageSrc={
          "https://www.maran-pro.com/images/Hints-for-a-better-restaurant-kitchen-staff-structure-website.jpg"
        }
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      {/* <TabGrid
        heading={
          <>
            Checkout our <HighlightedText>menu.</HighlightedText>
          </>
        }
      /> */}
      <Features
        heading={
          <>
            Mes <HighlightedText>Formations</HighlightedText>
          </>
        }
        cards={[
          {
            imageSrc: shopIconImageSrc,
            title: "Harvard",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
          },
          {
            imageSrc: chefIconImageSrc,
            title: "Gordon Ramsay Academy",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
          },
          {
            imageSrc: celebrationIconImageSrc,
            title: "Ynov Cuisine",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
          }
        ]}

        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />
      <MainFeature2
        heading={<>Mes <HighlightedText>Compétences</HighlightedText></>}
        statistics={[
          {
            value: "Curiosité",
          },
          {
            value: "Energétique"
          },
          {
            value: "Organisé"
          },
          {
            value: "Autre"
          }
        ]}
        primaryButtonText="Order Now"
        primaryButtonUrl="https://order.now.com"
        imageInsideDiv={false}
        imageSrc="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzNzI2fQ&auto=format&fit=crop&w=768&q=80"
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/2 h-auto`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={true}
      />
    </AnimationRevealPage>
  );
}
