import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { AccountData } from './types'

export const accountApi = createApi({
  reducerPath: 'accountApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getAccountData: builder.query<AccountData, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})

export const { useGetAccountDataQuery } = accountApi