"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    static sendFormPost(url, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield axios_1.default.post(url, body, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            });
            return res.data;
        });
    }
    static sleep(ms) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => setTimeout(resolve, ms));
        });
    }
}
exports.CommonUtil = CommonUtil;
