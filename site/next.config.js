/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Hermes Kasm Workspaces',
    description: 'Custom Kasm Workspaces registry for Hermes engineering environments.',
    icon: 'https://aiscribe152-hermes.github.io/hermes-kasm-workspaces-registry/1.1/icons/hermes-forge.svg',
    listUrl: 'https://aiscribe152-hermes.github.io/hermes-kasm-workspaces-registry/',
    contactUrl: 'https://github.com/aiscribe152-hermes/hermes-kasm-workspaces-registry/issues',
  },
  reactStrictMode: true,
  basePath: '/hermes-kasm-workspaces-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
