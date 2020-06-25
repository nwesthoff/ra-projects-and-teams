import Layout from "../components/Layout";
import PageIntroduction from "../components/PageIntroduction";
import { PageWrapper } from "../components/PageWrapper";
import { theme } from "../config/theme";
import styled from "styled-components";
import ContentContainer from "../components/ContentContainer";
import References from "../components/Bibliography/References";
import { FrontMatter } from "../interfaces";
import { ReactNodeArray } from "react";

const NameLink = styled.a`
  text-decoration: none;
  color: ${theme.colors.primary};

  &:hover {
    text-decoration: underline;
  }
`;

interface LayoutProps {
  children: ReactNodeArray;
}

const DefaultLayout = (frontMatter: FrontMatter) => {
  return ({ children }: LayoutProps) => {
    return (
      <Layout title={frontMatter.title}>
        <PageWrapper>
          <PageIntroduction>
            <h1>Managing Projects & Teams</h1>
            <p>{frontMatter.introduction}</p>
            <p style={{ fontSize: ".8em", border: "none" }}>
              BY{" "}
              <NameLink href="https://nilswesthoff/com" target="blank">
                NILS WESTHOFF
              </NameLink>{" "}
              <br />
              <span style={{ opacity: 0.5 }}>
                JUNE 2020 | WORD COUNT: {frontMatter.wordcount}
              </span>
            </p>
          </PageIntroduction>
          <ContentContainer>{children}</ContentContainer>
        </PageWrapper>
        <References />
      </Layout>
    );
  };
};

export default DefaultLayout;
