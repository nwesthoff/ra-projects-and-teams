import React, { ReactElement, useContext, ReactNode } from "react";
import { ReferenceContext } from "./ReferenceProvider";
import styled from "styled-components";
import { theme } from "../../config/theme";
import { darken } from "polished";

const TooltipWrapper = styled.a`
  color: ${theme.colors.secondary};
  font-size: 0.7em;
  transition: all 150ms ease-out;

  &:hover {
    text-decoration: underline;
    color: ${darken(0.3, theme.colors.secondary)};
  }
`;

const CitationStyled = styled.span`
  margin-left: 0.2rem;
  break-inside: avoid;
  -webkit-column-break-inside: avoid;
  display: inline-block;
  text-decoration: none;
`;

interface Props {
  id: string;
  children?: ReactNode;
  page?: string;
  hideAuthor?: boolean;
}

export default function Citation({
  id,
  page,
  children,
  hideAuthor,
}: Props): ReactElement {
  const references = useContext(ReferenceContext);
  // const [isComponentMounted, setIsComponentMounted] = useState(false);

  // useEffect(() => setIsComponentMounted(true), []);

  const currentRef = references?.find((ref) => {
    return ref.citationKey === id;
  });

  return currentRef ? (
    <CitationStyled>
      <TooltipWrapper
        data-tip
        data-for={currentRef.citationKey}
        href={`#ref-${currentRef.citationKey}`}
      >
        {children ||
          `(${hideAuthor !== true ? currentRef.entryTags.author + ", " : ""}${
            currentRef.entryTags.year
          }${page ? `, pp. ${page}` : ""})`}
      </TooltipWrapper>
    </CitationStyled>
  ) : (
    <span style={{ color: "red" }}>[FIX SOURCE]</span>
  );
}
