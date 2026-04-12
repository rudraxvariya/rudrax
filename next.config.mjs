const nextConfig = {
  output: 'export',
  basePath: '/your-repo-name',  // 👈 add this
  assetPrefix: '/your-repo-name/',  // 👈 add this too
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig