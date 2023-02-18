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

  async _getMessageHistoryPage() {}

  async _getMessageDetail(mid) {}

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

  async getMessageHistory() {}

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
