import { QueryClient as qclient } from '@tanstack/query-core'
import type { QueryClient, QueryClientConfig } from '@tanstack/query-core'

const config: QueryClientConfig = {
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  }

const client: QueryClient = new qclient(config)

export {
    client,
}