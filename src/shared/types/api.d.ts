export type TFiltersQuery = {
  search?: string;
  byLetter?: string;
  tale?: string;
};

export type TPaginationQuery = {
  limit?: number;
  page?: number;
};

export type TPaginationResponse<T> = {
  data: T;
  count: number;
};
