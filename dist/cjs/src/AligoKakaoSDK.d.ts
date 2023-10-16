import { InstanceConfig, Message, MessageHistory, MessageHistoryDetailList, MessageHistoryDetailPage, MessageHistoryPage, Options, SentMessageInfo, Template } from "./types/AligoKakaSdk.type.js";
declare class AligoKakaoSDK {
    private config;
    private token;
    constructor(config: InstanceConfig);
    private getToken;
    private tokenCheck;
    getTemplateList(): Promise<Template[]>;
    getMessageHistoryPage(startDate: Date, endDate: Date, page?: number, limit?: number): Promise<MessageHistoryPage>;
    getMessageHistoryDetailPage(mid: number, page?: number, limit?: number): Promise<MessageHistoryDetailPage>;
    getAllMessageHistory<T extends boolean>(startDate?: Date, endDate?: Date, detail?: T): Promise<T extends true ? MessageHistoryDetailList[] : MessageHistory[]>;
    sendMessage(template: Template, messages: Message[], options?: Options): Promise<SentMessageInfo>;
    cancelMessage(mid: number): Promise<boolean>;
}
export default AligoKakaoSDK;
