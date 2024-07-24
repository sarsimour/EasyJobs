
// types.ts
export interface FilterOption {
  value: string;
  label: string;
}

export interface NestedOptions {
  [key: string]: string[] | NestedOptions;
}

export interface Filter {
  name: string;
  type: 'checkbox' | 'nested-checkbox' | 'multi-nested-checkbox';
  options: FilterOption[] | NestedOptions;
}
