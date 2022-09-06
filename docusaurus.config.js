// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "DecentVCS Documentation",
  tagline: "Simple large-file version control",
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
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/decentvcs/docs",
        },
        blog: {
          showReadingTime: true,
          // Remove this to remove the "edit this page" links.
          // editUrl: "https://github.com/decentvcs/docs",
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
            title: "Docs",
            items: [
              {
                label: "Introduction",
                to: "/docs/intro",
              },
              {
                label: "Getting Started",
                to: "/docs/getting-started",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                // TODO: Add Discord invite link
                label: "Discord",
                href: "https://discordapp.com",
              },
              {
                // TODO: Add twitter link
                label: "Twitter",
                href: "https://twitter.com",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/decentvcs",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Decent, LLC. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
