/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
	reactStrictMode: true,
	images: {
    
		formats:['image/webp']
	  },
	env: {
		version: "0.1.0", // process.env.version
	},
	sassOptions: {
		includePaths: [path.join(__dirname, "assets/scss/**")],
	},
	experimental: {
		fontLoaders: [{ loader: "@next/font/google", options: { subsets: ["latin"] } }],
	},
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
};

module.exports = nextConfig;

