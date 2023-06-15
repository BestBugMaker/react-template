export interface Result {
    code: number;
    // msg: string;
}

export interface ResultData<T> extends Result {
    data: T;
}
