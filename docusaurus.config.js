module.exports = {
  title: 'Beehive Documentation',
  tagline: '',
  url: 'https://developers.beehiveml.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'beehiveml', // Usually your GitHub org/user name.
  projectName: 'developers.beehiveml.com', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Beehive Documentation',
      logo: {
        alt: 'Beehive Logo',
        src: 'img/icon.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/beehiveml/developers.beehiveml.com',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Forums',
              href: 'https://community.beehiveml.com',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/beehiveml'
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/beehiveml/developers.beehiveml.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Beehive.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
          'https://github.com/beehiveml/developers.beehiveml.com/tree/master',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/beehiveml/developers.beehiveml.com/tree/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
