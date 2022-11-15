// eslint-disable-next-line import/order
import fs from 'fs/promises';
// eslint-disable-next-line import/order
import path from 'path';
import rehypeFormat from 'rehype-format';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import redirect from 'remark-redirect';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

const mdFilesPath: string = path.resolve(process.cwd(), '../../docs');
const reportPath: string = path.resolve(process.cwd(), '../../reports');

const parseToHtml = async () => {
  const mdFiles = await fs.readdir(mdFilesPath);
  for (let i = 0; i < mdFiles.length; i++) {
    const currentFile: string = mdFiles[i];
    const extractedMarkdown: string = await fs.readFile(
      `${mdFilesPath}/${currentFile}`,
      'utf8'
    );
    const parsedObject = await unified()
      .use(remarkParse)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeRaw)
      .use(rehypeFormat)
      .use(redirect as typeof remarkParse)
      .use(remarkFrontmatter)
      .use(remarkGfm)
      .use(rehypeStringify)
      .process(extractedMarkdown);
    const HtmlData = String(parsedObject);

    const navbarComponent: string = await fs.readFile(
      // eslint-disable-next-line prefer-template
      path.join(process.cwd() + '/src/components/navbar.html'),
      'utf-8'
    );

    await fs.writeFile(
      `${reportPath}/${currentFile.replace('md', 'html')}`,
      ` 
        <html>
          <head>
            <title>${currentFile.replace('.md', ' | Ecommerce Docs')}</title>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,400;0,700;1,100&family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/default.min.css">
            <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/highlight.min.js"></script>
          </head>
          <body>
            <main>
              ${navbarComponent}
              <div class="container">
                ${HtmlData}
              </div>
            </main>
            <script>
              /* Add table classes */
              const tables = document.querySelectorAll("table");
              tables.forEach((table) => {
                table.classList.add("table");
              });

              /** Highlight */
              document.addEventListener('DOMContentLoaded', (event) => {
                document.querySelectorAll('pre code').forEach((el) => {
                  hljs.highlightElement(el);
                });
              });
            </script>
          </body>
        </html>
      `,
      'utf8'
    );
  }
};

// Call the generator function
parseToHtml()
  .then(() => {
    console.log('REPORT GENERATED');
  })
  .catch((e) => {
    console.error(e);
  });
