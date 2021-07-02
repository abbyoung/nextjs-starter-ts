# NextJS Starter Blog

## About

Builds on Next.JS's starter blog using TypeScript by adding support for [KaTeX](https://github.com/KaTeX/KaTeX) processing in markdown files.

This implementation uses the UnifiedJS ecosystem to parse and process markdown files located in `posts/`. An example post is included - `posts/markdown-math.md`.

Use `$` (inline) or `$$` (blocks) to wrap KaTeX syntax in your files. This marks them for processing by `remark-math`.

All text processing takes place in `lib/posts.ts`, utilizing a handful of remark plugins. [Remark-math](https://github.com/remarkjs/remark-math) parses `$` and `$$` into math nodes. [Remark-html-katex](https://github.com/remarkjs/remark-math/tree/main/packages/remark-html-katex) transforms those nodes with KaTeX. The necessary css for rendering KaTeX is imported in `_app.tsx`.

## Getting Started

```sh
yarn install
yarn dev
```

This should get you up and running. Open in your browser at `localhost:3000`.

To view KaTeX in action, click on the blog post titled `KaTeX and Markdown`. If everything works properly, you should see the following rendered:

[!KaTeX example](katex-example.png)

## Troubleshooting

### Apple M1 Chip

(_As of 7/1/2021_)

I've had problems running this NextJS starter with certain versions of node on M1 MacBooks. Tested and working versions include `v15.3.0` and `16.3.0`.

Hopefully the bug will be fixed by the time anyone finds this! If not, I recommend installing [nodenv](https://github.com/nodenv/nodenv) and trying different versions.
