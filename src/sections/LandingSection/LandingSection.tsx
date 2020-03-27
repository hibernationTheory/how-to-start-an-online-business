import React from "react";

import { useTranslation } from "src/utilities/translations";
import { MaxWidthContainer } from "src/components";
import {
  ButtonsContainer,
  Container,
  MarginBottom,
  Selection,
  Title,
  Paragraph,
} from "./components";

export const LandingSection = () => {
  const { translate } = useTranslation();

  return (
    <MaxWidthContainer>
      <Container>
        <Title>{translate("root.title")}</Title>
        <Paragraph>{translate("landingPage.description")}</Paragraph>
        <MarginBottom amount={4} />
        <ButtonsContainer>
          <Selection>{translate("landingPage.linkCurbSide")}</Selection>
          <Selection disabled>
            {translate("landingPage.linkGiftCard")}
          </Selection>
        </ButtonsContainer>
      </Container>
    </MaxWidthContainer>
  );
};
