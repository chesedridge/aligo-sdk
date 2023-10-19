import dotenv from "dotenv"
import AligoKakaoSDK from "./index"
import { Message, Template } from "./src/types/AligoKakaSdk.type"
dotenv.config()
;(async () => {
  const aligoClient = new AligoKakaoSDK({
    key: process.env.key as string,
    userId: process.env.userId as string,
    sender: process.env.sender as string,
    senderKey: process.env.senderKey as string
  })

  const templates = await aligoClient.getTemplateList(true)

  const template = templates.find(
    template => template.templtCode === process.env.TEST_TEMPLATE_CODE
  )

  const message = {
    subject: "테스트 메시지",
    target: process.env.TEST_PHONE,
    content: {
      ...JSON.parse(process.env.TEST_TEMPLATE_CONTENT ?? "{}")
    }
  }

  const sentMessage = await aligoClient.sendMessage(template as Template, [
    message as Message
  ])

  console.log(sentMessage)
})()
