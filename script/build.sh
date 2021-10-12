#!/bin/bash

mkdir -p public

# First build is to extract metadata and build manifest
esbuild src/column.ts --bundle --outfile=public/index.js --format=cjs --log-level=silent --external:fs --external:path
cp script/manifest.js public
node public/manifest.js
rm public/manifest.js

# Now we build the actual column
esbuild src/column.ts --bundle --outfile=public/$SLUG/index.js --minify --sourcemap --external:fs --external:path
