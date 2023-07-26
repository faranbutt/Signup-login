/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        DRIZZLE_DATABASE_URL:"postgres://faranbutt:bFQ0sXL7yEpj@ep-morning-smoke-895844.us-east-2.aws.neon.tech/bitnine",
        SECRET_KEY : "FaranButt"
    }
}

module.exports = nextConfig
