import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { IdentityData } from './types'

// Define a service using a base URL and expected endpoints
export const identityApi = createApi({
  reducerPath: 'identityApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getIdentityData: builder.query<IdentityData, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetIdentityDataQuery } = identityApi