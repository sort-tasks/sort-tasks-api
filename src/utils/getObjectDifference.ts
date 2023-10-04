type AnyObject = { [key: string]: unknown };

export function getObjectDifference(obj1: AnyObject, obj2: AnyObject): AnyObject {
  const result: AnyObject = {};

  const toJson = (value: unknown) => {
    return typeof value === 'object' ? JSON.stringify(value) : value;
  };

  for (const key in obj1) {
    if (!(key in obj2) || toJson(obj1[key]) !== toJson(obj2[key])) {
      result[key] = obj1[key];
    }
  }

  for (const key in obj2) {
    if (!(key in obj1)) {
      result[key] = obj2[key];
    }
  }

  return result;
}
