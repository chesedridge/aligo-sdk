// @ts-check

import Utils from "./utils.js"

/**
 * @typedef {{key:string, userId: string, sender: string, senderKey:string}} InstanceConfig
 */

/**
 * @constructor
 * @param {InstanceConfig} instanceConfig
 */
class AligoKakaoSDK {
  #instanceConfig = {}

  constructor(instanceConfig) {
    const requiredKeys = ["key", "userId", "sender", "senderKey"]
    if (requiredKeys.some(key => !instanceConfig[key])) {
      throw new Error(`Required keys are missing: ${requiredKeys.join(", ")}`)
    }
    this.#instanceConfig = instanceConfig
  }

  async #getToken(lifetimeMs = 1000 * 30) {
    const res = await Utils.sendFormPost(
      `https://kakaoapi.aligo.in/akv10/token/create/${lifetimeMs}/s`,
      {
        apikey: this.#instanceConfig.key,
        userid: this.#instanceConfig.userId
      }
    )
    if (res.code === 0) {
      return {
        content: res.token,
        lifetime: new Date(Date.now() + lifetimeMs)
      }
    } else {
      throw new Error(res.msg)
    }
  }
}

export default AligoKakaoSDK
