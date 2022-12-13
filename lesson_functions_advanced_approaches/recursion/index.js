export const markFavorites = (tree, favorites) => {
  const isFavorite = markFavorites.includes(tree.id);
  return {
    ...tree,
    isFavorite,
    node: tree.node.map(childNode => markFavorites(childNode, favorites)),
  };
};
