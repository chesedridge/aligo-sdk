// @ts-check

import Utils from "./utils.js"

/**
 * @typedef {{
 * key:string,
 * userId: string,
 * sender: string,
 * senderKey:string
 * }} InstanceConfig
 *
 * @typedef {{
 * templtCode: string,
 * templtContent: string,
 * templtName: string,
 * templateType: "BA" | "EX" | "AD" | "MI",
 * templateEmType: "NONE" | "TEXT" | "IMAGE",
 * templtTitme: string,
 * templtSubtitle: string,
 * templtImageName: string,
 * templtImageUrl: string,
 * securityFlag: "Y" | "N",
 * status: "S" | "A" | "R",
 * inspStatus: "REG" | "REQ" | "APR" | "REJ",
 * senderKey: string,
 * buttons: any[],
 * cdate: string,
 * }} Template
 *
 * @typedef {{
 * target: string,
 * subject: string,
 * content: {[key:string]: string}
 * }} Message
 *
 * @typedef {{
 * senddate: ?string,
 * failover: ?"Y" | "N"
 * }} Options
 *
 * @typedef {{
 * type: string,
 * mid: number,
 * current: number,
 * unit: number,
 * total: number,
 * scnt: number,
 * fcnt: number,
 * }} SentMessageInfo
 *
 * @typedef {{
 * mid: number,
 * type: string,
 * sender: string,
 * msg_count: number,
 * mbody: string,
 * reserve_date: string,
 * reserve_state: string,
 * regdate: string,
 * }} MessageHistory
 *
 * @typedef {{
 * msgid: string,
 * type: string,
 * sender: string,
 * phone: string,
 * status: number,
 * reqdate: string,
 * sentdate: string,
 * rsltdate: string,
 * reportdate: string,
 * rslt: string,
 * message: string,
 * button_json: string,
 * tpl_code: string,
 * senderKey: string,
 * smid: string,
 * }} MessageHistoryDetail
 *
 * @typedef {{
 * mid: number,
 * type: string,
 * sender: string,
 * msg_count: number,
 * mbody: string,
 * reserve_date: string,
 * reserve_state: string,
 * regdate: string,
 * list: MessageHistoryDetail[]
 * }} MessageHistoryDetailList
 */

class AligoKakaoSDK {
  #config = {}
  #token = null

  /**
   *
   * @param {InstanceConfig} config
   */

  constructor(config) {
    const requiredKeys = ["key", "userId", "sender", "senderKey"]
    if (requiredKeys.some(key => !config[key])) {
      throw new Error(`Required keys are missing: ${requiredKeys.join(", ")}`)
    }
    this.#config = config
  }

  async _getToken(lifetimeMs = 1000 * 30) {
    const res = await Utils.sendFormPost(
      `https://kakaoapi.aligo.in/akv10/token/create/${lifetimeMs}/s`,
      {
        apikey: this.#config.key,
        userid: this.#config.userId
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

  async _tokenCheck() {
    if (!this.#token || this.#token.lifetime < Date.now()) {
      this.#token = await this._getToken()
    }
  }

  /**
   *
   * @returns {Promise<Template[]>}
   */

  async getTemplateList() {
    await this._tokenCheck()

    const body = {
      token: this.#token.content,
      apikey: this.#config.key,
      userid: this.#config.userId,
      sender: this.#config.sender,
      senderkey: this.#config.senderKey
    }

    const res = await Utils.sendFormPost(
      "https://kakaoapi.aligo.in/akv10/template/list",
      body
    )

    if (res.code === 0) {
      return res.list
    } else {
      throw new Error(res.message)
    }
  }

  /**
   *
   * @param {Date} startDate
   * @param {Date} endDate
   * @param {number} page
   * @param {number} limit
   * @returns {Promise<{page:{current:number,total:number},list:MessageHistory[]}>}
   */

  async getMessageHistoryPage(startDate, endDate, page = 1, limit = 500) {
    await this._tokenCheck()

    const body = {
      token: this.#token.content,
      apikey: this.#config.key,
      userid: this.#config.userId,
      page,
      limit,
      startdate: Utils.formatDate(startDate, "YYYYMMDD"),
      enddate: Utils.formatDate(endDate, "YYYYMMDD")
    }

    const res = await Utils.sendFormPost(
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

  /**
   *
   * @param {number} mid
   * @param {number} page
   * @param {number} limit
   * @returns {Promise<{page:{current:number,total:number},list:MessageHistoryDetail[]}>}
   */

  async getMessageDetail(mid, page = 1, limit = 50) {
    await this._tokenCheck()

    const body = {
      token: this.#token.content,
      apikey: this.#config.key,
      userid: this.#config.userId,
      mid,
      page,
      limit
    }

    const res = await Utils.sendFormPost(
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

  /**
   *
   * @param {Date} startDate
   * @param {Date} endDate
   * @param {boolean} detail
   * @returns {Promise<MessageHistory[] | MessageHistoryDetailList[]>}
   */

  async getAllMessageHistory(
    startDate = new Date(),
    endDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    detail = false
  ) {
    await this._tokenCheck()

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
          this.getMessageDetail(message.mid).then(({ list }) => ({
            ...message,
            list
          }))
        )
      )

      return detailedMessages
    }

    return messages
  }

  /**
   *
   * @param {Template} template
   * @param {Message} messages
   * @param {Options} options
   * @returns {Promise<SentMessageInfo>}
   */

  async sendMessage(template, messages, options) {
    await this._tokenCheck()

    const body = {
      token: this.#token.content,
      apikey: this.#config.key,
      userid: this.#config.userId,
      sender: this.#config.sender,
      senderkey: this.#config.senderKey,
      tpl_code: template.templtCode,
      ...Utils.createMessageBody(template, messages),
      ...options
    }

    const res = await Utils.sendFormPost(
      "https://kakaoapi.alogi.in/akv10/alimtalk/send/",
      body
    )

    if (res.code === 0) {
      return res.info
    } else {
      throw new Error(res.message)
    }
  }

  /**
   *
   * @param {string} mid 메세지 ID
   * @returns {Promise<boolean>} 메세지 취소 성공 여부
   */

  async cancelMessage(mid) {
    await this._tokenCheck()

    const body = {
      token: this.#token.content,
      apikey: this.#config.key,
      userid: this.#config.userId,
      mid
    }

    const res = await Utils.sendFormPost(
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
