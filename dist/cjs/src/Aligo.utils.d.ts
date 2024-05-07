import { IMessage, ITemplate } from "./types/AligoKakaSdk.type";
export declare class AligoUtil {
    private static replaceAllTokens;
    static createMessageBody(template: ITemplate, messages: IMessage[]): Record<string, unknown>;
}
