import dotenv from "dotenv"
import AligoKakaoSDK from "./index"
dotenv.config()
;(async () => {
  const aligoClient = new AligoKakaoSDK({
    key: process.env.key as string,
    userId: process.env.userId as string,
    sender: process.env.sender as string,
    senderKey: process.env.senderKey as string
  })

  const templates = await aligoClient.getTemplateList(true)

  console.log(templates)
})()
