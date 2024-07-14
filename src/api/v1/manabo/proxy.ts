import type { DefineMethods } from "aspida";

type ProxyRequest = {
    path: string;
    authorization: string;
    content_type: string;
    body: string;
};

type ProxyResponse = {
    status_code: number;
    body: string;
};

export type Methods = DefineMethods<{
    get: {
        reqBody: ProxyRequest;
        resBody: ProxyResponse;
    };
    head: {
        reqBody: ProxyRequest;
        resBody: ProxyResponse;
    };
    post: {
        reqBody: ProxyRequest;
        resBody: ProxyResponse;
    };
    put: {
        reqBody: ProxyRequest;
        resBody: ProxyResponse;
    };
    delete: {
        reqBody: ProxyRequest;
        resBody: ProxyResponse;
    };
    options: {
        reqBody: ProxyRequest;
        resBody: ProxyResponse;
    };
    patch: {
        reqBody: ProxyRequest;
        resBody: ProxyResponse;
    };
}>;
