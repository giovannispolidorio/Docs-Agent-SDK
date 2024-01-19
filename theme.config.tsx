import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Olos para Desenvolvedores</span>,
  head: (
    <>
      <title>Olos para Desenvolvedores</title>
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
    text: "Olos Tecnologia e Sistemas LTDA.",
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
  sidebar: {
    defaultMenuCollapseLevel: -1,
  },
  i18n: [
    { locale: "pt-BR", text: "Português BR" },
    { locale: "es", text: "Español" },
    { locale: "us", text: "English" },
  ],
};

//https://nextra.site/docs/docs-theme/page-configuration

export default config;
