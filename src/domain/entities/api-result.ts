export interface ApiResult<T> {
    docs: Array<T>;
    total: number;
    limit: number;
    offset: number;
    page: number;
    pages: number;
}
