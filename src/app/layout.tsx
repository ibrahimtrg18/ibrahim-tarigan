import React from "react";

import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Layout } from "@/components/Layout";
import PageTransition from "@/components/PageTransition";
import { Providers } from "@/components/Providers";
import { GOOGLE_ANALYTICS_ID } from "@/constants";
import { getApps } from "@/graphql/api/getApp";
import { App } from "@/types/Hygraph/models/App";

type RootLayoutProps = React.HTMLProps<HTMLElement>;

export default async function RootLayout({ children }: RootLayoutProps) {
  const { data } = await getApps();
  const app = data?.apps[0] as App;

  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="Dgh3-7chmF8XSw4RmI2T13hmdsE370jbAOLx8y43OJ0"
        />
        <link rel="icon" href={app?.avatar?.url} sizes="any" />
      </head>
      <body style={{ overflowY: "auto" }}>
        {GOOGLE_ANALYTICS_ID && <GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} />}
        <Providers app={app}>
          <Layout
            bgRepeat="repeat"
            backgroundPosition="center"
            backgroundRepeat="repeat"
            backgroundSize="333px"
          >
            <PageTransition>{children}</PageTransition>
          </Layout>
        </Providers>
      </body>
    </html>
  );
}
