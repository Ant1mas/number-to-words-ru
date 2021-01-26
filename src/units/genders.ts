export type Gender =
  | 'MALE'
  | 'FEMALE'
  | 'NEUTER'

export interface Genders {
  [key: string]: Gender,
}

const genders: Genders = {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  NEUTER: 'NEUTER'
};

export default genders;
