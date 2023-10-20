function isPlainObject(value: any): boolean {
  if (typeof value !== 'object' || value === null) {
    return false
  }

  const proto = Object.getPrototypeOf(value)

  if (proto === null) {
    return true
  }

  const constructor =
    Object.prototype.hasOwnProperty.call(proto, 'constructor') &&
    proto.constructor

  return (
    typeof constructor === 'function' &&
    constructor instanceof constructor &&
    Function.prototype.toString.call(constructor) ===
      Function.prototype.toString.call(Object)
  )
}

export default isPlainObject
