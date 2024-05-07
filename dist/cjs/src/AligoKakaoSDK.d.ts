import "es6-shim";
import "reflect-metadata";
import { IInstanceConfig, IMessage, IMessageHistory, IMessageHistoryDetailList, IMessageHistoryDetailPage, IMessageHistoryPage, IOptions, ISentMessageInfo, ITemplate } from "./types/AligoKakaSdk.type";
declare class AligoKakaoSDK {
    private config;
    constructor(config: IInstanceConfig);
    getTemplateList(): Promise<ITemplate[]>;
    getMessageHistoryPage(startDate: Date, endDate: Date, page?: number, limit?: number): Promise<IMessageHistoryPage>;
    getMessageHistoryDetailPage(mid: string, page?: number, limit?: number): Promise<IMessageHistoryDetailPage>;
    getAllMessageHistory(startDate: Date, endDate: Date, detail: true): Promise<IMessageHistoryDetailList[]>;
    getAllMessageHistory(startDate: Date, endDate: Date, detail: false): Promise<IMessageHistory[]>;
    sendMessage(template: ITemplate, messages: IMessage[], options?: IOptions): Promise<ISentMessageInfo>;
    cancelMessage(mid: number): Promise<boolean>;
}
export default AligoKakaoSDK;
