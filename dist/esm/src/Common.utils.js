var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from "axios";
export class CommonUtil {
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
    static sendFormPost(url, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield axios.post(url, body, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            });
            return res.data;
        });
    }
}
