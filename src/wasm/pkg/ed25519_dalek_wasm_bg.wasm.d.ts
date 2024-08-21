/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export function __wbg_ed25519signingkey_free(a: number, b: number): void;
export function ed25519signingkey_new(): number;
export function ed25519signingkey_from_bytes(a: number, b: number): void;
export function ed25519signingkey_to_bytes(a: number): number;
export function ed25519signingkey_public(a: number): number;
export function ed25519signingkey_sign(a: number, b: number): number;
export function __wbg_ed25519signature_free(a: number, b: number): void;
export function ed25519signature_new(a: number, b: number): void;
export function ed25519signature_from_bytes(a: number, b: number): void;
export function ed25519signature_to_bytes(a: number): number;
export function __wbg_ed25519verifyingkey_free(a: number, b: number): void;
export function ed25519verifyingkey_new(a: number, b: number): void;
export function ed25519verifyingkey_from_bytes(a: number, b: number): void;
export function ed25519verifyingkey_to_bytes(a: number): number;
export function ed25519verifyingkey_verify(a: number, b: number, c: number): number;
export function __wbg_memory_free(a: number, b: number): void;
export function memory_new(a: number, b: number): number;
export function memory_ptr(a: number): number;
export function memory_len(a: number): number;
export function ed25519signingkey_random(): number;
export function __wbindgen_add_to_stack_pointer(a: number): number;
export function __wbindgen_malloc(a: number, b: number): number;
export function __wbindgen_exn_store(a: number): void;
