import { IMessage, IMessageContent, ITemplate } from "./types/AligoKakaSdk.type"

export class AligoUtil {
  private static replaceAllTokens(
    haystack: string,
    replacers: IMessageContent
  ): string {
    return haystack.replace(/#{(.+?)}/g, (_matched, p1, _offset) => {
      if (replacers.hasOwnProperty(p1)) {
        return replacers[p1]
      }

      return p1
    })
  }

  static createMessageBody(template: ITemplate, messages: IMessage[]) {
    const master: Record<string, unknown> = {}
    messages.forEach((message, i) => {
      master[`receiver_${i + 1}`] = message.target
      master[`subject_${i + 1}`] = message.subject
      master[`message_${i + 1}`] = this.replaceAllTokens(
        template.templtContent,
        message.content
      )
      master[`button_${i + 1}`] = JSON.stringify({ button: template.buttons })

      master[`fsubject_${i + 1}`] = message.subject
      master[`fmessage_${i + 1}`] = this.replaceAllTokens(
        template.templtContent,
        message.content
      )
    })

    return master
  }
}
