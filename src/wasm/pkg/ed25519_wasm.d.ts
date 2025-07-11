/* tslint:disable */
/* eslint-disable */
export class Ed25519Signature {
  [Symbol.dispose](): void;
  constructor(bytes: Memory);
  static from_bytes(bytes: Memory): Ed25519Signature;
  to_bytes(): Memory;
  r_bytes(): Memory;
  s_bytes(): Memory;
}
export class Ed25519SigningKey {
  [Symbol.dispose](): void;
  constructor();
  static random(): Ed25519SigningKey;
  static from_bytes(bytes: Memory): Ed25519SigningKey;
  static from_keypair_bytes(bytes: Memory): Ed25519SigningKey;
  to_bytes(): Memory;
  to_keypair_bytes(): Memory;
  verifying_key(): Ed25519VerifyingKey;
  sign(bytes: Memory): Ed25519Signature;
  verify(bytes: Memory, signature: Ed25519Signature): boolean;
  verify_strict(bytes: Memory, signature: Ed25519Signature): boolean;
}
export class Ed25519VerifyingKey {
  [Symbol.dispose](): void;
  constructor(bytes: Memory);
  static from_bytes(bytes: Memory): Ed25519VerifyingKey;
  is_weak(): boolean;
  to_bytes(): Memory;
  verify(bytes: Memory, signature: Ed25519Signature): boolean;
  verify_strict(bytes: Memory, signature: Ed25519Signature): boolean;
}
export class Memory {
  [Symbol.dispose](): void;
/**
* @param {Uint8Array} inner
*/
  constructor(inner: Uint8Array);
/**
* @returns {number}
*/
  ptr(): number;
/**
* @returns {number}
*/
  len(): number;
/**
* @returns {Uint8Array}
*/
  get bytes(): Uint8Array;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_ed25519verifyingkey_free: (a: number, b: number) => void;
  readonly ed25519verifyingkey_from_bytes: (a: number) => [number, number, number];
  readonly ed25519verifyingkey_is_weak: (a: number) => number;
  readonly ed25519verifyingkey_to_bytes: (a: number) => number;
  readonly ed25519verifyingkey_verify: (a: number, b: number, c: number) => number;
  readonly ed25519verifyingkey_verify_strict: (a: number, b: number, c: number) => number;
  readonly ed25519verifyingkey_new: (a: number) => [number, number, number];
  readonly __wbg_ed25519signature_free: (a: number, b: number) => void;
  readonly ed25519signature_from_bytes: (a: number) => [number, number, number];
  readonly ed25519signature_to_bytes: (a: number) => number;
  readonly ed25519signature_r_bytes: (a: number) => number;
  readonly ed25519signature_s_bytes: (a: number) => number;
  readonly ed25519signature_new: (a: number) => [number, number, number];
  readonly __wbg_ed25519signingkey_free: (a: number, b: number) => void;
  readonly ed25519signingkey_new: () => number;
  readonly ed25519signingkey_from_bytes: (a: number) => [number, number, number];
  readonly ed25519signingkey_from_keypair_bytes: (a: number) => [number, number, number];
  readonly ed25519signingkey_to_bytes: (a: number) => number;
  readonly ed25519signingkey_to_keypair_bytes: (a: number) => number;
  readonly ed25519signingkey_verifying_key: (a: number) => number;
  readonly ed25519signingkey_sign: (a: number, b: number) => number;
  readonly ed25519signingkey_verify: (a: number, b: number, c: number) => number;
  readonly ed25519signingkey_verify_strict: (a: number, b: number, c: number) => number;
  readonly ed25519signingkey_random: () => number;
  readonly __wbg_memory_free: (a: number, b: number) => void;
  readonly memory_new: (a: number, b: number) => number;
  readonly memory_ptr: (a: number) => number;
  readonly memory_len: (a: number) => number;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly __externref_table_alloc: () => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly __externref_table_dealloc: (a: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
