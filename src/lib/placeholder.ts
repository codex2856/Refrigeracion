/** True when a business.ts value is still an unfilled [TOKEN] placeholder. */
export function isPlaceholderValue(value: string): boolean {
  return value.trim().startsWith('[') || value.trim().length === 0;
}
