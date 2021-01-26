import {Declension} from "../../units/declensions";

export interface ConvertedScalesToWords {
  result: string,
  unitNameForm: number,
  unitDeclension: Declension,
  isPlural: boolean
};
