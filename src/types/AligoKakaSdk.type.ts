export interface IInstanceConfig {
  key: string
  userId: string
  sender: string
  senderKey: string
}

export interface ITemplate {
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

export interface IMessageContent {
  [key: string]: string
}

export interface IMessage {
  target: string

  subject: string

  content: IMessageContent
}

export interface IOptions {
  sendDate?: Date // 원본 string

  failover?: boolean // 원본 "Y" | "N"
}

export interface ISentMessageInfo {
  type: string

  mid: number

  current: string

  unit: number

  total: number

  scnt: number

  fcnt: number
}

export interface IMessageHistory {
  mid: string

  type: string

  sender: string

  msg_count: string

  mbody: string

  reserve_date: string

  reserve_state: string

  regdate: string
}

export interface IMessageHistoryDetail {
  msgid: string

  type: string

  sender: string

  phone: string

  status: string

  reqdate: string

  sentdate: string

  rsltdate: string

  reportdate: string

  rslt: string

  message: string

  button_json: string

  tpl_code: string

  senderKey: string

  smid?: string
}

export interface IMessageHistoryDetailList extends IMessageHistory {
  list: IMessageHistoryDetail[]
}

interface IPage {
  total: number

  current: number
}

export interface IMessageHistoryPage {
  list: IMessageHistory[]

  page: IPage
}

export interface IMessageHistoryDetailPage {
  list: IMessageHistoryDetail[]

  page: IPage
}
