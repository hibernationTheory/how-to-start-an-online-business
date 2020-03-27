import React from "react";
import styled from "styled-components";

const MaxWidthContainerOuter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const MaxWidthContainerInner = styled.div`
  ${props => {
    return `
      max-width: ${props.width};
      width: 100%;
  `;
  }}
`;

export const MaxWidthContainer = ({ children, width = "960px" }) => (
  <MaxWidthContainerOuter>
    <MaxWidthContainerInner width={width}>{children}</MaxWidthContainerInner>
  </MaxWidthContainerOuter>
);
