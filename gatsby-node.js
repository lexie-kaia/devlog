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
          nodes {
            slug
            id
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

  const posts = result.data.allMdx.nodes;
  const postTemplate = path.resolve(`./src/templates/post_template.tsx`);

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      createPage({
        path: post.slug,
        component: postTemplate,
        context: {
          id: post.id,
        },
      });
    });
  }
};
