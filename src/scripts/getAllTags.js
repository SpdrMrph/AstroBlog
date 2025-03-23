const allPosts = Object.values(
  import.meta.glob('../pages/posts/*.md', { eager: true }),
);

console.log(allPosts, 'a');
export const getAllTags = () => {
  return Array.from(new Set(allPosts.flatMap((post) => post.frontmatter.tags)));
};
