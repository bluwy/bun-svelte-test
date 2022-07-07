# bun-svelte

Quick test comparing Svelte compile performance between [bun](https://bun.sh) and [node](https://nodejs.org).

# Test

```bash
# Install dependencies
$ bun install

# Run with bun
$ bun index.js

# Run with node
$ node index.js
```

## Result

```
bun: ~76ms
node: ~63ms
```

> **Note**: This is only a very simple test. In reality we would be compiling multiple files at once.

## License

MIT
