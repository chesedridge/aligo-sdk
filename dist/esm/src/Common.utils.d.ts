export declare class CommonUtil {
    static padtwo(number: number): string;
    static formatDate(date: Date, formatStr: string): string;
    static sendFormPost(url: string, body: any): Promise<any>;
}
