import React from "react";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Link from "next/link";

import { useTranslation } from "src/utilities/translations";

export const Container = styled.div``;

export const MarginBottom = styled.div`
  ${({ amount, theme }) => {
    return `
      margin-bottom: ${theme.spacing(amount)}px;
    `;
  }}
`;

export const ButtonsContainer = styled.div`
  ${({ theme }) => {
    return `
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: ${theme.spacing(4)}px;
    `;
  }}
`;

export const SelectionContainer = styled.div`
  ${({ disabled, theme }) => {
    return `
        cursor: ${!disabled && "pointer"};
        padding-top: ${theme.spacing(4)}px;
        padding-bottom: ${theme.spacing(16)}px;
        padding-left: ${theme.spacing(4)}px;
        padding-right: ${theme.spacing(6)}px;
    `;
  }}
`;

export const SelectionText = styled.div`
  ${({ theme, disabled }) => {
    const {
      fontSize: h6FontSize,
      lineHeight: h6LineHeight,
      letterSpacing: h6LetterSpacing,
      fontWeight: h6FontWeight,
    } = theme.typography.h6;

    return `
      color: ${disabled && theme.palette.text.disabled};
      font-size: ${h6FontSize};
      font-weight: ${h6FontWeight};
      line-height: ${h6LineHeight};
      letter-spacing: ${h6LetterSpacing};
    `;
  }}
`;

export const Selection = ({ children, disabled = false }) => {
  const { locale } = useTranslation();

  const link = !disabled ? (
    <Link href="/[lang]/content" as={`/${locale}/content`}>
      <SelectionText disabled={disabled}>{children}</SelectionText>
    </Link>
  ) : (
    <SelectionText disabled={disabled}>{children}</SelectionText>
  );

  return (
    <Paper elevation={3}>
      <SelectionContainer disabled={disabled}>{link}</SelectionContainer>
    </Paper>
  );
};

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.h2};
`;

export const Paragraph = styled.p`
  ${({ theme }) => {
    return theme.typography.body1;
  }}
`;
