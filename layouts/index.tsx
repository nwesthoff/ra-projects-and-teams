import Layout from "../components/Layout";
import PageIntroduction from "../components/PageIntroduction";
import { PageWrapper } from "../components/PageWrapper";
import { theme } from "../config/theme";
import styled from "styled-components";
import ContentContainer from "../components/ContentContainer";
import Citation from "../components/Bibliography/Citation";
import References from "../components/Bibliography/References";
const NameLink = styled.a`
  text-decoration: none;
  color: ${theme.colors.primary};

  &:hover {
    text-decoration: underline;
  }
`;

const IndexPage = (frontMatter) => {
  return ({ children: content }) => {
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
                JUNE 2020 | WORD COUNT: FIXME:
              </span>
            </p>
          </PageIntroduction>
          <ContentContainer>{content}</ContentContainer>
        </PageWrapper>
        <References />
      </Layout>
    );
  };
};

export default IndexPage;
