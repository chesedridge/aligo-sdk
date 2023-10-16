var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import "es6-shim";
import "reflect-metadata";
import { AligoUtil } from "./Aligo.utils";
import { CommonUtil } from "./Common.utils";
import { MessageHistoryDetailPage, MessageHistoryPage, SentMessageInfo, Template } from "./types/AligoKakaSdk.type";
import { plainToInstance } from "class-transformer";
class AligoKakaoSDK {
    constructor(config) {
        this.config = config;
        const requiredKeys = ["key", "userId", "sender", "senderKey"];
        if (requiredKeys.some(key => !config[key])) {
            throw new Error(`Required keys are missing: ${requiredKeys.join(", ")}`);
        }
        this.config = config;
    }
    getToken(lifetimeMs = 1000 * 30) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield CommonUtil.sendFormPost(`https://kakaoapi.aligo.in/akv10/token/create/${lifetimeMs}/s`, {
                apikey: this.config.key,
                userid: this.config.userId
            });
            if (res.code === 0) {
                return {
                    content: res.token,
                    lifetime: new Date(Date.now() + lifetimeMs)
                };
            }
            else {
                throw new Error(res.message);
            }
        });
    }
    tokenCheck() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.token || this.token.lifetime < Date.now()) {
                this.token = yield this.getToken();
            }
        });
    }
    getTemplateList(isPlainToInstance = true) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.tokenCheck();
            const body = {
                token: this.token.content,
                apikey: this.config.key,
                userid: this.config.userId,
                sender: this.config.sender,
                senderkey: this.config.senderKey
            };
            const res = yield CommonUtil.sendFormPost("https://kakaoapi.aligo.in/akv10/template/list", body);
            if (res.code === 0) {
                const templates = res.list;
                return isPlainToInstance
                    ? plainToInstance(Template, templates, {
                        excludeExtraneousValues: true
                    })
                    : templates;
            }
            else {
                throw new Error(res.message);
            }
        });
    }
    getMessageHistoryPage(startDate, endDate, page = 1, limit = 500, isPlainToInstance = true) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.tokenCheck();
            const body = {
                token: this.token.content,
                apikey: this.config.key,
                userid: this.config.userId,
                page,
                limit,
                startdate: CommonUtil.formatDate(startDate, "YYYYMMDD"),
                enddate: CommonUtil.formatDate(endDate, "YYYYMMDD")
            };
            const res = yield CommonUtil.sendFormPost("https://kakaoapi.aligo.in/akv10/history/list", body);
            if (res.code === 0) {
                const messageHistoryPage = {
                    list: res.list,
                    page: {
                        current: Number(res.currentPage),
                        total: Number(res.totalPage)
                    }
                };
                return isPlainToInstance
                    ? plainToInstance(MessageHistoryPage, messageHistoryPage, {
                        excludeExtraneousValues: true
                    })
                    : messageHistoryPage;
            }
            else {
                throw new Error(res.message);
            }
        });
    }
    getMessageHistoryDetailPage(mid, page = 1, limit = 50, isPlainToInstance = true) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.tokenCheck();
            const body = {
                token: this.token.content,
                apikey: this.config.key,
                userid: this.config.userId,
                mid,
                page,
                limit
            };
            const res = yield CommonUtil.sendFormPost("https://kakaoapi.aligo.in/akv10/history/detail", body);
            if (res.code === 0) {
                const messageHistoryDetailPage = {
                    list: res.list,
                    page: {
                        current: Number(res.currentPage),
                        total: Number(res.totalPage)
                    }
                };
                return isPlainToInstance
                    ? plainToInstance(MessageHistoryDetailPage, messageHistoryDetailPage, {
                        excludeExtraneousValues: true
                    })
                    : messageHistoryDetailPage;
            }
            else {
                throw new Error(res.message);
            }
        });
    }
    getAllMessageHistory(startDate = new Date(), endDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), detail, isPlainToInstance = true) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.tokenCheck();
            const messages = [];
            let totalPage = 1;
            let currentPage = 1;
            while (currentPage <= totalPage) {
                const res = yield this.getMessageHistoryPage(startDate, endDate, currentPage, 500, isPlainToInstance);
                messages.push(...res.list);
                currentPage += 1;
                totalPage = res.page.total;
            }
            if (detail) {
                const detailedMessages = yield Promise.all(messages.map(message => 
                // message 정보와 그 message mid에 대한 상세 메세지 리스트
                this.getMessageHistoryDetailPage(message.mid, 1, 50, isPlainToInstance).then(({ list }) => (Object.assign(Object.assign({}, message), { list })))));
                return detailedMessages;
            }
            return messages;
        });
    }
    sendMessage(template, messages, options, isPlainToInstance = true) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.tokenCheck();
            const body = Object.assign(Object.assign({ token: this.token.content, apikey: this.config.key, userid: this.config.userId, sender: this.config.sender, senderkey: this.config.senderKey, tpl_code: template.templtCode }, AligoUtil.createMessageBody(template, messages)), options);
            const res = yield CommonUtil.sendFormPost("https://kakaoapi.aligo.in/akv10/alimtalk/send/", body);
            if (res.code === 0) {
                const sentMessageInfo = res.info;
                return isPlainToInstance
                    ? plainToInstance(SentMessageInfo, sentMessageInfo, {
                        excludeExtraneousValues: true
                    })
                    : sentMessageInfo;
            }
            else {
                throw new Error(res.message);
            }
        });
    }
    cancelMessage(mid) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.tokenCheck();
            const body = {
                token: this.token.content,
                apikey: this.config.key,
                userid: this.config.userId,
                mid
            };
            const res = yield CommonUtil.sendFormPost("https://kakaoapi.aligo.in/akv10/cancel/", body);
            if (res.code === 0) {
                return true;
            }
            else {
                throw new Error(res.message);
            }
        });
    }
}
export default AligoKakaoSDK;
