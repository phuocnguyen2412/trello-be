export class ResponseDto<T> {
    message: string;
    data: T[] | T;
    statusCode: number;
    constructor(message: string, data: T[] | T, statusCode: number) {
        this.message = message;
        this.data = data;
        this.statusCode = statusCode;
    }
}
