export type Declension =
  | 'nominative'
  | 'genitive'
  | 'dative'
  | 'accusative'
  | 'instrumental'
  | 'prepositional'

export type DeclensionsData = {
  [key in Declension]?: [string, string]
}

export type Declensions = {
  NOMINATIVE: 'nominative'
  GENITIVE: 'genitive'
  DATIVE: 'dative'
  ACCUSATIVE: 'accusative'
  INSTRUMENTAL: 'instrumental'
  PREPOSITIONAL: 'prepositional'
}

export const DECLENSIONS: Declensions = {
  NOMINATIVE: 'nominative', // именительный
  GENITIVE: 'genitive', // родительный
  DATIVE: 'dative', // дательный
  ACCUSATIVE: 'accusative', // винительный
  INSTRUMENTAL: 'instrumental', // творительный
  PREPOSITIONAL: 'prepositional', // предложный
}
