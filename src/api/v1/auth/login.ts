import { ApiErrorResponse } from "@/src/types/api";
import type { DefineMethods } from "aspida";

type LoginInfo = {
    username: string;
    password: string;
};

export type Methods = DefineMethods<{
    post: {
        reqBody: LoginInfo;

        resBody: ApiErrorResponse;
    };
}>;
