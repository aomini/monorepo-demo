/**
 * Menu Item
 * Navigation Menu Item
 */
export type MenuItem = {
  /** Title of Menu Item */
  title: string;

  /** Slug of Item */
  slug: string;

  /** Url of Item */
  url: string;

  /** Children Array of Menu Item */
  children?: Array<MenuItem>;
};

/**
 * Handler Click Props
 */
export type MenuClickProps = Pick<MenuItem, 'children' | 'slug'>;
