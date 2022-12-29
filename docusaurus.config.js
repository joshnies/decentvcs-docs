// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "DecentVCS Documentation",
  tagline: "Simple version control for massive projects",
  url: "https://docs.decentvcs.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: "decentvcs", // Usually your GitHub org/user name.
  // projectName: "docs", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/decentvcs/docs",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Documentation",
        logo: {
          alt: "Logo",
          src: "img/logo-circle.png",
        },
        items: [
          {
            href: "https://decentvcs.com/downloads",
            label: "Downloads",
            position: "left",
          },
          {
            href: "https://decentvcs.com/support",
            label: "Support",
            position: "left",
          },
          {
            href: "https://github.com/decentvcs/docs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Documentation",
            items: [
              {
                label: "Introduction",
                to: "/docs/intro",
              },
              {
                label: "Getting Started",
                to: "/docs/getting-started",
              },
              {
                label: "CLI Reference",
                to: "/docs/cli",
              },
            ],
          },
          {
            title: "Follow Us",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/decentvcs",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/decentvcs",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Website",
                href: "https://decentvcs.com",
              },
            ],
          },
        ],
        copyright: `Copyright ${new Date().getFullYear()} DecentVCS, LLC. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
