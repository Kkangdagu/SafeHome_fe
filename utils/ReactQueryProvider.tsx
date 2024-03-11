'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

export default function ReactQueryProviders({
  children,
}: React.PropsWithChildren) {
  const [client] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: 3,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={client}>
      <ReactQueryDevtools initialIsOpen />
      {children}
    </QueryClientProvider>
  );
}
