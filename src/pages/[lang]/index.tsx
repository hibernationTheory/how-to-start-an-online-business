import React from "react";

import { Layout, withLocale } from "src/components";
import { useTranslation } from "src/utilities/translations";
import { LandingSection } from "src/sections";

const IndexPage = () => {
  const { translate } = useTranslation();

  return (
    <Layout title={translate("root.title")}>
      <LandingSection />
    </Layout>
  );
};

export default withLocale(IndexPage);
