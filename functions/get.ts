function get(object: any, path: string | any[], defaultValue?: any): any {
  const parts = Array.isArray(path) ? path : path.split('.')
  let value = object

  for (const part of parts) {
    if (value == null || !Object.prototype.hasOwnProperty.call(value, part)) {
      return defaultValue
    }
    value = value[part]
  }

  return value
}

export default get
