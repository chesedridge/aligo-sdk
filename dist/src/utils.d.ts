export default Utils;
declare class Utils {
    static padtwo(number: any): any;
    static formatDate(date: any, formatStr: any): any;
    static sendFormPost(url: any, body: any): Promise<any>;
    static replaceAllTokens(haystack: any, replacers: any): any;
    static createMessageBody(template: any, messages: any): {};
}
