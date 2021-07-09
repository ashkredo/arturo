import React, { FC, ReactNode } from "react";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout: FC<Props> = ({ children, title = "Arturo" }: Props) => (
  <div className="main-content">
    <Head>
      <title>{title}</title>
      <meta name="description" content="Arturo page" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {children}
  </div>
);

export default Layout;
