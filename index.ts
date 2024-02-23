import structuredClone from '@ungap/structured-clone'

import methodConvert from '@/methods/convert'

if (!('structuredClone' in globalThis)) {
  // @ts-ignore
  globalThis.structuredClone = structuredClone
}

const numberToWordsRu = {
  convert: methodConvert,
}
export const convert = methodConvert

export default numberToWordsRu
