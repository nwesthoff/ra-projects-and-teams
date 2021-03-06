// next.config.js
const withMdxEnhanced = require("next-mdx-enhanced");
const readingTime = require("reading-time");
const containers = require("remark-containers");

module.exports = withMdxEnhanced({
  layoutPath: "layouts",
  defaultLayout: true,
  fileExtensions: ["mdx"],
  remarkPlugins: [containers],
  rehypePlugins: [],
  extendFrontMatter: {
    process: (mdxContent, frontMatter) => {
      // Pretty bad implementation to strip HTML but good enough for this report
      cleanText = mdxContent.replace(/<\/?[^>]+(>|$)/g, "");
      const time = readingTime(cleanText);
      time.words = time.words - 51;
      return { time };
    },
    phase: process.env.NODE_ENV === "production" ? "loader" : "both",
  },
})(/* your normal nextjs config */);
