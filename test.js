;(await import("dotenv")).config()

import AligoKakaoSDK from "./index.js"

const aligoKakaoSDK = new AligoKakaoSDK({
  key: "key",
  userId: "userId",
  sender: "sender",
  senderKey: "senderKey"
})
