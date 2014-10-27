component-catalog
=================

Creates an HTML catalog for webcomponents hosted in a shared directory

See a demo at [http://components.geekonaut.de](http://components.geekonaut.de)

Usage
-----

```shell
  $ node index.js /path/to/component/dir /path/to/output/dir
```

For best results put a `component.json` into each component sub directory that looks like this:

```json
{
  "name": "fake-terminal",
  "usage": "<fake-terminal>$ </fake-terminal>",
  "description": "An extensible pseudo-terminal web component for your website (or whatever you do in the browser), based on   terminal.js.",
  "links": {
    "demo": "https://avgp.github.io/fake-terminal/index.html",
    "repository": "https://github.com/avgp/fake-terminal",
    "documentation": "https://github.com/AVGP/fake-terminal/blob/gh-pages/README.md"
  }
}
```
