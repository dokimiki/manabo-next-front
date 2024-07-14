import type { DefineMethods } from "aspida";

export type Methods = DefineMethods<{
    post: {
        reqBody: {
            path: string;
            method: string;
            authorization?: string;
            content_type?: string;
            body?: string;
            crumbed_cookie?: string;
        };
        resBody: {
            status_code: number;
            body: string;
            crumbed_cookie: string;
        };
    };
}>;
