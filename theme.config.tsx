import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Agent SDK Docs</span>,
  head: (
    <>
      <title>Olos Agent SDK Docs</title>
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
};

export default config;
