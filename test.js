const dds = require("./es");

async function main() {
  const res = await dds.search("Hello, world");
  console.log(res);
}

main();
