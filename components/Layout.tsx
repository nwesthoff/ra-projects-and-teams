import * as React from "react";
import Head from "next/head";
import { PageWrapper } from "./PageWrapper";
import GlobalStyle from "../config/GlobalStyle";
import styled from "styled-components";
// import Nav from "./Navigation/Nav";

const StyledFooter = styled.footer`
  margin: 2rem 0;
`;

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "RA Managing Projects & Teams",
}) => {
  return (
    <div>
      <GlobalStyle />
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#FF3F56" />
        <meta name="theme-color" content="#FF3F56" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;600&family=IBM+Plex+Serif:ital,wght@0,400;0,600;1,400&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        {/* Essential META Tags */}
        <meta property="og:title" content="Managing Projects &amp; Teams" />
        <meta
          property="og:description"
          content="How ideas and information disperse in an organisation"
        />
        <meta
          property="og:image"
          content="https://ra-projects-and-teams.nilswesthoff.com/img/social-image.jpg"
        />
        <meta
          property="og:url"
          content="https://ra-projects-and-teams.nilswesthoff.com"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {/* <header>
        <Nav />
      </header> */}
      {children}
      <PageWrapper>
        <StyledFooter>
          Made with ❤️ by{" "}
          <a href="https://nilswesthoff.com" target="blank">
            Nils
          </a>
        </StyledFooter>
      </PageWrapper>
    </div>
  );
};

export default Layout;
