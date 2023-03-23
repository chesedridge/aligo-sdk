"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonUtil = void 0;
const axios_1 = __importDefault(require("axios"));
class CommonUtil {
    static padtwo(number) {
        return number.toString().length === 1 ? `0${number}` : number.toString();
    }
    static formatDate(date, formatStr) {
        const year = date.getFullYear().toString();
        const month = this.padtwo(date.getMonth() + 1);
        const day = this.padtwo(date.getDate());
        const hour = this.padtwo(date.getHours());
        const minute = this.padtwo(date.getMinutes());
        const second = this.padtwo(date.getSeconds());
        return formatStr
            .replace("YYYY", year)
            .replace("MM", month)
            .replace("DD", day)
            .replace("HH", hour)
            .replace("mm", minute)
            .replace("ss", second);
    }
    static async sendFormPost(url, body) {
        const res = await axios_1.default.post(url, body, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });
        return res.data;
    }
}
exports.CommonUtil = CommonUtil;
