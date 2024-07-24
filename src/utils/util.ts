export function flattenOptions(options: NestedOptions): string[] {
  return Object.entries(options).reduce((acc, [key, value]) => {
    if (Array.isArray(value)) {
      return [...acc, key, ...value];
    } else {
      return [...acc, key, ...flattenOptions(value)];
    }
  }, []);
}
