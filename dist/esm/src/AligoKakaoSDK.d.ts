import "es6-shim";
import "reflect-metadata";
import { InstanceConfig, Message, MessageHistory, MessageHistoryDetailList, MessageHistoryDetailPage, MessageHistoryPage, Options, SentMessageInfo, Template } from "./types/AligoKakaSdk.type";
declare class AligoKakaoSDK {
    private config;
    private token;
    constructor(config: InstanceConfig);
    private getToken;
    private tokenCheck;
    getTemplateList(isPlainToInstance?: boolean): Promise<Template[]>;
    getMessageHistoryPage(startDate: Date, endDate: Date, page?: number, limit?: number, isPlainToInstance?: boolean): Promise<MessageHistoryPage>;
    getMessageHistoryDetailPage(mid: string, page?: number, limit?: number, isPlainToInstance?: boolean): Promise<MessageHistoryDetailPage>;
    getAllMessageHistory(startDate: Date, endDate: Date, detail: true, isPlainToInstance?: boolean): Promise<MessageHistoryDetailList[]>;
    getAllMessageHistory(startDate: Date, endDate: Date, detail: false, isPlainToInstance?: boolean): Promise<MessageHistory[]>;
    sendMessage(template: Template, messages: Message[], options?: Options, isPlainToInstance?: boolean): Promise<SentMessageInfo>;
    cancelMessage(mid: number): Promise<boolean>;
}
export default AligoKakaoSDK;
