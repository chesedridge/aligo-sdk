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

  describe("Fn:getTemplateList()", () => {
    it("오류를 반환하면 안된다.", async () => {
      await aligoClient.getTemplateList()
    })
  })

  describe("Fn:getMessageHistoryPage()", () => {
    it("오류를 반환하면 안된다.", async () => {
      const msg = await aligoClient.getMessageHistoryPage(
        new Date("2024-05-08 00:00:00"),
        new Date("2024-05-08 23:59:59")
      )
    })
  })

  describe("Fn:getMessageHistoryDetailPage()", () => {
    let mid: string | null = null

    beforeEach(async () => {
      const msg = await aligoClient.getMessageHistoryPage(
        new Date("2024-05-08 00:00:00"),
        new Date("2024-05-08 23:59:59")
      )

      mid = msg.list[0].mid
    })

    it("오류를 반환하면 안된다.", async () => {
      await aligoClient.getMessageHistoryDetailPage(mid!)
    })
  })

  describe("Fn:getAllMessageHistory()", () => {
    it("오류를 반환하면 안된다.", async () => {
      await aligoClient.getAllMessageHistory(
        new Date("2024-05-08 00:00:00"),
        new Date("2024-05-08 23:59:59"),
        true
      )

      await aligoClient.getAllMessageHistory(
        new Date("2024-05-08 00:00:00"),
        new Date("2024-05-08 23:59:59"),
        false
      )
    })
  })

  describe("Fn:sendMessage() & Fn:cancelMessage()", () => {
    it("오류를 반환하면 안된다.", async () => {
      // 서비스 알림 10분 전
      const template = (await aligoClient.getTemplateList()).find(
        template =>
          template.templtCode === (process.env.TEST_TEMPLATE_CODE as string)
      )

      const message: IMessage = {
        subject: "서비스 10분전 알림",
        target: process.env.TEST_PHONE_NUMBER as string,
        content: {
          "서비스명": "교정테라피",
          "고객명": process.env.TEST_USER_NAME as string,
          "서비스 장소": "회의실",
          "월일시간": "5월 8일 오후 1시 0분"
        }
      }

      const after1days = new Date()
      after1days.setDate(after1days.getDate() + 1)

      await aligoClient.sendMessage(template!, [message])

      const msgRes = await aligoClient.sendMessage(template!, [message], {
        sendDate: after1days,
        failover: true
      })

      await CommonUtil.sleep(1000)

      await aligoClient.cancelMessage(msgRes.mid)
    })
  })
})
