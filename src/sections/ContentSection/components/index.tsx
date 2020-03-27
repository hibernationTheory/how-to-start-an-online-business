import React from "react";
import styled from "styled-components";

export const Container = styled.div``;

export const MarginBottom = styled.div`
  ${({ amount, theme }) => {
    return `
      margin-bottom: ${theme.spacing(amount)}px;
    `;
  }}
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.h2};
`;

export const Subtitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.h6};
`;

export const Paragraph = styled.p`
  ${({ theme }) => {
    return theme.typography.body1;
  }}
`;

export const MarkupContainer = styled.div`
  ${({ theme }) => {
    const {
      fontSize: bodyFontSize,
      lineHeight: bodyLineHeight,
      letterSpacing: bodyLetterSpacing,
    } = theme.typography.body1;

    const {
      fontSize: h2FontSize,
      lineHeight: h2LineHeight,
      letterSpacing: h2LetterSpacing,
      fontWeight: h2FontWeight,
    } = theme.typography.h4;

    const {
      fontSize: h3FontSize,
      lineHeight: h3LineHeight,
      letterSpacing: h3LetterSpacing,
      fontWeight: h3FontWeight,
    } = theme.typography.h5;

    return `
      & p, li {
        font-size: ${bodyFontSize};
        line-height: ${bodyLineHeight};
        letter-spacing: ${bodyLetterSpacing};
        margin-bottom: ${theme.spacing(1)}px; 
      }

      & h2 {
        font-size: ${h2FontSize};
        font-weight: ${h2FontWeight};
        line-height: ${h2LineHeight};
        letter-spacing: ${h2LetterSpacing};
      }

      & h3 {
        font-size: ${h3FontSize};
        font-weight: ${h3FontWeight};
        line-height: ${h3LineHeight};
        letter-spacing: ${h3LetterSpacing};
      }

      & strong {
        font-weight: ${theme.typography.fontWeightBold};
      }

      & img {
        width: 100%;
      }

      & .marketing-block {
        background-color: ${theme.palette.grey["50"]};
        padding:${theme.spacing(10)}px;
        font-size: ${bodyFontSize};
        line-height: ${bodyLineHeight};
        letter-spacing: ${bodyLetterSpacing};
        margin-top: ${theme.spacing(5)}px; 
        margin-bottom: ${theme.spacing(5)}px; 
      }
  `;
  }}
`;
