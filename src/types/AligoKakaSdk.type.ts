import { Modify } from "./TypeUtil.js"

export class InstanceConfig {
  key: string
  userId: string
  sender: string
  senderKey: string
}

export class Template {
  templtCode: string
  templtContent: string
  templtName: string
  templateType: "BA" | "EX" | "AD" | "MI"
  templateEmType: "NONE" | "TEXT" | "IMAGE"
  templtTitle: string
  templtSubtitle: string
  templtImageName: string
  templtImageUrl: string
  securityFlag: "Y" | "N"
  status: "S" | "A" | "R"
  inspStatus: "REG" | "REQ" | "APR" | "REJ"
  senderKey: string
  buttons: any[]
  cdate: string
}

export class MessageContent {
  [key: string]: string
}

export class Message {
  target: string
  subject: string
  content: MessageContent
}

export class Options {
  senddate?: string
  failover?: "Y" | "N"
}

export class SentMessageInfo {
  type: string
  mid: number
  current: string | number
  unit: number
  total: number
  scnt: number
  fcnt: number
}

export class MessageHistory {
  mid: number
  type: string
  sender: string
  msg_count: number
  mbody: string
  reserve_date: string
  reserve_state: string
  regdate: string
}

export class MessageHistoryDetail {
  msgid: string
  type: string
  sender: string
  phone: string
  status: number
  reqdate: string
  sentdate: string
  rsltdate: string
  reportdate: string
  rslt: string
  message: string
  button_json: string
  tpl_code: string
  senderKey: string
  smid: string
}

export class MessageHistoryDetailList {
  mid: number
  type: string
  sender: string
  msg_count: number
  mbody: string
  reserve_date: string
  reserve_state: string
  regdate: string
  list: MessageHistoryDetail[]
}

class Page {
  total: number
  current: number
}

export class MessageHistoryPage {
  list: MessageHistory[]
  page: Page
}

export class MessageHistoryDetailPage {
  list: MessageHistoryDetailList[]
  page: Page
}
