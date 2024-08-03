import "@mantine/core/styles.css";
import "@mantine/dropzone/styles.css";
import React from "react";
import {
  MantineProvider,
  ColorSchemeScript,
  AppShell,
  AppShellMain,
  Text,
  Stack,
  AppShellFooter,
} from "@mantine/core";
import { Righteous } from "next/font/google";
import { theme } from "../theme";

export const metadata = {
  title: "MP2TC",
  description: "Convert a MakePlace file to a Teamcraft list",
};

const righteous = Righteous({ weight: "400", subsets: ["latin"] });

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <AppShell>
            <AppShellMain>
              <Stack justify="center" pt={100}>
                <Text className={righteous.className} fz={60} ta="center">
                  MakePlace to Teamcraft
                </Text>
                {children}
              </Stack>
            </AppShellMain>
            <AppShellFooter py="sm">
              <Text fz={12} ta="center">
                Made with 💙 by Palurien
              </Text>
            </AppShellFooter>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
