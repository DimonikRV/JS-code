export const markFavorites = (tree, markFavorites) => {
  const isFavorite = markFavorites.includes(tree.id);
  return {
    ...tree,
    isFavorite,
    node: tree.node.map(childNode => markFavorites(childNode, markFavorites)),
  };
};
