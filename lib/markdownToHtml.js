import { remark } from "remark";
import gfm from "remark-gfm";
import html from "remark-html";

export default async function markdownToHtml(markdown) {
  const result = await remark().use(gfm).use(html).process(markdown);
  return result.toString();
}
