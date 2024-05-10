// import getConfig from 'next/config';

export default async function handler(
    req,
    res
) {
    if (req.method == 'GET') {
        // const { serverRuntimeConfig } = getConfig();

        res.status(200).json({
            message: "working with api"
        });
    }
}
