import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	output: 'export',
	distDir: 'dist',
	trailingSlash: true,
	skipTrailingSlashRedirect: false,
	eslint: {
		ignoreDuringBuilds: true,
	},
};

export default nextConfig;
