use wasm_bindgen::prelude::*;

use memory_wasm::Memory;

use crate::libs::jse::rjse;

#[wasm_bindgen]
pub struct Ed25519Signature {
    pub(crate) inner: ed25519_dalek::Signature,
}

#[wasm_bindgen]
impl Ed25519Signature {
    #[wasm_bindgen(constructor)]
    pub fn new(bytes: &Memory) -> Result<Ed25519Signature, JsError> {
        Self::from_bytes(bytes)
    }

    #[wasm_bindgen]
    pub fn from_bytes(bytes: &Memory) -> Result<Ed25519Signature, JsError> {
        let inner = rjse!(ed25519_dalek::Signature::from_slice(&bytes.inner))?;

        Ok(Self { inner })
    }

    #[wasm_bindgen]
    pub fn to_bytes(&self) -> Memory {
        Memory::new(self.inner.to_bytes().to_vec())
    }

    #[wasm_bindgen]
    pub fn r_bytes(&self) -> Memory {
        Memory::new(self.inner.r_bytes().to_vec())
    }

    #[wasm_bindgen]
    pub fn s_bytes(&self) -> Memory {
        Memory::new(self.inner.s_bytes().to_vec())
    }
}
