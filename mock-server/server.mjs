#!/bin/env/node

process.env.NITRO_PORT = 5005;

await import("./.output/server/index.mjs");
