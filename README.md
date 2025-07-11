# ed25519.wasm

WebAssembly port of Ed25519

```bash
npm i @hazae41/ed25519.wasm
```

[**Node Package 📦**](https://www.npmjs.com/package/@hazae41/ed25519.wasm)

## Features
- Reproducible building
- Pre-bundled and streamed
- Zero-copy memory slices

## Modules
- ed25519-dalek

## Algorithms
- Ed25519

## Usage

```typescript
import { Ed25519Wasm, Ed25519Keypair } from "@hazae41/ed25519.wasm";

// Wait for WASM to load
await Ed25519Wasm.initBundled();

// Generate an identity
using keypair = new Ed25519Keypair();
using identity = keypair.public(); // Ed25519PublicKey

// Define bytes to sign
const bytes = new TextEncoder().encode("hello world"); // Uint8Array

// Sign and verify
using proof = keypair.sign(bytes); // Ed25519Signature
const verified = identity.verify(bytes, proof); // boolean
```

You can serialize and deserialize to Uint8Array

```typescript
using memory = new Ed25519Keypair().to_bytes();
const keypair = Ed25519Keypair.from_bytes(memory.bytes);
```

```typescript
using memory = keypair.public().to_bytes();
const identity = Ed25519PublicKey.from_bytes(memory.bytes);
```

```typescript
using memory = keypair.sign(input).to_bytes();
const proof = Ed25519Signature.from_bytes(memory.bytes);
```

## Building

### Unreproducible building

You need to install [Rust](https://www.rust-lang.org/tools/install)

Then, install [wasm-pack](https://rustwasm.github.io/wasm-pack/installer/)

```bash
cargo install wasm-pack
```

Finally, do a clean install and build

```bash
npm ci && npm run build
```

### Reproducible building

You can build the exact same bytecode using Docker, just be sure you're on a `linux/amd64` host

```bash
docker compose up --build
```

Then check that all the files are the same using `npm diff`

```bash
npm diff
```

If the output is empty then the bytecode is the same as the one I commited

### Automated checks

Each time I release a new version on GitHub, the GitHub's CI clones the GitHub repository, reproduces the build, and throws an error if the NPM release is different. If a version is present on NPM but not on GitHub, do not use it!
