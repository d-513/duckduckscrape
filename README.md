# DuckDuckScrape

Scrapes DuckDuckGo search results in node.js.

### Install

```bash
yarn add @dada513/duckduckscrape # or npm install @dada513/duckduckscrape
```

### Usage

```js
// From test.js
const dds = require("./es");

async function main() {
  const res = await dds.search("Hello, world");
  console.log(res); // [ { title: "...", url: "...", desc: "..." } ]
}

main();
```

### API

The JSDoc is available at https://dada513.github.io/duckduckscrape/
