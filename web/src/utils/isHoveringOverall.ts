const isHoveringOverall = (
  isWorkLinkHovering: boolean,
  isExploreMoreLinkHovering: boolean
): boolean => {
  if (isWorkLinkHovering) return true;
  if (isExploreMoreLinkHovering) return true;

  return false;
};

export default isHoveringOverall;
