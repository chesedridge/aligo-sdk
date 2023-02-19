export default AligoKakaoSDK;
export type InstanceConfig = {
    key: string;
    userId: string;
    sender: string;
    senderKey: string;
};
export type Template = {
    templtCode: string;
    templtContent: string;
    templtName: string;
    templateType: "BA" | "EX" | "AD" | "MI";
    templateEmType: "NONE" | "TEXT" | "IMAGE";
    templtTitme: string;
    templtSubtitle: string;
    templtImageName: string;
    templtImageUrl: string;
    securityFlag: "Y" | "N";
    status: "S" | "A" | "R";
    inspStatus: "REG" | "REQ" | "APR" | "REJ";
    senderKey: string;
    buttons: any[];
    cdate: string;
};
export type Message = {
    target: string;
    subject: string;
    content: {
        [key: string]: string;
    };
};
export type Options = {
    senddate: string | null;
    failover: ("Y" | "N") | null;
};
export type SentMessageInfo = {
    type: string;
    mid: number;
    current: number;
    unit: number;
    total: number;
    scnt: number;
    fcnt: number;
};
export type MessageHistory = {
    mid: number;
    type: string;
    sender: string;
    msg_count: number;
    mbody: string;
    reserve_date: string;
    reserve_state: string;
    regdate: string;
};
export type MessageHistoryDetail = {
    msgid: string;
    type: string;
    sender: string;
    phone: string;
    status: number;
    reqdate: string;
    sentdate: string;
    rsltdate: string;
    reportdate: string;
    rslt: string;
    message: string;
    button_json: string;
    tpl_code: string;
    senderKey: string;
    smid: string;
};
export type MessageHistoryDetailList = {
    mid: number;
    type: string;
    sender: string;
    msg_count: number;
    mbody: string;
    reserve_date: string;
    reserve_state: string;
    regdate: string;
    list: MessageHistoryDetail[];
};
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
declare class AligoKakaoSDK {
    /**
     *
     * @param {InstanceConfig} config
     */
    constructor(config: InstanceConfig);
    _getToken(lifetimeMs?: number): Promise<{
        content: any;
        lifetime: Date;
    }>;
    _tokenCheck(): Promise<void>;
    /**
     *
     * @returns {Promise<Template[]>}
     */
    getTemplateList(): Promise<Template[]>;
    /**
     *
     * @param {Date} startDate
     * @param {Date} endDate
     * @param {number} page
     * @param {number} limit
     * @returns {Promise<{page:{current:number,total:number},list:MessageHistory[]}>}
     */
    getMessageHistoryPage(startDate: Date, endDate: Date, page?: number, limit?: number): Promise<{
        page: {
            current: number;
            total: number;
        };
        list: MessageHistory[];
    }>;
    /**
     *
     * @param {number} mid
     * @param {number} page
     * @param {number} limit
     * @returns {Promise<{page:{current:number,total:number},list:MessageHistoryDetail[]}>}
     */
    getMessageDetail(mid: number, page?: number, limit?: number): Promise<{
        page: {
            current: number;
            total: number;
        };
        list: MessageHistoryDetail[];
    }>;
    /**
     *
     * @param {Date} startDate
     * @param {Date} endDate
     * @param {boolean} detail
     * @returns {Promise<MessageHistory[] | MessageHistoryDetailList[]>}
     */
    getAllMessageHistory(startDate?: Date, endDate?: Date, detail?: boolean): Promise<MessageHistory[] | MessageHistoryDetailList[]>;
    /**
     *
     * @param {Template} template
     * @param {Message} messages
     * @param {Options} options
     * @returns {Promise<SentMessageInfo>}
     */
    sendMessage(template: Template, messages: Message, options: Options): Promise<SentMessageInfo>;
    /**
     *
     * @param {string} mid 메세지 ID
     * @returns {Promise<boolean>} 메세지 취소 성공 여부
     */
    cancelMessage(mid: string): Promise<boolean>;
    #private;
}
