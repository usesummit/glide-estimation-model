const fs = require("fs");

const {
  default: { json },
} = require("./index");

fs.writeFileSync(`public/glide.json`, json);
