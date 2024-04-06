import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import ReduxProvider from "@/components/ReduxProvider";
import QueryProvider from "@/components/QueryProvider";
import type { PropsWithChildren } from "react";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: 'swap', variable: '--font-inter', });

export const metadata: Metadata = {
  title: "Frontend Vault",
  description: "Trying to set some standards",

};

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  width: 'device-width',
};

const RootLayout = ({
  children,
}: Readonly<PropsWithChildren>) => {

  return (
    <html lang="en" className={inter.variable}>
      <body>
        <ErrorBoundary errorMessage="Error Initiated from RootLayout">
          <ReduxProvider>
            <QueryProvider>
              {children}
              <div id="next__portal" />
            </QueryProvider>
          </ReduxProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}

export default RootLayout;