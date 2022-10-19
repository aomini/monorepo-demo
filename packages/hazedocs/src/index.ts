import path from "path";
import fs from "fs/promises";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import redirect from "remark-redirect";

const mdFilesPath: string = path.resolve(process.cwd(), "../../docs");
const reportPath: string = path.resolve(process.cwd(), "../../reports");

const parseToHtml = async () => {
  const mdFiles = await fs.readdir(mdFilesPath);
  for (let i = 0; i < mdFiles.length; i++) {
    const currentFile: string = mdFiles[i];
    const extractedMarkdown: string = await fs.readFile(
      `${mdFilesPath}/${currentFile}`,
      "utf8"
    );
    const parsedObject = await unified()
      .use(remarkParse)
      .use(redirect as typeof remarkParse)
      .use(remarkFrontmatter)
      .use(remarkGfm)
      .use(remarkRehype)
      .use(rehypeStringify)
      .process(extractedMarkdown);
    const HtmlData = String(parsedObject);

    await fs.writeFile(
      `${reportPath}/${currentFile.replace("md", "html")}`,
      HtmlData,
      "utf8"
    );
  }
};

// Call the generator function
parseToHtml()
  .then(() => {
    console.log("REPORT GENERATED");
  })
  .catch((e) => {
    console.error(e);
  });
