# DuckDuckScrape

Scrapes DuckDuckGo search results in node.js.

```js
// From test.js
const dds = require("./es");

async function main() {
  const res = await dds.search("Hello, world");
  console.log(res); // [ { title: "...", url: "...", desc: "..." } ]
}

main();
```
