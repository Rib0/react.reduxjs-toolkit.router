import { API } from '@/constants/api';

type ApiKeys = keyof typeof API.services;
type ApiMethod = <T>() => Promise<T>;
type ApiFactory = Record<ApiKeys, ApiMethod>;

export const createApiFactory = () => {
    const apiFactory = Object.entries(API.services).reduce<ApiFactory>(
        (acc, [apiName, { url, method }]) => {
            acc[apiName as ApiKeys] = async () => {
                const response = await fetch(url, { method });
                const data = await response.json();

                return data;
            };

            return acc;
        },
        {} as ApiFactory
    );

    return apiFactory;
};

export type ApiType = ReturnType<typeof createApiFactory>;
