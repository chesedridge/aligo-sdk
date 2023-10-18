import { Expose, Type } from "class-transformer"
// import { Modify } from "./types/TypeUtil"

export class InstanceConfig {
  key: string
  userId: string
  sender: string
  senderKey: string
}

export class Template {
  @Expose()
  templtCode: string
  @Expose()
  templtContent: string
  @Expose()
  templtName: string
  @Expose()
  templateType: "BA" | "EX" | "AD" | "MI"
  @Expose()
  templateEmType: "NONE" | "TEXT" | "IMAGE"
  @Expose()
  templtTitle: string
  @Expose()
  templtSubtitle: string
  @Expose()
  templtImageName: string
  @Expose()
  templtImageUrl: string
  @Expose()
  securityFlag: "Y" | "N"
  @Expose()
  status: "S" | "A" | "R"
  @Expose()
  inspStatus: "REG" | "REQ" | "APR" | "REJ"
  @Expose()
  senderKey: string
  @Expose()
  buttons: any[]
  @Expose()
  cdate: string
}

export class MessageContent {
  [key: string]: string
}

export class Message {
  @Expose()
  target: string
  @Expose()
  subject: string
  @Expose()
  content: MessageContent
}

export class Options {
  @Expose()
  senddate?: string
  @Expose()
  failover?: "Y" | "N"
}

export class SentMessageInfo {
  @Expose()
  type: string
  @Expose()
  mid: string
  @Expose()
  current: string
  @Expose()
  unit: number
  @Expose()
  total: number
  @Expose()
  scnt: number
  @Expose()
  fcnt: number
}

export class MessageHistory {
  @Expose()
  mid: string
  @Expose()
  type: string
  @Expose()
  sender: string
  @Expose()
  msg_count: string
  @Expose()
  mbody: string
  @Expose()
  reserve_date: string
  @Expose()
  reserve_state: string
  @Expose()
  regdate: string
}

export class MessageHistoryDetail {
  @Expose()
  msgid: string
  @Expose()
  type: string
  @Expose()
  sender: string
  @Expose()
  phone: string
  @Expose()
  status: string
  @Expose()
  reqdate: string
  @Expose()
  sentdate: string
  @Expose()
  rsltdate: string
  @Expose()
  reportdate: string
  @Expose()
  rslt: string
  @Expose()
  message: string
  @Expose()
  button_json: string
  @Expose()
  tpl_code: string
  @Expose()
  senderKey: string
  @Expose()
  smid?: string
}

export class MessageHistoryDetailList extends MessageHistory {
  @Expose()
  list: MessageHistoryDetail[]
}

class Page {
  @Expose()
  total: number
  @Expose()
  current: number
}

export class MessageHistoryPage {
  @Expose()
  @Type(() => MessageHistory)
  list: MessageHistory[]
  @Expose()
  page: Page
}

export class MessageHistoryDetailPage {
  @Expose()
  @Type(() => MessageHistoryDetail)
  list: MessageHistoryDetail[]
  @Expose()
  page: Page
}
