// @ts-ignore
import axios from "axios"

class Utils {
  static padtwo(number) {
    return number.toString().length === 1 ? `0${number}` : number.toString()
  }

  static formatDate(date, formatStr) {
    const year = date.getFullYear()
    const month = this.padtwo(date.getMonth() + 1)
    const day = this.padtwo(date.getDate())
    const hour = this.padtwo(date.getHours())
    const minute = this.padtwo(date.getMinutes())
    const second = this.padtwo(date.getSeconds())

    return formatStr
      .replace("YYYY", year)
      .replace("MM", month)
      .replace("DD", day)
      .replace("HH", hour)
      .replace("mm", minute)
      .replace("ss", second)
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
