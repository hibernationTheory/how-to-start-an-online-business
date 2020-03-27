import React from "react";
import styled from "styled-components";
import Head from "next/head";
import { Navigation } from "../Navigation";

const ContentContainer = styled.div`
  padding-top: 140px;
  min-height: calc(100vh - 140px);
  padding-bottom: 80px;
`;

export const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navigation />
      <ContentContainer>
        <>{children}</>
      </ContentContainer>
    </>
  );
};
