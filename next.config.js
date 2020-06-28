// next.config.js
const withMdxEnhanced = require("next-mdx-enhanced");
const readingTime = require("reading-time");
const headings = require("remark-autolink-headings");
const containers = require("remark-containers");

module.exports = withMdxEnhanced({
  layoutPath: "layouts",
  defaultLayout: true,
  fileExtensions: ["mdx"],
  remarkPlugins: [{ headings }, containers],
  rehypePlugins: [],
  extendFrontMatter: {
    process: (mdxContent, frontMatter) => {
      const time = readingTime(mdxContent);
      return { time };
    },
    phase: "both",
  },
})(/* your normal nextjs config */);
