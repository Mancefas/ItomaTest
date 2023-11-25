// 'use client'

import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { UserDataContextProvider } from "../context/UsersDataContext";
import "@mantine/core/styles.css";

import { theme } from "../theme";

// negalima naudoti metada su 'use client' ...
export const metadata = {
  title: "Itoma test užduotis",
  description: "I am using Mantine with Next.js!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <UserDataContextProvider>
          <MantineProvider theme={theme}>{children}</MantineProvider>
        </UserDataContextProvider>
      </body>
    </html>
  );
}
