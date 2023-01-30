const CategoryTypes = ['Network', 'Device', 'Browsing'] as const;
type CategoryType = (typeof CategoryTypes)[number];

export interface Category {
  id: number;
  type: CategoryType;
  notifications: number;
}
