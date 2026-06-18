# ed25519.wasm

WebAssembly port of Ed25519

```bash
npm install @hazae41/ed25519-wasm
```

[**📦 NPM**](https://www.npmjs.com/package/@hazae41/ed25519-wasm)

## Features
- Reproducible building
- Pre-bundled and streamed
- Zero-copy memory slices

## Modules
- ed25519-dalek

## Algorithms
- Ed25519 (deterministic, strict)

## Usage

```typescript
import { load, Memory, Ed25519SigningKey } from "@hazae41/ed25519-wasm";

await load();

const key = new Ed25519SigningKey()
const msg = new Memory(Uint8Array.fromHex("deadbeef"))

const pub = key.publish()
const sig = key.sign(msg)

console.log(pub.verify(msg, sig)) // true
```

## Building

### Reproducible building

You can build the exact same bytecode

```bash
npm run compile && npm run prepack
```

Then check that all the files are the same using `npm diff`

```bash
npm diff
```

If the output is empty then the bytecode is the same as the one I published on NPM.

### Automated checks

Each time I release a new version on GitHub, the GitHub's CI clones the GitHub repository, reproduces the build, and throws an error if the NPM release is different. If a version is present on NPM but not on GitHub, do not use it!
