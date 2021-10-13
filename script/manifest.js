const fs = require("fs");

const {
  default: { json },
} = require("../public/index");

fs.writeFileSync(`public/glide.json`, json);
