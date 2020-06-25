import Layout from "../components/Layout";
import PageIntroduction from "../components/PageIntroduction";
import { theme } from "../config/theme";
import styled from "styled-components";
import References from "../components/Bibliography/References";
import { FrontMatter } from "../interfaces";
import { ReactNodeArray } from "react";
import MainContent from "../components/MainContent";

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
        <MainContent>
          <PageIntroduction>
            <h1>Managing Projects & Teams</h1>
            <p>{frontMatter.introduction}</p>
            <p
              style={{
                fontSize: ".8em",
                border: "none",
                fontFamily: "IBM Plex Mono",
              }}
            >
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
          {children}
        </MainContent>
        <References />
      </Layout>
    );
  };
};

export default DefaultLayout;
