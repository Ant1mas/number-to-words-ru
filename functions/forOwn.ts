function forOwn(
  object: any,
  iteratee: (value: any, key: string) => void,
): void {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      iteratee(object[key], key)
    }
  }
}

export default forOwn
