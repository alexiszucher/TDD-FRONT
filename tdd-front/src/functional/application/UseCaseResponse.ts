export default class UseCaseResponse<T> {
    private _success: boolean = false;
    private _body: T | null = null;
    private _errorMessage: string = "";

    public static createSuccessReponse<T>(body: T): UseCaseResponse<T> {
        let response: UseCaseResponse<T> = new UseCaseResponse();
        response._success = true;
        response._body = body;
        return response;
    }

    public static createErrorResponse<T>(errorMessage: string): UseCaseResponse<T> {
        let response: UseCaseResponse<T> = new UseCaseResponse();
        response._success = false;
        response._errorMessage = errorMessage;
        return response;
    }

    public get success(): boolean {
        return this._success;
    }

    public get body(): T | null {
        return this._body;
    }
    
    public get errorMessage(): string {
        return this._errorMessage;
    }
}