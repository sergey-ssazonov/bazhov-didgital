import { TPaginationResponse } from '../../types/api';
import axiosInstance from '../axios';
import { Tale, TTale, TTaleFiltersRequest } from '../models/tale.model';

export class TaleTransport {
  /**
   * Получение списка сказов
   */
  async getTales(
    query: TTaleFiltersRequest = {}
  ): Promise<TPaginationResponse<Tale[]>> {
    try {
      const params: Record<string, string> = {};

      if (query.search?.trim()) params.search = query.search.trim();
      if (query.limit) params.limit = String(query.limit);
      if (query.page) params.page = String(query.page);

      const { data } = await axiosInstance.get<TPaginationResponse<TTale[]>>(
        '/tales/',
        {
          params,
        }
      );

      return {
        data: data.data.map((item) => Tale.fromServer(item)),
        count: data.count,
      };
    } catch (error) {
      console.error('Transport getWords error:', error);
      return { data: [], count: 0 };
    }
  }

  /**
   * Получение сказа по ID
   */
  async getTaleById(id: string): Promise<Tale | null> {
    try {
      const { data } = await axiosInstance.get<TTale>(`/tales/${id}`);

      return Tale.fromServer(data);
    } catch (error) {
      console.error('Transport getTaleById error:', error);
      return null;
    }
  }

  /**
   * Получение сказа по Slug
   */
  async getTaleBySlug(slug: string): Promise<Tale | null> {
    try {
      const { data } = await axiosInstance.get<TTale>(`/tales/slug/${slug}`);

      return Tale.fromServer(data);
    } catch (error) {
      console.error('Transport getTaleBySlug error:', error);
      return null;
    }
  }
}
