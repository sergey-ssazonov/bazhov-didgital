import { TPaginationResponse } from '../../types/api';
import { TGetWordsRequest, Word } from '../models/word.model';
import { WordTransport } from '../transports/word.transports';
import toPlain from '../utils/to-plain';

export class WordService {
  private transport: WordTransport;

  constructor(transport: WordTransport) {
    this.transport = transport;
  }

  /**
   * Бизнес-логика поиска слов
   */
  async getWords(
    query: TGetWordsRequest = {}
  ): Promise<TPaginationResponse<Word[]>> {
    const words = await this.transport.getWords(query);
    return toPlain(words);
  }
}

export const wordService = new WordService(new WordTransport());
