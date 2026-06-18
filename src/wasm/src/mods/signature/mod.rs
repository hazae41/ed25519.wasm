use wasm_bindgen::prelude::*;

use memory_wasm::Memory;

use crate::libs::jse::rjse;

#[wasm_bindgen]
pub struct Ed25519Signature {
    pub(crate) inner: ed25519_dalek::Signature,
}

#[wasm_bindgen]
impl Ed25519Signature {
    #[wasm_bindgen]
    pub fn from_bytes(input: &Memory) -> Result<Ed25519Signature, JsError> {
        Ok(Self { inner: rjse!(ed25519_dalek::Signature::from_slice(&input.inner))? })
    }

    #[wasm_bindgen]
    pub fn to_bytes(&self) -> Memory {
        Memory::new(self.inner.to_bytes().to_vec())
    }
}
