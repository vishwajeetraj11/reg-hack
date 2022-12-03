
import axios, { AxiosError, AxiosResponse } from "axios";
import { MutationOptions, QueryKey, useMutation, useQuery, UseQueryOptions } from "@tanstack/react-query";
import { endpoints } from "./urls";

export const PublicQueryFactory = (queryKey: QueryKey, url: string, options?: UseQueryOptions<any, AxiosError, any>) => {

    return useQuery<any, AxiosError, any>(
        queryKey,
        async () => {
            return axios({
                url,
                method: 'GET',
            }).then(
                (result: AxiosResponse) => result.data
            )
        }, {
        refetchOnWindowFocus: false,
        retry: false,
        ...options
    }
    )
}

// export const QueryFactory = (queryKey: QueryKey, url: string, options?: UseQueryOptions<any, AxiosError, any>) => {

//     return useQuery<any, AxiosError, any>(
//         queryKey,
//         async () => {
//             const token = localStorage
//             return axios({
//                 url,
//                 method: 'GET',
//                 headers: {
//                     "Authorization": `Bearer ${token}`
//                 },
//             }).then(
//                 (result: AxiosResponse) => result.data
//             )
//         }, {
//         refetchOnWindowFocus: false,
//         retry: false,
//         ...options
//     }
//     )
// }

// const MutationFactory = (mutationKey: QueryKey, url: string, method: 'POST' | 'PUT' | 'PATCH', options?: MutationOptions) => {

//     return useMutation<any, AxiosError, any>({
//         mutationKey,
//         mutationFn: async (variables: { body: any }) => {
//             const token = await getToken()
//             return axios({
//                 url,
//                 method,
//                 headers: {
//                     "Authorization": `Bearer ${token}`
//                 },
//                 data: variables.body
//             }).then(
//                 (response: AxiosResponse) => response.data
//             )
//         },
//         ...options
//     })

// }

// const DeleteMutationFactory = (mutationKey: QueryKey, url: string, options?: MutationOptions) => {

//     return useMutation<any, AxiosError, any>({
//         mutationKey,
//         mutationFn: async () => {
//             const token = await getToken()
//             return axios({
//                 url,
//                 method: 'DELETE',
//                 headers: {
//                     "Authorization": `Bearer ${token}`
//                 },
//             }).then(
//                 (response: AxiosResponse) => response.data
//             )
//         },
//         ...options
//     })

// }


export const useStats = (options?: UseQueryOptions<any, AxiosError, any>) => PublicQueryFactory(['Statistics'], endpoints.get, options);
