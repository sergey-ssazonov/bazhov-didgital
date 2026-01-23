import { TFiltersQuery, TPaginationQuery } from '../../types/api';

export type TTaleFiltersRequest = Pick<TFiltersQuery, 'search'> &
  TPaginationQuery;

type TTaleImage = {
  id: string;
  link: string;
};

export type TTale = {
  id: string;
  name: string;
  slug: string;
  taleImage: TTaleImage;
};

export class Tale implements TTale {
  id: string;
  name: string;
  slug: string;
  taleImage: TTaleImage;

  constructor(data: TTale) {
    this.id = data.id;
    this.name = data.name;
    this.slug = data.slug;
    this.taleImage = data.taleImage;
  }

  static fromServer(data: TTale): TTale {
    return new Tale(data);
  }
}
