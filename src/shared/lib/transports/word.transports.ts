import { TPaginationResponse } from '../../types/api';
import axiosInstance from '../axios';
import { TGetWordsRequest, TWord, Word } from '../models/word.model';

export class WordTransport {
  /**
   * Поиск слов
   */
  async getWords(
    query: TGetWordsRequest = {}
  ): Promise<TPaginationResponse<Word[]>> {
    try {
      const params: Record<string, string> = {};

      if (query.search?.trim()) params.search = query.search.trim();
      if (query.byLetter?.trim()) params.byLetter = query.byLetter.trim();
      if (query.taleId?.trim()) params.taleId = query.taleId.trim();

      if (query.limit) params.limit = String(query.limit);
      if (query.page) params.page = String(query.page);

      const { data } = await axiosInstance.get<TPaginationResponse<TWord[]>>(
        '/words/',
        {
          params,
        }
      );

      return {
        data: data.data.map((item) => Word.fromServer(item)),
        count: data.count,
      };
    } catch (error) {
      console.error('Transport getWords error:', error);
      return { data: [], count: 0 };
    }
  }

  /**
   * Получение слова по ID
   */
  async getWordById(id: string): Promise<Word | null> {
    try {
      const { data } = await axiosInstance.get<TWord>(`/words/${id}`);
      return Word.fromServer(data);
    } catch (error) {
      console.error('Transport getWordById error:', error);
      return null;
    }
  }
}
