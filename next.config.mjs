/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: () => {
        return [
            {
                source: "/blog/:path*",
                destination: "/internal-blog/:path*",
            },
        ];
    },
};

export default nextConfig;
