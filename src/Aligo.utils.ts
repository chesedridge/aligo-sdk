import { Message, MessageContent, Template } from "./types/AligoKakaSdk.type"

export class AligoUtil {
  private static replaceAllTokens(
    haystack: string,
    replacers: MessageContent
  ): string {
    return haystack.replace(/#{(.+?)}/g, (matched, p1, offset) => {
      if (replacers.hasOwnProperty(p1)) {
        return replacers[p1]
      }

      return p1
    })
  }

  static createMessageBody(template: Template, messages: Message[]) {
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
