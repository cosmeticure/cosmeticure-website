/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig = {};

const configWithNextIntl = withNextIntl(nextConfig);

export default configWithNextIntl;
