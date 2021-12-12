export interface IRoute {
  path: string;
  name: string;
  element: React.ElementType;
  icon?: React.ComponentType<{ className?: string }>;
}