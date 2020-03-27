import React from "react";

import { Layout, withLocale } from "src/components";
import { useTranslation } from "src/utilities/translations";
import { ContentSection } from "src/sections";

const ContentPage = () => {
  const { translate } = useTranslation();

  return (
    <Layout title={translate("root.title")}>
      <ContentSection />
    </Layout>
  );
};

export default withLocale(ContentPage);
