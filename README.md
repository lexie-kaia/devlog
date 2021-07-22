## Todo

### 0. initialize the project

- [x] install gatsby cli  
       `$npm i gastby-cli`
- [x] create a new site  
       `$gatsby new gglog https://github.com/gatsbyjs/gatsby-starter-hello-world`
- [x] run development build  
       `$gatsby develop`

### 1. add typescript

- [x] install typescript compiler  
       `$npm i -D typescript`
- [x] config `tsconfig.json`  
       `$npx tsc --init`
- [x] run typescript compiler for type checking  
       `$npx tsc -w`

### 2. add emotion, global styles, theme

- [x] install emotion  
       `$npm i gatsby-plugin-emotion @emotion/react @emotion/styled`
- [x] install react helemt for webfonts  
       `$npm i gatsby-plugin-react-helmet react-helmet @types/react-helmet`
- [x] add themes and global styles
- [x] add bootstrap icon  
       `$npm i react-bootstrap-icons`

```txt
/
|- @types
|   `- emotion/
|       `- index.d.ts // src/styles/emotion.d.ts
`- src
   |- components
   |   `- layout.tsx
   |- styles
	|- global.tsx
	`- themes.ts
```

### 3. plan routing and add component structure

**routing**

|          | route                    | e.g.                    | path                                                                       |
| -------- | ------------------------ | ----------------------- | -------------------------------------------------------------------------- |
| **home** | /<br />/?tag={tag}       | /<br/> /?tag=gatsby     | /src/pages/index.tsx                                                       |
| **post** | /{post-date}/{post-slug} | /2020-20-20/hello-world | /contents/2020-20-20/hello-world.mdx<br />/src/templates/post_template.tsx |
| 404      |                          |                         | /src/pages/404.tsx                                                         |

**component**

```txt
/
|- contents
|   |- 2020-20-20
|   `- gatsby.mdx
`- src
    |- components
    |   |- common
    |	 |   |- layout.tsx
    |   |   |- header.tsx
    |   |   `- footer.tsx
    |   `- main
    |       |- hero.tsx
    |       |- section.tsx
    |       |- postlist.tsx
    |       |- postitem.tsx
    |       |- taglist.tsx
    |       |- tagitem.tsx
    |       `- ...
    |- pages
    |   |- index.tsx
    |   |- 404.tsx
    `- templates
        `- post_templates.tsx
```

### 4. create Home page

- [x] layout.tsx
  - [x] add logoSvg.tsx
  - svg -> svg component converter: https://transform.tools/
- [x] header.tsx
- [x] footer.tsx
- [x] hero.tsx
- [x] section.tsx
- [x] postlist.tsx
- [x] postitem.tsx
- [x] taglist.tsx
- [x] tagitem.tsx

### 4. add gatsby plugins

- [x] file system  
       `$npm i gatsby-source-filesystem`
- [x] image  
       prerequisites : `gatsby-source-filesystem`  
       `$npm i gatsby-plugin-image gatsby-plugin-sharp gatsby-transformer-sharp`
- [x] markdown(mdx)  
       `$npm i gatsby-plugin-mdx @mdx-js/mdx @mdx-js/react`  
       prerequisites : `gatsby-plugin-sharp`  
       `$npm i gatsby-remark-images`  
       `$npm i gatsby-remark-prismjs prismjs`

### 5. get mdx contents w/ graphql and create Post page

- [x] add post dummy
  - [x] md frontmatter

```txt
---
title: string;
date: string; // 2020-20-20
tags: string[]; // lowercase
thumbnail?: string;
---
```

- [x] create post page UI draft
  - [x] create `post_template.tsx`
  - [x] generate individual post page w/ `gatsby-node.js`, `post_template.tsx`, graphql
- [x] get post and tag list on `index.tsx`
  - [x] get post list w/ graphql(page query) -[x] get post thumbnail w/ gatsby-image-plugin
  - [x] get tag list and current tag w/ query string
    - [x] `$npm i query-string`
  - [x] add filtering on post list
- [x] develop post page UI
  - [x] style mdx body
    - [x] add prismjs theme on `gatsby-brower.js`
  - [x] add `postheader.tsx`

### 6. implement additional features

- [x] add 404 page `404.tsx`
- [x] add infinit scroll on post list
- [ ] add Utterence on posts
- [ ] add table of contents on posts
- [ ] add color modes
- [ ] add prev, next post
- [ ] add related contents

### 7. improve SEO
