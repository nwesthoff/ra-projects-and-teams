// next.config.js
const withMdxEnhanced = require("next-mdx-enhanced");
const readingTime = require("reading-time");
const { time } = require("console");

module.exports = withMdxEnhanced({
  layoutPath: "layouts",
  defaultLayout: true,
  fileExtensions: ["mdx"],
  remarkPlugins: [],
  rehypePlugins: [],
  extendFrontMatter: {
    process: (mdxContent, frontMatter) => {
      const time = readingTime(mdxContent);
      return { time };
    },
    phase: "both",
  },
})(/* your normal nextjs config */);
