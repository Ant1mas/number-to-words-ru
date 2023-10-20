function has(object: any, path: string | any[]): boolean {
  const parts = Array.isArray(path) ? path : path.split('.')
  let value = object

  for (const part of parts) {
    if (value == null || !Object.prototype.hasOwnProperty.call(value, part)) {
      return false
    }
    value = value[part]
  }

  return true
}

export default has
