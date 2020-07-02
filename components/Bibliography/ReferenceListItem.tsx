import { AcademicRef } from "../../config/MyReferences";
import ReactLinkify from "react-linkify";
import styled from "styled-components";
import ReactTooltip from "react-tooltip";
import { theme } from "../../config/theme";

const StyledReactTooltip = styled(ReactTooltip)`
  max-width: 500px;
  line-height: 1.6em;
`;
const StyledReferenceListItem = styled.li`
  font-size: 0.9rem;
  color: #ccc;
  margin-bottom: 0.8rem;
  /* for Chrome and Edge */
  break-inside: avoid-column;
  -webkit-column-break-inside: avoid;
  /* for Firefox */
  page-break-inside: avoid;
`;

const ReferenceLink = styled.a`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow-x: hidden;
  display: inline-block;
  max-width: 280px;
  vertical-align: top;
  position: relative;

  @media (max-width: ${theme.breakpoints.tablet}px) {
    max-width: 200px;
  }
`;

interface Props {
  reference: AcademicRef;
}

const ReferenceListItem = ({ reference: ref }: Props) => {
  return (
    <StyledReferenceListItem
      id={`ref-${ref.citationKey}`}
      key={ref.citationKey}
    >
      <StyledReactTooltip
        id={ref.citationKey}
        wrapper="span"
        data-multiline="true"
        backgroundColor="#161616"
      >
        {ref.entryTags.inBib}
      </StyledReactTooltip>
      <ReactLinkify
        componentDecorator={(decoratedHref, decoratedText, key) => (
          <ReferenceLink target="blank" href={decoratedHref} key={key}>
            {decoratedText}
          </ReferenceLink>
        )}
      >
        {ref.entryTags.inBib}
      </ReactLinkify>
    </StyledReferenceListItem>
  );
};

export default ReferenceListItem;
