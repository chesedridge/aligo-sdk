import { AligoUtil } from "./Aligo.utils.js"
import { CommonUtil } from "./Common.utils.js"
import {
  InstanceConfig,
  Message,
  MessageHistory,
  MessageHistoryDetailList,
  MessageHistoryDetailPage,
  MessageHistoryPage,
  Options,
  SentMessageInfo,
  Template
} from "./types/AligoKakaSdk.type.js"

class AligoKakaoSDK {
  private token

  constructor(private config: InstanceConfig) {
    const requiredKeys = ["key", "userId", "sender", "senderKey"]
    if (requiredKeys.some(key => !config[key])) {
      throw new Error(`Required keys are missing: ${requiredKeys.join(", ")}`)
    }
    this.config = config
  }

  private async getToken(lifetimeMs = 1000 * 30) {
    const res = await CommonUtil.sendFormPost(
      `https://kakaoapi.aligo.in/akv10/token/create/${lifetimeMs}/s`,
      {
        apikey: this.config.key,
        userid: this.config.userId
      }
    )
    if (res.code === 0) {
      return {
        content: res.token,
        lifetime: new Date(Date.now() + lifetimeMs)
      }
    } else {
      throw new Error(res.message)
    }
  }

  private async tokenCheck(): Promise<void> {
    if (!this.token || this.token.lifetime < Date.now()) {
      this.token = await this.getToken()
    }
  }

  async getTemplateList(): Promise<Template[]> {
    await this.tokenCheck()

    const body = {
      token: this.token.content,
      apikey: this.config.key,
      userid: this.config.userId,
      sender: this.config.sender,
      senderkey: this.config.senderKey
    }

    const res = await CommonUtil.sendFormPost(
      "https://kakaoapi.aligo.in/akv10/template/list",
      body
    )

    if (res.code === 0) {
      return res.list
    } else {
      throw new Error(res.message)
    }
  }

  async getMessageHistoryPage(
    startDate: Date,
    endDate: Date,
    page = 1,
    limit = 500
  ): Promise<MessageHistoryPage> {
    await this.tokenCheck()

    const body = {
      token: this.token.content,
      apikey: this.config.key,
      userid: this.config.userId,
      page,
      limit,
      startdate: CommonUtil.formatDate(startDate, "YYYYMMDD"),
      enddate: CommonUtil.formatDate(endDate, "YYYYMMDD")
    }

    const res = await CommonUtil.sendFormPost(
      "https://kakaoapi.aligo.in/akv10/history/list",
      body
    )

    if (res.code === 0) {
      return {
        list: res.list,
        page: {
          current: Number(res.currentPage),
          total: Number(res.totalPage)
        }
      }
    } else {
      throw new Error(res.message)
    }
  }

  async getMessageHistoryDetailPage(
    mid: number,
    page = 1,
    limit = 50
  ): Promise<MessageHistoryDetailPage> {
    await this.tokenCheck()

    const body = {
      token: this.token.content,
      apikey: this.config.key,
      userid: this.config.userId,
      mid,
      page,
      limit
    }

    const res = await CommonUtil.sendFormPost(
      "https://kakaoapi.aligo.in/akv10/history/detail",
      body
    )

    if (res.code === 0) {
      return {
        list: res.list,
        page: {
          current: Number(res.currentPage),
          total: Number(res.totalPage)
        }
      }
    } else {
      throw new Error(res.message)
    }
  }

  async getAllMessageHistory(
    startDate = new Date(),
    endDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    detail = false
  ): Promise<MessageHistory[] | MessageHistoryDetailList[]> {
    await this.tokenCheck()

    const messages = []
    let totalPage = 1
    let currentPage = 1
    while (currentPage <= totalPage) {
      const res = await this.getMessageHistoryPage(
        startDate,
        endDate,
        currentPage
      )
      messages.push(...res.list)

      currentPage += 1
      totalPage = res.page.total
    }

    if (detail) {
      const detailedMessages = await Promise.all(
        messages.map(message =>
          // message 정보와 그 message mid에 대한 상세 메세지 리스트
          this.getMessageHistoryDetailPage(message.mid).then(({ list }) => ({
            ...message,
            list
          }))
        )
      )

      return detailedMessages
    }

    return messages
  }

  async sendMessage(
    template: Template,
    messages: Message[],
    options?: Options
  ): Promise<SentMessageInfo> {
    await this.tokenCheck()

    const body = {
      token: this.token.content,
      apikey: this.config.key,
      userid: this.config.userId,
      sender: this.config.sender,
      senderkey: this.config.senderKey,
      tpl_code: template.templtCode,
      ...AligoUtil.createMessageBody(template, messages),
      ...options
    }

    const res = await CommonUtil.sendFormPost(
      "https://kakaoapi.aligo.in/akv10/alimtalk/send/",
      body
    )

    if (res.code === 0) {
      return res.info
    } else {
      throw new Error(res.message)
    }
  }

  async cancelMessage(mid: number): Promise<boolean> {
    await this.tokenCheck()

    const body = {
      token: this.token.content,
      apikey: this.config.key,
      userid: this.config.userId,
      mid
    }

    const res = await CommonUtil.sendFormPost(
      "https://kakaoapi.aligo.in/akv10/cancel/",
      body
    )

    if (res.code === 0) {
      return true
    } else {
      throw new Error(res.message)
    }
  }
}

export default AligoKakaoSDK
