import Layout from "../components/Layout";
import { theme } from "../config/theme";
import styled from "styled-components";
import References from "../components/Bibliography/References";
import { FrontMatter } from "../interfaces";
import { ReactNodeArray } from "react";
import MainContent from "../components/MainContent";
import { darken } from "polished";

const PageIntroduction = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 2rem 5rem;

  h1 {
    font-size: 5rem;
    line-height: 1em;
    max-width: 820px;
    margin-top: 1.2rem;
  }

  h2 {
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 400;
    letter-spacing: 1px;
    font-size: 1.4rem;
    text-transform: uppercase;
    color: ${darken(0.1, theme.colors.text)};
    margin-bottom: 1.2rem;
  }

  p {
    border-left: 1px solid #979797;
    padding-left: 3rem;
    max-width: 630px;
    color: white;
  }

  @media (max-width: ${theme.breakpoints.tablet}px) {
    padding: 0 1.2rem;

    p {
      padding-left: 1.2rem;
    }

    h1 {
      font-size: 3rem;
    }

    h2 {
      font-size: 1.4rem;
    }
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1rem;
    }
  }
`;

const NameLink = styled.a`
  text-decoration: none;
  font-family: "IBM Plex Sans";
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
      <Layout title={`${frontMatter.title} | RA Managing Projects & Teams`}>
        <MainContent>
          <PageIntroduction>
            <h2>{frontMatter.subtitle}</h2>
            <h1>{frontMatter.title}</h1>
            <p>{frontMatter.introduction}</p>
            <p
              style={{
                fontSize: ".8em",
                border: "none",
                fontFamily: "IBM Plex Sans",
              }}
            >
              BY{" "}
              <NameLink href="https://nilswesthoff/com" target="blank">
                NILS WESTHOFF
              </NameLink>{" "}
              <br />
              <span
                style={{
                  opacity: 0.5,
                  fontFamily: "IBM Plex Sans",
                  textTransform: "uppercase",
                }}
              >
                June 2020 | Word Count: {frontMatter.time?.words} | Reading
                Time: {frontMatter.time?.text}
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
