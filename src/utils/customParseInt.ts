export function customParseInt(value: any) {
  if (typeof value !== "string") {
    return undefined;
  }
  try {
    return Number.parseInt(value);
  } catch (e: any) {
    return undefined;
  }
}
