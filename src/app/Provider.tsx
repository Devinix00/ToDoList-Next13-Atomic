"use client";
import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

interface IProps {
  children: React.ReactNode;
}

function Providers({ children }: IProps) {
  const [client] = React.useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          retry: false,
        },
      },
    })
  );

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}

export default Providers;
