import type { AspidaClient } from 'aspida';
import type { Methods as Methods_um4um8 } from './v1/auth/login';
import type { Methods as Methods_b5arjf } from './v1/manabo/proxy';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://manabo-next-back.onrender.com' : baseURL).replace(/\/$/, '');
  const PATH0 = '/v1/auth/login';
  const PATH1 = '/v1/manabo/proxy';
  const POST = 'POST';

  return {
    v1: {
      auth: {
        login: {
          post: (option: { body: Methods_um4um8['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_um4um8['post']['resBody']>(prefix, PATH0, POST, option).json(),
          $post: (option: { body: Methods_um4um8['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_um4um8['post']['resBody']>(prefix, PATH0, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH0}`,
        },
      },
      manabo: {
        proxy: {
          post: (option: { body: Methods_b5arjf['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_b5arjf['post']['resBody']>(prefix, PATH1, POST, option).json(),
          $post: (option: { body: Methods_b5arjf['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_b5arjf['post']['resBody']>(prefix, PATH1, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH1}`,
        },
      },
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
