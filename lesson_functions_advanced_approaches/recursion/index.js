export const markFavorites = (tree, favorites) => {
  const isFavorite = favorites.includes(tree.id);
  return {
    ...tree,
    isFavorite,
    nodes: tree.node.map(childNode => markFavorites(childNode, favorites)),
  };
};
