import { assert, test } from "@hazae41/phobos";
import { Ed25519SigningKey, Memory, load } from "./mod.ts";

test("sign", async () => {
  await load()

  const key = new Ed25519SigningKey()
  const msg = new Memory(Uint8Array.fromHex("deadbeef"))

  const sig0 = key.sign(msg)

  assert(key.publish().verify(msg, sig0))

  const sig1 = key.sign(msg)

  assert(sig0.to_bytes().bytes.toHex() === sig1.to_bytes().bytes.toHex())
})