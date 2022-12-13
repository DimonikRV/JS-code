export const markFavorites = (tree, favorites) => {
  const isFavorite = favorites.includes(tree.id);
  return {
    ...tree,
    isFavorite,
    node: tree.node.map(childNode => markFavorites(childNode, favorites)),
  };
};
