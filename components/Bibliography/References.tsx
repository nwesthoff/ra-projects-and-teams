import React, { useContext } from "react";
import styled from "styled-components";
import ContentContainer from "../ContentContainer";
import { ReferenceContext } from "./ReferenceProvider";
import { theme } from "../../config/theme";
import ReferenceListItem from "./ReferenceListItem";

const ReferenceWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #161616;
  margin: 4rem 0;
  padding: 0 0 2rem;
`;

const ReferenceList = styled.ul`
  column-count: 2;
  column-gap: 4rem;
  padding-left: 1rem;

  @media (max-width: ${theme.breakpoints.desktop}px) {
    column-gap: 3rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}px) {
    column-count: 1;
  }
`;

export default function References() {
  const references = useContext(ReferenceContext);

  const sortedReferences = references?.sort((a, b) => {
    return a.entryTags.inBib > b.entryTags.inBib
      ? 1
      : b.entryTags.inBib > a.entryTags.inBib
      ? -1
      : 0;
  });

  const academicReferences = sortedReferences?.filter(
    (ref) => ref.entryType === "ACADEMIC"
  );
  const tradeReferences = sortedReferences?.filter(
    (ref) => ref.entryType === "TRADEMAG"
  );
  const trustedReferences = sortedReferences?.filter(
    (ref) => ref.entryType === "TRUSTED"
  );

  return (
    <ReferenceWrapper>
      <ContentContainer wide>
        <h2 style={{ marginTop: "2rem" }}>References</h2>
        {academicReferences && academicReferences?.length > 0 ? (
          <div>
            <h4>Academic Sources</h4>
            <ReferenceList>
              {academicReferences.map((ref) => (
                <ReferenceListItem
                  reference={ref}
                  key={ref.citationKey || "huh"}
                />
              ))}
            </ReferenceList>
          </div>
        ) : null}

        {tradeReferences && tradeReferences?.length > 0 ? (
          <div>
            <h4>Trade Sources</h4>
            <ReferenceList>
              {tradeReferences.map((ref) => (
                <ReferenceListItem
                  reference={ref}
                  key={ref.citationKey || "huh"}
                />
              ))}
            </ReferenceList>
          </div>
        ) : null}

        {trustedReferences && trustedReferences?.length > 0 ? (
          <div>
            <h4>Trusted Sources</h4>
            <ReferenceList>
              {trustedReferences.map((ref) => (
                <ReferenceListItem
                  reference={ref}
                  key={ref.citationKey || "huh"}
                />
              ))}
            </ReferenceList>
          </div>
        ) : null}
      </ContentContainer>
    </ReferenceWrapper>
  );
}
