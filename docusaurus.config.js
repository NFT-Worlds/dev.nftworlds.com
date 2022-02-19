// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {any} */
const npm2yarn = require('@docusaurus/remark-plugin-npm2yarn');
const codetabs = require('docusaurus-remark-plugin-codetabs');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'NFT Worlds Developers',
    tagline: 'Documentation for builders creating experiences in the NFT Worlds metaverse',
    url: 'https://dev.nftworlds.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'NFT-Worlds', // Usually your GitHub org/user name.
    projectName: 'dev.nftworlds.com', // Usually your repo name.
    deploymentBranch: "gh-pages",
    trailingSlash: false,

    presets: [
        [
            '@docusaurus/preset-classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/NFT-Worlds/dev.nftworlds.com/edit/main',
                    routeBasePath: '/',
                    remarkPlugins: [
                        [npm2yarn, {sync: true}],
                        [codetabs, {sync: true}],
                    ],
                },
                pages: {
                    remarkPlugins: [
                        [npm2yarn, {sync: true}],
                        [codetabs, {sync: true}],
                    ],
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    //editUrl:
                    //'https://github.com/facebook/docusaurus/edit/main/website/blog/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: '',
                logo: {
                    alt: 'NFT Worlds Developer Docs logo',
                    src: 'img/logo.avif',
                },
                items: [],
            },
            footer: {
                style: 'light',
                links: [
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Discord',
                                href: 'https://discord.com/invite/nft-worlds',
                            },
                            {
                                label: 'Twitter',
                                href: 'https://twitter.com/nftworldsNFT',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Website',
                                href: 'https://nftworlds.com/',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/NFT-Worlds/',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} NFT Worlds`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
