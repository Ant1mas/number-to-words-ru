export type Declension =
  | 'nominative'
  | 'genitive'
  | 'dative'
  | 'accusative'
  | 'instrumental'
  | 'prepositional'

export interface Declensions {
  [key: string]: Declension,
}

export const declensions: Declensions = {
  NOMINATIVE: 'nominative',       // именительный
  GENITIVE: 'genitive',           // родительный
  DATIVE: 'dative',               // дательный
  ACCUSATIVE: 'accusative',       // винительный
  INSTRUMENTAL: 'instrumental',   // творительный
  PREPOSITIONAL: 'prepositional'  // предложный
};

export default declensions;
