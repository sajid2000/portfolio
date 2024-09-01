import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';
import sitemap from "@astrojs/sitemap";

function remarkReadingTime() {
  return function (tree, {
    data
  }) {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);
    // readingTime.text will give us minutes read as a friendly string,
    // i.e. "3 min read"
    data.astro.frontmatter.minutesRead = readingTime.text;
  };
}


// https://astro.build/config
export default defineConfig({
  site: "http://localhost:4321",
  integrations: [tailwind(), mdx(), sitemap()],
  markdown: {
    remarkPlugins: [remarkReadingTime]
  }
});