import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Agent SDK Docs</span>,
  head: (
    <>
      <title>Olos Agent SDK Docs</title>
      <link
        rel="icon"
        href="https://www.olos.com.br/wp-content/uploads/2020/03/cropped-android-icon-192x192-1-32x32.png"
        sizes="32x32"
      />
      <link
        rel="icon"
        href="https://www.olos.com.br/wp-content/uploads/2020/03/cropped-android-icon-192x192-1-192x192.png"
        sizes="192x192"
      />
    </>
  ),
  search: {
    placeholder: "Buscar...",
  },
  footer: {
    text: "Olos Tecnologia",
  },
  toc: {
    title: "Nesta página",
    extraContent: false,
  },
  feedback: {
    content: "",
  },
  editLink: {
    text: "",
  },
  gitTimestamp: "",
};

//https://nextra.site/docs/docs-theme/page-configuration

export default config;
