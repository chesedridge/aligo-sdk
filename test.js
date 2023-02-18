;(await import("dotenv")).config()

import AligoKakaoSDK from "./index.js"

const aligoKakaoSDK = new AligoKakaoSDK({
  key: process.env.key,
  userId: process.env.userId,
  sender: process.env.sender,
  senderKey: process.env.senderKey
})

try {
  await aligoKakaoSDK._getToken()
} catch (err) {
  console.error(err)
}
