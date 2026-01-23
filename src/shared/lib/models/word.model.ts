import { TFiltersQuery, TPaginationQuery } from '../../types/api';
import { TTale } from './tale.model';

export type TGetWordsRequest = TFiltersQuery & TPaginationQuery;

export type TWord = {
  id: string;
  word: string;
  wordWithAccent: string;
  description: string;
  exampleText: string;
  tale: TTale;
};

export class Word implements TWord {
  id: string;
  word: string;
  wordWithAccent: string;
  description: string;
  exampleText: string;
  tale: TTale;

  constructor(data: TWord) {
    this.id = data.id;
    this.word = data.word;
    this.wordWithAccent = data.wordWithAccent;
    this.description = data.description;
    this.exampleText = data.exampleText;
    this.tale = data.tale;
  }

  static fromServer(data: TWord): Word {
    return new Word(data);
  }
}
