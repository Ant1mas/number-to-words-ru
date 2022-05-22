export type Gender = 'MALE' | 'NEUTER' | 'FEMALE'

export interface Genders {
  [key: string]: Gender
}

export const genders: Genders = {
  MALE: 'MALE',
  NEUTER: 'NEUTER',
  FEMALE: 'FEMALE',
}

export default genders
