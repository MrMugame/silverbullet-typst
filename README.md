# Silver Bullet Typst(Wypst) plug

## FYI
This plug uses [wypst](https://github.com/0xpapercut/wypst) which is far from finished, so use with caution. Because wypst is mimicking KaTeX, this plug is just a fork of the [KaTeX Plug](https://github.com/silverbulletmd/silverbullet-katex)

## Installation
Run the {[Plugs: Add]} command and paste in: `github:MrMugame/silverbullet-typst/typst.plug.js`

That's all!

## Use

Put a latex block in your markdown:

    ```typst
    c = #plus.minus sqrt(a^2 + b^2)
    ```

And move your cursor outside of the block to live preview it!

**Note:** [Wypst](https://github.com/0xpapercut/wypst) itself is not bundled with this plug, it pulls the JavaScript, CSS and fonts from the JSDelivr CDN. This means _this plug will not work without an Internet connection_. The reason for this limitation is that it is not yet possible to distribute font files via plugs, and Wypst depends on specific web fonts and wasm modules.

## Build
Assuming you have Deno and Silver Bullet installed, simply build using:

```shell
deno task build
```

Or to watch for changes and rebuild automatically

```shell
deno task watch
```

Then, load the locally built plug, add it to your `PLUGS` note with an absolute path, for instance:

```
- file:/Users/you/path/to/katex.plug.json
```

And run the `Plugs: Update` command in SilverBullet.