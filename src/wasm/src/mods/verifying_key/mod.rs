use wasm_bindgen::prelude::*;

use crate::mods::signature::Ed25519Signature;

use memory_wasm::Memory;

use crate::libs::jse::rjse;

#[wasm_bindgen]
pub struct Ed25519VerifyingKey {
    pub(crate) inner: ed25519_dalek::VerifyingKey,
}

#[wasm_bindgen]
impl Ed25519VerifyingKey {
    #[wasm_bindgen]
    pub fn from_bytes(input: &Memory) -> Result<Ed25519VerifyingKey, JsError> {
        let sized: &[u8; 32] = rjse!(input.inner.as_slice().try_into())?;

        let inner = rjse!(ed25519_dalek::VerifyingKey::from_bytes(sized))?;

        Ok(Self { inner })
    }

    #[wasm_bindgen]
    pub fn to_bytes(&self) -> Memory {
        Memory::new(self.inner.to_bytes().to_vec())
    }

    #[wasm_bindgen]
    pub fn verify(&self, message: &Memory, signature: &Ed25519Signature) -> bool {
        self.inner.verify_strict(&message.inner, &signature.inner).is_ok()
    }
}
