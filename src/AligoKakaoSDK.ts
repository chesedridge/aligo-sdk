import "es6-shim"
import "reflect-metadata"
import typia from "typia"
import { AligoUtil } from "./Aligo.utils"
import { CommonUtil } from "./Common.utils"
import {
  IInstanceConfig,
  IMessage,
  IMessageHistory,
  IMessageHistoryDetailList,
  IMessageHistoryDetailPage,
  IMessageHistoryPage,
  IOptions,
  ISentMessageInfo,
  ITemplate
} from "./types/AligoKakaSdk.type"

class AligoKakaoSDK {
  constructor(private config: IInstanceConfig) {
    const requiredKeys = [
      "key",
      "userId",
      "sender",
      "senderKey"
    ] as (keyof IInstanceConfig)[]

    if (requiredKeys.some((key) => !config[key])) {
      throw new Error(`Required keys are missing: ${requiredKeys.join(", ")}`)
    }

    this.config = config
  }

  async getTemplateList(): Promise<ITemplate[]> {
    const body = {
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
      const templates: ITemplate[] = res.list
      typia.assert(templates)

      return templates
    } else {
      throw new Error(res.message)
    }
  }

  async getMessageHistoryPage(
    startDate: Date,
    endDate: Date,
    page = 1,
    limit = 500
  ): Promise<IMessageHistoryPage> {
    const body = {
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
      const messageHistoryPage: IMessageHistoryPage = {
        list: res.list,
        page: {
          current: Number(res.currentPage),
          total: Number(res.totalPage)
        }
      }
      typia.assert(messageHistoryPage)

      return messageHistoryPage
    } else {
      throw new Error(res.message)
    }
  }

  async getMessageHistoryDetailPage(
    mid: string,
    page = 1,
    limit = 50
  ): Promise<IMessageHistoryDetailPage> {
    const body = {
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
      const messageHistoryDetailPage: IMessageHistoryDetailPage = {
        list: res.list,
        page: {
          current: Number(res.currentPage),
          total: Number(res.totalPage)
        }
      }
      typia.assert(messageHistoryDetailPage)

      return messageHistoryDetailPage
    } else {
      throw new Error(res.message)
    }
  }

  async getAllMessageHistory(
    startDate: Date,
    endDate: Date,
    detail: true
  ): Promise<IMessageHistoryDetailList[]>
  async getAllMessageHistory(
    startDate: Date,
    endDate: Date,
    detail: false
  ): Promise<IMessageHistory[]>
  async getAllMessageHistory(
    startDate = new Date(),
    endDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    detail: boolean
  ): Promise<IMessageHistoryDetailList[] | IMessageHistory[]> {
    const messages: IMessageHistory[] = []
    let totalPage = 1
    let currentPage = 1
    while (currentPage <= totalPage) {
      const res = await this.getMessageHistoryPage(
        startDate,
        endDate,
        currentPage,
        500
      )
      messages.push(...res.list)

      currentPage += 1
      totalPage = res.page.total
    }

    if (detail) {
      const detailedMessages = await Promise.all(
        messages.map((message) =>
          // message 정보와 그 message mid에 대한 상세 메세지 리스트
          this.getMessageHistoryDetailPage(message.mid, 1, 50).then(
            ({ list }) => ({
              ...message,
              list
            })
          )
        )
      )

      typia.assert<IMessageHistoryDetailList[]>(detailedMessages)
      return detailedMessages
    }

    typia.assert(messages)
    return messages
  }

  async sendMessage(
    template: ITemplate,
    messages: IMessage[],
    options?: IOptions
  ): Promise<ISentMessageInfo> {
    const sendDateOption = options?.sendDate
      ? {
          senddate: CommonUtil.formatDate(options.sendDate, "YYYYMMDDHHmmss")
        }
      : {}

    const failoverOption = options?.failover
      ? {
          failover: options.failover ? "Y" : "N"
        }
      : { failover: "N" }

    const body = {
      apikey: this.config.key,
      userid: this.config.userId,
      sender: this.config.sender,
      senderkey: this.config.senderKey,
      tpl_code: template.templtCode,
      ...AligoUtil.createMessageBody(template, messages),
      ...sendDateOption,
      ...failoverOption
    }

    const res = await CommonUtil.sendFormPost(
      "https://kakaoapi.aligo.in/akv10/alimtalk/send/",
      body
    )

    if (res.code === 0) {
      const sentMessageInfo: ISentMessageInfo = res.info

      typia.assert(sentMessageInfo)
      return sentMessageInfo
    } else {
      throw new Error(res.message)
    }
  }

  async cancelMessage(mid: number): Promise<boolean> {
    const body = {
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
