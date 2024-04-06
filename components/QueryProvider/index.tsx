"use client"

import type { PropsWithChildren } from 'react';
import { dehydrate, HydrationBoundary, QueryClientProvider } from "@tanstack/react-query"
import { client } from "@/config/react-query/client"
import type { DehydratedState } from '@tanstack/react-query';

const QueryProvider = ({
    children
}: PropsWithChildren) => {
    const dehydratedState: DehydratedState = dehydrate(client);
    return(
        <QueryClientProvider client={client}>
            <HydrationBoundary state={dehydratedState}>
                {children}
            </HydrationBoundary>
        </QueryClientProvider>
    )
}

export default QueryProvider