import { TPaginationResponse } from '../../types/api';
import { Tale, TTaleFiltersRequest } from '../models/tale.model';
import { TaleTransport } from '../transports/tale.transport';
import toPlain from '../utils/to-plain';

export class TaleService {
  private transport: TaleTransport;

  constructor(transport: TaleTransport) {
    this.transport = transport;
  }

  /**
   * Бизнес-логика получения сказов
   */
  async getTales(
    query: TTaleFiltersRequest = {}
  ): Promise<TPaginationResponse<Tale[]>> {
    const tales = await this.transport.getTales(query);
    return toPlain(tales);
  }

  /**
   * Получение сказа по ID
   */
  async getTaleById(id: string): Promise<Tale | null> {
    const tale = await this.transport.getTaleById(id);
    return toPlain(tale);
  }

  /**
   * Получение сказа по ID
   */
  async getTaleBySlug(slug: string): Promise<Tale | null> {
    const tale = await this.transport.getTaleBySlug(slug);
    return toPlain(tale);
  }
}

export const taleService = new TaleService(new TaleTransport());
