// @ts-nocheck
/**
 * Naive yet effective way to "cast" one object to another.
 * For example, next query params ([key: string]: string) to query builder
 * (interface with typed params). Requires defaultObject to fallback
 * Will try to cast _javascript_ types of object keys to the following
 * types of defaultObject keys.
 * If defaultObject don't have a param, it'll be ignored.
 */

const cast = (what: any, to: any) => {
  switch (typeof to) {
    case "object":
      if (typeof what === "object") {
        return conform(to, what);
      }

      return to;
    case "boolean":
      return !!to;
    case "number":
      return parseFloat(what)
    case "string":
      return what.toString();
    case "bigint":
      if (typeof what === "number" || typeof what === "string") {
        return new BigInt(what)
      }

      return to;
    case "function":
      return () => to;
    case "undefined":
    case "symbol":
    default:
      return to;
  }
}

const conform = <T>(defaultObject: T, object: Record<string, unknown>): T => {
  const newObject: Partial<T> = {};

  Object.keys(defaultObject).map(function(key) {
    if (!defaultObject.hasOwnProperty(key)) return;
    if (!object.hasOwnProperty(key)) {
      newObject[key] = defaultObject[key];
      return;
    }

    newObject[key] = cast(object[key], defaultObject[key]) as T[key];
  });

  return newObject as T;
}

export default conform;