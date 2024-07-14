import { ApiErrorResponse } from "@/src/types/api";
import type { DefineMethods } from "aspida";

export type Methods = DefineMethods<{
    post: {
        reqBody: {
            username: string;
            password: string;
        };

        resBody: {
            crumbed_cookie: string;
        };
    };
}>;
