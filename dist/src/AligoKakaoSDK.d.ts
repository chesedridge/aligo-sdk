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
    _getMessageHistoryPage(): Promise<void>;
    _getMessageDetail(mid: any): Promise<void>;
    /**
     *
     * @returns {Promise<Template[]>}
     */
    getTemplateList(): Promise<Template[]>;
    getMessageHistory(): Promise<void>;
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
