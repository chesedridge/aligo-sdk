import dotenv from "dotenv"
dotenv.config()
import AligoKakaoSDK from "../src/AligoKakaoSDK"
import { IMessage } from "../src/types/AligoKakaSdk.type"
import { CommonUtil } from "../src/Common.utils"

describe("AligoKakaoSDK", () => {
  const aligoClient = new AligoKakaoSDK({
    key: process.env.key as string,
    userId: process.env.userId as string,
    sender: process.env.sender as string,
    senderKey: process.env.senderKey as string
  })

  const weekAgo = new Date()
  weekAgo.setDate(weekAgo.getDate() - 7)
  const today = new Date()

  describe("Fn:getTemplateList()", () => {
    it("오류를 반환하면 안된다.", async () => {
      await aligoClient.getTemplateList()
    })
  })

  describe("Fn:getMessageHistoryPage()", () => {
    it("오류를 반환하면 안된다.", async () => {
      await aligoClient.getMessageHistoryPage(weekAgo, today)
    })
  })

  describe("Fn:getMessageHistoryDetailPage()", () => {
    let mid: string | null = null

    beforeEach(async () => {
      const msg = await aligoClient.getMessageHistoryPage(weekAgo, today)

      mid = msg.list[0].mid
    })

    it("오류를 반환하면 안된다.", async () => {
      await aligoClient.getMessageHistoryDetailPage(mid!)
    })
  })

  describe("Fn:getAllMessageHistory()", () => {
    it("오류를 반환하면 안된다.", async () => {
      await aligoClient.getAllMessageHistory(weekAgo, today, true)

      await aligoClient.getAllMessageHistory(weekAgo, today, false)
    })
  })

  describe("Fn:sendMessage() & Fn:cancelMessage()", () => {
    it("오류를 반환하면 안된다.", async () => {
      const { TEST_TEMPLATE_CODE, TEST_PHONE, TEST_NAME } = process.env

      if (!TEST_TEMPLATE_CODE || !TEST_PHONE || !TEST_NAME) {
        throw new Error("TEST_TEMPLATE_CODE, TEST_PHONE, TEST_NAME이 없습니다.")
      }
      // 서비스 알림 확정 = UA_1063
      const template = (await aligoClient.getTemplateList()).find(
        (template) => template.templtCode === TEST_TEMPLATE_CODE
      )

      const message: IMessage = {
        subject: "서비스 알림",
        target: TEST_PHONE,
        content: {
          "서비스명": "교정테라피",
          "고객명": TEST_NAME,
          "서비스 장소": "회의실",
          "월일시간": "5월 8일 오후 1시 0분"
        }
      }

      const after1days = new Date()
      after1days.setDate(after1days.getDate() + 1)

      // 즉시 전송
      await aligoClient.sendMessage(template!, [message])

      // 1일 후 전송
      const msgRes = await aligoClient.sendMessage(template!, [message], {
        sendDate: after1days,
        failover: true
      })

      await CommonUtil.sleep(2000)

      await aligoClient.cancelMessage(msgRes.mid)
    })
  })
})
