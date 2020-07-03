import React, { ReactElement, ReactNode } from "react";
import styled from "styled-components";
import { transparentize } from "polished";
import { theme } from "../config/theme";

const StyledDownloadButton = styled.a`
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
  margin: 1.2rem 1.2rem 1.2rem 0;
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 700;
  letter-spacing: 2px;
  font-size: 0.8rem;
  text-transform: uppercase;
  text-decoration: none;
  background-color: ${(props: { color?: string }) =>
    transparentize(0.5, props.color ? props.color : theme.colors.primary)};

  &:hover {
    text-decoration: none;
    background-color: ${(props: { color?: string }) =>
      props.color ? props.color : theme.colors.primary};
  }
`;

const IconWrap = styled.span`
  margin-left: 0.8rem;
`;

interface Props {
  file: string;
  text: string;
  icon: ReactNode;
  color: string;
}
export default function DownloadButton({
  file,
  text,
  icon,
  color,
}: Props): ReactElement {
  return (
    <StyledDownloadButton color={color} download href={file}>
      {text} <IconWrap>{icon}</IconWrap>
    </StyledDownloadButton>
  );
}
