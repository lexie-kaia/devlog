### Todo

#### 0. initialize the project

- [x] install gatsby cli  
       `$npm i gastby-cli`
- [x] create a new site  
       `$gatsby new gglog https://github.com/gatsbyjs/gatsby-starter-hello-world`
- [x] run development build  
       `$gatsby develop`

#### 1. add typescript

- [x] install typescript compiler  
       `$npm i -D typescript`
- [x] config `tsconfig.json`  
       `$npx tsc --init`
- [x] run typescript compiler for type checking  
       `$npx tsc -w`

#### 2. add emotion, global styles, theme

- [x] install emotion  
       `$npm i gatsby-plugin-emotion @emotion/react @emotion/styled`
- [x] install react helemt for webfonts  
       `$npm i gatsby-plugin-react-helmet react-helmet @types/react-helmet`
- [x] add themes and global styles

```
/
|- @types
|	|- emotion/
|		|- index.d.ts // src/styles/emotion.d.ts
|- src
	|- components
		|- layout.tsx
	|- styles
		|- global.tsx
		|- themes.ts
```

#### 3. implement UI draft

- [x] `index.tsx`

  - [x] `layout.tsx`
  - [x] `header.tsx`
  - [x] `footer.tsx`
  - [x] `hero.tsx`
  - [x] `postitem.tsx`
  - [x] `categoryitem.tsx`
  - [x] `tag.tsx`

- [x] add bootstrap icon  
       `$npm i react-bootstrap-icons`

#### 4. add gatsby plugin

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
