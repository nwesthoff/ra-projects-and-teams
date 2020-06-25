import Layout from "../components/Layout";
import ChapterBlock from "../components/ChapterBlock";
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

const IndexPage = () => (
  <Layout title="Introduction | RA Experience Design">
    <PageWrapper>
      <PageIntroduction>
        <h1>Managing Projects & Teams</h1>
        <p>
          This is a research activity about <em>Managing Projects & Teams</em>.
        </p>
        <p style={{ fontSize: ".8em", border: "none" }}>
          BY{" "}
          <NameLink href="https://nilswesthoff/com" target="blank">
            NILS WESTHOFF
          </NameLink>{" "}
          <br />
          <span style={{ opacity: 0.5 }}>JUNE 2020 | WORD COUNT: FIXME:</span>
        </p>
      </PageIntroduction>

      <ContentContainer>
        <h2>Vision within Reason</h2>
        <p>
          Hekkert and van Dijk, explain in their book <em>Vision in Design</em>{" "}
          how a design process is a balancing act between forward-thinking,
          visionary, inspiration and making reasonable decisions.
        </p>
        <blockquote>
          <p>
            “Give room to feelings and intuition as they do at art schools, but
            simultaneously develop a sound argument in order to justify and
            explain each and every decision they make.”
          </p>
          <ul>
            <li>
              Paul Hekkert & Matthijs van Dijk{" "}
              <Citation id="ViP" page="128-129" hideAuthor />
            </li>
          </ul>
        </blockquote>
        <p>
          While ViP is a very different process compared to the Double Diamond
          model, the goal is to a large extent similar. It attempts to project
          us into the future, by breaking down the context we live in (or in
          ViP's case, expect to live in). The goal is to <em>inspire</em> and{" "}
          <em>educate</em> us about the problems worth solving. Identifying how
          these problems influence people's lives comes with an understanding of
          the way people live experiences in general.{" "}
        </p>
        <h2>Experience</h2>
        <p>
          First of all, it's important to be aware that experiences are not
          self-contained, they happen inside a larger context and are greatly
          influenced by the way individuals perceive them. As Peter Benz puts
          it:
        </p>
        <blockquote>
          <p>
            “Experiences emerge in the intertwinement of a variety of objects,
            interactions, spaces and information.”
          </p>
          <ul>
            <li>
              Peter Benz <Citation id="experienceBenz" page="32" hideAuthor />
            </li>
          </ul>
        </blockquote>
        <p>
          Benz describes how lived experiences are a result of a moving
          intersection between <em>sense</em>, <em>consciousness</em>,{" "}
          <em>body</em>, and the <em>world</em>. An approach for experience
          designers, as such, could focus on <em>thinking</em>, <em>sensing</em>{" "}
          and <em>feeling</em>. Though, it's important to remember that these
          elements can't be seen in isolation either, in actual experience they
          are deeply entangled as well. When we do design research we have to
          understand that everyday experience is continuous, seamless and
          endless, we're only trying to understand a small slice of that.
        </p>
        <p>
          Experiences are influenced by differences far-reaching like our
          marital status, to mundane differences like the operating system our
          phone is using. How we design for these differences is driven by
          design research.
        </p>
      </ContentContainer>
    </PageWrapper>
    <References />
  </Layout>
);

export default IndexPage;
