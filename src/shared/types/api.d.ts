export type TFiltersQuery = {
  search?: string;
  byLetter?: string;
  taleId?: string;
};

export type TPaginationQuery = {
  limit?: number;
  page?: number;
};

export type TPaginationResponse<T> = {
  data: T;
  count: number;
};
