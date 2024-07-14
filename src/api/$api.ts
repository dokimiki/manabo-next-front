import type { AspidaClient } from "aspida";
import type { Methods as Methods_um4um8 } from "./v1/auth/login";
import type { Methods as Methods_b5arjf } from "./v1/manabo/proxy";

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
    const prefix = (baseURL === undefined ? "https://manabo-next-back.onrender.com" : baseURL).replace(/\/$/, "");
    const PATH0 = "/v1/auth/login";
    const PATH1 = "/v1/manabo/proxy";
    const GET = "GET";
    const POST = "POST";
    const PUT = "PUT";
    const DELETE = "DELETE";
    const HEAD = "HEAD";
    const PATCH = "PATCH";
    const OPTIONS = "OPTIONS";

    return {
        v1: {
            auth: {
                login: {
                    post: (option: { body: Methods_um4um8["post"]["reqBody"]; config?: T | undefined }) =>
                        fetch<Methods_um4um8["post"]["resBody"]>(prefix, PATH0, POST, option).json(),
                    $post: (option: { body: Methods_um4um8["post"]["reqBody"]; config?: T | undefined }) =>
                        fetch<Methods_um4um8["post"]["resBody"]>(prefix, PATH0, POST, option)
                            .json()
                            .then((r) => r.body),
                    $path: () => `${prefix}${PATH0}`,
                },
            },
            manabo: {
                proxy: {
                    get: (option: { body: Methods_b5arjf["get"]["reqBody"]; config?: T | undefined }) =>
                        fetch<Methods_b5arjf["get"]["resBody"]>(prefix, PATH1, GET, option).json(),
                    $get: (option: { body: Methods_b5arjf["get"]["reqBody"]; config?: T | undefined }) =>
                        fetch<Methods_b5arjf["get"]["resBody"]>(prefix, PATH1, GET, option)
                            .json()
                            .then((r) => r.body),
                    head: (option: { body: Methods_b5arjf["head"]["reqBody"]; config?: T | undefined }) =>
                        fetch<Methods_b5arjf["head"]["resBody"]>(prefix, PATH1, HEAD, option).json(),
                    $head: (option: { body: Methods_b5arjf["head"]["reqBody"]; config?: T | undefined }) =>
                        fetch<Methods_b5arjf["head"]["resBody"]>(prefix, PATH1, HEAD, option)
                            .json()
                            .then((r) => r.body),
                    post: (option: { body: Methods_b5arjf["post"]["reqBody"]; config?: T | undefined }) =>
                        fetch<Methods_b5arjf["post"]["resBody"]>(prefix, PATH1, POST, option).json(),
                    $post: (option: { body: Methods_b5arjf["post"]["reqBody"]; config?: T | undefined }) =>
                        fetch<Methods_b5arjf["post"]["resBody"]>(prefix, PATH1, POST, option)
                            .json()
                            .then((r) => r.body),
                    put: (option: { body: Methods_b5arjf["put"]["reqBody"]; config?: T | undefined }) =>
                        fetch<Methods_b5arjf["put"]["resBody"]>(prefix, PATH1, PUT, option).json(),
                    $put: (option: { body: Methods_b5arjf["put"]["reqBody"]; config?: T | undefined }) =>
                        fetch<Methods_b5arjf["put"]["resBody"]>(prefix, PATH1, PUT, option)
                            .json()
                            .then((r) => r.body),
                    delete: (option: { body: Methods_b5arjf["delete"]["reqBody"]; config?: T | undefined }) =>
                        fetch<Methods_b5arjf["delete"]["resBody"]>(prefix, PATH1, DELETE, option).json(),
                    $delete: (option: { body: Methods_b5arjf["delete"]["reqBody"]; config?: T | undefined }) =>
                        fetch<Methods_b5arjf["delete"]["resBody"]>(prefix, PATH1, DELETE, option)
                            .json()
                            .then((r) => r.body),
                    options: (option: { body: Methods_b5arjf["options"]["reqBody"]; config?: T | undefined }) =>
                        fetch<Methods_b5arjf["options"]["resBody"]>(prefix, PATH1, OPTIONS, option).json(),
                    $options: (option: { body: Methods_b5arjf["options"]["reqBody"]; config?: T | undefined }) =>
                        fetch<Methods_b5arjf["options"]["resBody"]>(prefix, PATH1, OPTIONS, option)
                            .json()
                            .then((r) => r.body),
                    patch: (option: { body: Methods_b5arjf["patch"]["reqBody"]; config?: T | undefined }) =>
                        fetch<Methods_b5arjf["patch"]["resBody"]>(prefix, PATH1, PATCH, option).json(),
                    $patch: (option: { body: Methods_b5arjf["patch"]["reqBody"]; config?: T | undefined }) =>
                        fetch<Methods_b5arjf["patch"]["resBody"]>(prefix, PATH1, PATCH, option)
                            .json()
                            .then((r) => r.body),
                    $path: () => `${prefix}${PATH1}`,
                },
            },
        },
    };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
