import analyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = analyzer({
    enabled: process.env.NEXT_PUBLIC_BUNDLE_ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*',
            },
        ],
    },
};

export default withBundleAnalyzer(nextConfig);
