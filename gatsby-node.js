const path = require(`path`);

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
      {
        allMdx(
          sort: {
            fields: [frontmatter___date, frontmatter___title]
            order: DESC
          }
        ) {
          edges {
            node {
              id
              slug
              frontmatter {
                category
              }
            }
            next {
              id
            }
            previous {
              id
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    );
    return;
  }

  const postTemplate = path.resolve(`./src/templates/PostTemplate.tsx`);
  const posts = result.data.allMdx.edges;

  if (posts.length > 0) {
    posts.forEach(post => {
      createPage({
        path: post.node.slug,
        component: postTemplate,
        context: {
          id: post.node.id,
          category: post.node.frontmatter.category,
          nextId: post.next?.id,
          prevId: post.previous?.id,
        },
      });
    });
  }
};
