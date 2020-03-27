import React from "react";

import { useTranslation } from "src/utilities/translations";
import { MaxWidthContainer } from "src/components";
import {
  Container,
  MarkupContainer,
  MarginBottom,
  Subtitle,
  Title,
} from "./components";

function createMarkup(content) {
  return { __html: content };
}

export const ContentSection = () => {
  const { translate } = useTranslation();

  return (
    <MaxWidthContainer>
      <Container>
        <Title>{translate("content.title")}</Title>
        <Subtitle>
          <a href="https://www.shopify.com/blog/buy-online-pickup-curbside">
            Original Link by Katie Cerar
          </a>
        </Subtitle>
        <MarginBottom amount={6} />

        <MarkupContainer>
          <div
            dangerouslySetInnerHTML={createMarkup(
              translate("content.allContent")
            )}
          >
            {}
          </div>
        </MarkupContainer>
      </Container>
    </MaxWidthContainer>
  );
};
