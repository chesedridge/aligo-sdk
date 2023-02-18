// @ts-ignore
import axios from "axios"

class Utils {
  static padtwo(number) {
    return number.toString().length === 1 ? `0${number}` : number.toString()
  }

  static async sendFormPost(url, body) {
    const res = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })

    return res.data
  }

  static replaceAllTokens(haystack, replacers) {
    return haystack.replace(/#{(.+?)}/g, (matched, p1, offset) => {
      if (replacers.hasOwnProperty(p1)) {
        return replacers[p1]
      }

      return p1
    })
  }

  static createMessageBody(template, messages) {
    const master = {}
    messages.forEach((message, i) => {
      master[`receiver_${i + 1}`] = message.target
      master[`subject_${i + 1}`] = message.subject
      master[`message_${i + 1}`] = this.replaceAllTokens(
        template.templtContent,
        message.content
      )
      master[`button_${i + 1}`] = JSON.stringify({ button: template.buttons })
    })

    return master
  }
}

export default Utils
