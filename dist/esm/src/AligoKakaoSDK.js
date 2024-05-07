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
require("es6-shim");
require("reflect-metadata");
const typia_1 = __importDefault(require("typia"));
const Aligo_utils_1 = require("./Aligo.utils");
const Common_utils_1 = require("./Common.utils");
class AligoKakaoSDK {
    constructor(config) {
        this.config = config;
        const requiredKeys = [
            "key",
            "userId",
            "sender",
            "senderKey"
        ];
        if (requiredKeys.some(key => !config[key])) {
            throw new Error(`Required keys are missing: ${requiredKeys.join(", ")}`);
        }
        this.config = config;
    }
    getTemplateList() {
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                apikey: this.config.key,
                userid: this.config.userId,
                sender: this.config.sender,
                senderkey: this.config.senderKey
            };
            const res = yield Common_utils_1.CommonUtil.sendFormPost("https://kakaoapi.aligo.in/akv10/template/list", body);
            if (res.code === 0) {
                const templates = res.list;
                ((input, errorFactory) => {
                    const __is = input => {
                        const $io0 = input => "string" === typeof input.templtCode && "string" === typeof input.templtContent && "string" === typeof input.templtName && ("BA" === input.templateType || "EX" === input.templateType || "AD" === input.templateType || "MI" === input.templateType) && ("NONE" === input.templateEmType || "TEXT" === input.templateEmType || "IMAGE" === input.templateEmType) && "string" === typeof input.templtTitle && "string" === typeof input.templtSubtitle && "string" === typeof input.templtImageName && "string" === typeof input.templtImageUrl && ("Y" === input.securityFlag || "N" === input.securityFlag) && ("S" === input.status || "A" === input.status || "R" === input.status) && ("REG" === input.inspStatus || "REQ" === input.inspStatus || "APR" === input.inspStatus || "REJ" === input.inspStatus) && "string" === typeof input.senderKey && Array.isArray(input.buttons) && "string" === typeof input.cdate;
                        return Array.isArray(input) && input.every(elem => "object" === typeof elem && null !== elem && $io0(elem));
                    };
                    if (false === __is(input))
                        ((input, _path, _exceptionable = true) => {
                            const $guard = typia_1.default.assert.guard;
                            const $ao0 = (input, _path, _exceptionable = true) => ("string" === typeof input.templtCode || $guard(_exceptionable, {
                                path: _path + ".templtCode",
                                expected: "string",
                                value: input.templtCode
                            }, errorFactory)) && ("string" === typeof input.templtContent || $guard(_exceptionable, {
                                path: _path + ".templtContent",
                                expected: "string",
                                value: input.templtContent
                            }, errorFactory)) && ("string" === typeof input.templtName || $guard(_exceptionable, {
                                path: _path + ".templtName",
                                expected: "string",
                                value: input.templtName
                            }, errorFactory)) && ("BA" === input.templateType || "EX" === input.templateType || "AD" === input.templateType || "MI" === input.templateType || $guard(_exceptionable, {
                                path: _path + ".templateType",
                                expected: "(\"AD\" | \"BA\" | \"EX\" | \"MI\")",
                                value: input.templateType
                            }, errorFactory)) && ("NONE" === input.templateEmType || "TEXT" === input.templateEmType || "IMAGE" === input.templateEmType || $guard(_exceptionable, {
                                path: _path + ".templateEmType",
                                expected: "(\"IMAGE\" | \"NONE\" | \"TEXT\")",
                                value: input.templateEmType
                            }, errorFactory)) && ("string" === typeof input.templtTitle || $guard(_exceptionable, {
                                path: _path + ".templtTitle",
                                expected: "string",
                                value: input.templtTitle
                            }, errorFactory)) && ("string" === typeof input.templtSubtitle || $guard(_exceptionable, {
                                path: _path + ".templtSubtitle",
                                expected: "string",
                                value: input.templtSubtitle
                            }, errorFactory)) && ("string" === typeof input.templtImageName || $guard(_exceptionable, {
                                path: _path + ".templtImageName",
                                expected: "string",
                                value: input.templtImageName
                            }, errorFactory)) && ("string" === typeof input.templtImageUrl || $guard(_exceptionable, {
                                path: _path + ".templtImageUrl",
                                expected: "string",
                                value: input.templtImageUrl
                            }, errorFactory)) && ("Y" === input.securityFlag || "N" === input.securityFlag || $guard(_exceptionable, {
                                path: _path + ".securityFlag",
                                expected: "(\"N\" | \"Y\")",
                                value: input.securityFlag
                            }, errorFactory)) && ("S" === input.status || "A" === input.status || "R" === input.status || $guard(_exceptionable, {
                                path: _path + ".status",
                                expected: "(\"A\" | \"R\" | \"S\")",
                                value: input.status
                            }, errorFactory)) && ("REG" === input.inspStatus || "REQ" === input.inspStatus || "APR" === input.inspStatus || "REJ" === input.inspStatus || $guard(_exceptionable, {
                                path: _path + ".inspStatus",
                                expected: "(\"APR\" | \"REG\" | \"REJ\" | \"REQ\")",
                                value: input.inspStatus
                            }, errorFactory)) && ("string" === typeof input.senderKey || $guard(_exceptionable, {
                                path: _path + ".senderKey",
                                expected: "string",
                                value: input.senderKey
                            }, errorFactory)) && (Array.isArray(input.buttons) || $guard(_exceptionable, {
                                path: _path + ".buttons",
                                expected: "Array<any>",
                                value: input.buttons
                            }, errorFactory)) && ("string" === typeof input.cdate || $guard(_exceptionable, {
                                path: _path + ".cdate",
                                expected: "string",
                                value: input.cdate
                            }, errorFactory));
                            return (Array.isArray(input) || $guard(true, {
                                path: _path + "",
                                expected: "Array<ITemplate>",
                                value: input
                            }, errorFactory)) && input.every((elem, _index1) => ("object" === typeof elem && null !== elem || $guard(true, {
                                path: _path + "[" + _index1 + "]",
                                expected: "ITemplate",
                                value: elem
                            }, errorFactory)) && $ao0(elem, _path + "[" + _index1 + "]", true) || $guard(true, {
                                path: _path + "[" + _index1 + "]",
                                expected: "ITemplate",
                                value: elem
                            }, errorFactory)) || $guard(true, {
                                path: _path + "",
                                expected: "Array<ITemplate>",
                                value: input
                            }, errorFactory);
                        })(input, "$input", true);
                    return input;
                })(templates);
                return templates;
            }
            else {
                throw new Error(res.message);
            }
        });
    }
    getMessageHistoryPage(startDate_1, endDate_1) {
        return __awaiter(this, arguments, void 0, function* (startDate, endDate, page = 1, limit = 500) {
            const body = {
                apikey: this.config.key,
                userid: this.config.userId,
                page,
                limit,
                startdate: Common_utils_1.CommonUtil.formatDate(startDate, "YYYYMMDD"),
                enddate: Common_utils_1.CommonUtil.formatDate(endDate, "YYYYMMDD")
            };
            const res = yield Common_utils_1.CommonUtil.sendFormPost("https://kakaoapi.aligo.in/akv10/history/list", body);
            if (res.code === 0) {
                const messageHistoryPage = {
                    list: res.list,
                    page: {
                        current: Number(res.currentPage),
                        total: Number(res.totalPage)
                    }
                };
                ((input, errorFactory) => {
                    const __is = input => {
                        const $io0 = input => Array.isArray(input.list) && input.list.every(elem => "object" === typeof elem && null !== elem && $io1(elem)) && ("object" === typeof input.page && null !== input.page && ("number" === typeof input.page.total && "number" === typeof input.page.current));
                        const $io1 = input => "string" === typeof input.mid && "string" === typeof input.type && "string" === typeof input.sender && "string" === typeof input.msg_count && "string" === typeof input.mbody && "string" === typeof input.reserve_date && "string" === typeof input.reserve_state && "string" === typeof input.regdate;
                        return "object" === typeof input && null !== input && $io0(input);
                    };
                    if (false === __is(input))
                        ((input, _path, _exceptionable = true) => {
                            const $guard = typia_1.default.assert.guard;
                            const $ao0 = (input, _path, _exceptionable = true) => ((Array.isArray(input.list) || $guard(_exceptionable, {
                                path: _path + ".list",
                                expected: "Array<IMessageHistory>",
                                value: input.list
                            }, errorFactory)) && input.list.every((elem, _index1) => ("object" === typeof elem && null !== elem || $guard(_exceptionable, {
                                path: _path + ".list[" + _index1 + "]",
                                expected: "IMessageHistory",
                                value: elem
                            }, errorFactory)) && $ao1(elem, _path + ".list[" + _index1 + "]", true && _exceptionable) || $guard(_exceptionable, {
                                path: _path + ".list[" + _index1 + "]",
                                expected: "IMessageHistory",
                                value: elem
                            }, errorFactory)) || $guard(_exceptionable, {
                                path: _path + ".list",
                                expected: "Array<IMessageHistory>",
                                value: input.list
                            }, errorFactory)) && (("object" === typeof input.page && null !== input.page || $guard(_exceptionable, {
                                path: _path + ".page",
                                expected: "IPage",
                                value: input.page
                            }, errorFactory)) && $ao2(input.page, _path + ".page", true && _exceptionable) || $guard(_exceptionable, {
                                path: _path + ".page",
                                expected: "IPage",
                                value: input.page
                            }, errorFactory));
                            const $ao1 = (input, _path, _exceptionable = true) => ("string" === typeof input.mid || $guard(_exceptionable, {
                                path: _path + ".mid",
                                expected: "string",
                                value: input.mid
                            }, errorFactory)) && ("string" === typeof input.type || $guard(_exceptionable, {
                                path: _path + ".type",
                                expected: "string",
                                value: input.type
                            }, errorFactory)) && ("string" === typeof input.sender || $guard(_exceptionable, {
                                path: _path + ".sender",
                                expected: "string",
                                value: input.sender
                            }, errorFactory)) && ("string" === typeof input.msg_count || $guard(_exceptionable, {
                                path: _path + ".msg_count",
                                expected: "string",
                                value: input.msg_count
                            }, errorFactory)) && ("string" === typeof input.mbody || $guard(_exceptionable, {
                                path: _path + ".mbody",
                                expected: "string",
                                value: input.mbody
                            }, errorFactory)) && ("string" === typeof input.reserve_date || $guard(_exceptionable, {
                                path: _path + ".reserve_date",
                                expected: "string",
                                value: input.reserve_date
                            }, errorFactory)) && ("string" === typeof input.reserve_state || $guard(_exceptionable, {
                                path: _path + ".reserve_state",
                                expected: "string",
                                value: input.reserve_state
                            }, errorFactory)) && ("string" === typeof input.regdate || $guard(_exceptionable, {
                                path: _path + ".regdate",
                                expected: "string",
                                value: input.regdate
                            }, errorFactory));
                            const $ao2 = (input, _path, _exceptionable = true) => ("number" === typeof input.total || $guard(_exceptionable, {
                                path: _path + ".total",
                                expected: "number",
                                value: input.total
                            }, errorFactory)) && ("number" === typeof input.current || $guard(_exceptionable, {
                                path: _path + ".current",
                                expected: "number",
                                value: input.current
                            }, errorFactory));
                            return ("object" === typeof input && null !== input || $guard(true, {
                                path: _path + "",
                                expected: "IMessageHistoryPage",
                                value: input
                            }, errorFactory)) && $ao0(input, _path + "", true) || $guard(true, {
                                path: _path + "",
                                expected: "IMessageHistoryPage",
                                value: input
                            }, errorFactory);
                        })(input, "$input", true);
                    return input;
                })(messageHistoryPage);
                return messageHistoryPage;
            }
            else {
                throw new Error(res.message);
            }
        });
    }
    getMessageHistoryDetailPage(mid_1) {
        return __awaiter(this, arguments, void 0, function* (mid, page = 1, limit = 50) {
            const body = {
                apikey: this.config.key,
                userid: this.config.userId,
                mid,
                page,
                limit
            };
            const res = yield Common_utils_1.CommonUtil.sendFormPost("https://kakaoapi.aligo.in/akv10/history/detail", body);
            if (res.code === 0) {
                const messageHistoryDetailPage = {
                    list: res.list,
                    page: {
                        current: Number(res.currentPage),
                        total: Number(res.totalPage)
                    }
                };
                ((input, errorFactory) => {
                    const __is = input => {
                        const $io0 = input => Array.isArray(input.list) && input.list.every(elem => "object" === typeof elem && null !== elem && $io1(elem)) && ("object" === typeof input.page && null !== input.page && ("number" === typeof input.page.total && "number" === typeof input.page.current));
                        const $io1 = input => "string" === typeof input.msgid && "string" === typeof input.type && "string" === typeof input.sender && "string" === typeof input.phone && "string" === typeof input.status && "string" === typeof input.reqdate && "string" === typeof input.sentdate && "string" === typeof input.rsltdate && "string" === typeof input.reportdate && "string" === typeof input.rslt && "string" === typeof input.message && "string" === typeof input.button_json && "string" === typeof input.tpl_code && "string" === typeof input.senderKey && (undefined === input.smid || "string" === typeof input.smid);
                        return "object" === typeof input && null !== input && $io0(input);
                    };
                    if (false === __is(input))
                        ((input, _path, _exceptionable = true) => {
                            const $guard = typia_1.default.assert.guard;
                            const $ao0 = (input, _path, _exceptionable = true) => ((Array.isArray(input.list) || $guard(_exceptionable, {
                                path: _path + ".list",
                                expected: "Array<IMessageHistoryDetail>",
                                value: input.list
                            }, errorFactory)) && input.list.every((elem, _index1) => ("object" === typeof elem && null !== elem || $guard(_exceptionable, {
                                path: _path + ".list[" + _index1 + "]",
                                expected: "IMessageHistoryDetail",
                                value: elem
                            }, errorFactory)) && $ao1(elem, _path + ".list[" + _index1 + "]", true && _exceptionable) || $guard(_exceptionable, {
                                path: _path + ".list[" + _index1 + "]",
                                expected: "IMessageHistoryDetail",
                                value: elem
                            }, errorFactory)) || $guard(_exceptionable, {
                                path: _path + ".list",
                                expected: "Array<IMessageHistoryDetail>",
                                value: input.list
                            }, errorFactory)) && (("object" === typeof input.page && null !== input.page || $guard(_exceptionable, {
                                path: _path + ".page",
                                expected: "IPage",
                                value: input.page
                            }, errorFactory)) && $ao2(input.page, _path + ".page", true && _exceptionable) || $guard(_exceptionable, {
                                path: _path + ".page",
                                expected: "IPage",
                                value: input.page
                            }, errorFactory));
                            const $ao1 = (input, _path, _exceptionable = true) => ("string" === typeof input.msgid || $guard(_exceptionable, {
                                path: _path + ".msgid",
                                expected: "string",
                                value: input.msgid
                            }, errorFactory)) && ("string" === typeof input.type || $guard(_exceptionable, {
                                path: _path + ".type",
                                expected: "string",
                                value: input.type
                            }, errorFactory)) && ("string" === typeof input.sender || $guard(_exceptionable, {
                                path: _path + ".sender",
                                expected: "string",
                                value: input.sender
                            }, errorFactory)) && ("string" === typeof input.phone || $guard(_exceptionable, {
                                path: _path + ".phone",
                                expected: "string",
                                value: input.phone
                            }, errorFactory)) && ("string" === typeof input.status || $guard(_exceptionable, {
                                path: _path + ".status",
                                expected: "string",
                                value: input.status
                            }, errorFactory)) && ("string" === typeof input.reqdate || $guard(_exceptionable, {
                                path: _path + ".reqdate",
                                expected: "string",
                                value: input.reqdate
                            }, errorFactory)) && ("string" === typeof input.sentdate || $guard(_exceptionable, {
                                path: _path + ".sentdate",
                                expected: "string",
                                value: input.sentdate
                            }, errorFactory)) && ("string" === typeof input.rsltdate || $guard(_exceptionable, {
                                path: _path + ".rsltdate",
                                expected: "string",
                                value: input.rsltdate
                            }, errorFactory)) && ("string" === typeof input.reportdate || $guard(_exceptionable, {
                                path: _path + ".reportdate",
                                expected: "string",
                                value: input.reportdate
                            }, errorFactory)) && ("string" === typeof input.rslt || $guard(_exceptionable, {
                                path: _path + ".rslt",
                                expected: "string",
                                value: input.rslt
                            }, errorFactory)) && ("string" === typeof input.message || $guard(_exceptionable, {
                                path: _path + ".message",
                                expected: "string",
                                value: input.message
                            }, errorFactory)) && ("string" === typeof input.button_json || $guard(_exceptionable, {
                                path: _path + ".button_json",
                                expected: "string",
                                value: input.button_json
                            }, errorFactory)) && ("string" === typeof input.tpl_code || $guard(_exceptionable, {
                                path: _path + ".tpl_code",
                                expected: "string",
                                value: input.tpl_code
                            }, errorFactory)) && ("string" === typeof input.senderKey || $guard(_exceptionable, {
                                path: _path + ".senderKey",
                                expected: "string",
                                value: input.senderKey
                            }, errorFactory)) && (undefined === input.smid || "string" === typeof input.smid || $guard(_exceptionable, {
                                path: _path + ".smid",
                                expected: "(string | undefined)",
                                value: input.smid
                            }, errorFactory));
                            const $ao2 = (input, _path, _exceptionable = true) => ("number" === typeof input.total || $guard(_exceptionable, {
                                path: _path + ".total",
                                expected: "number",
                                value: input.total
                            }, errorFactory)) && ("number" === typeof input.current || $guard(_exceptionable, {
                                path: _path + ".current",
                                expected: "number",
                                value: input.current
                            }, errorFactory));
                            return ("object" === typeof input && null !== input || $guard(true, {
                                path: _path + "",
                                expected: "IMessageHistoryDetailPage",
                                value: input
                            }, errorFactory)) && $ao0(input, _path + "", true) || $guard(true, {
                                path: _path + "",
                                expected: "IMessageHistoryDetailPage",
                                value: input
                            }, errorFactory);
                        })(input, "$input", true);
                    return input;
                })(messageHistoryDetailPage);
                return messageHistoryDetailPage;
            }
            else {
                throw new Error(res.message);
            }
        });
    }
    getAllMessageHistory() {
        return __awaiter(this, arguments, void 0, function* (startDate = new Date(), endDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), detail) {
            const messages = [];
            let totalPage = 1;
            let currentPage = 1;
            while (currentPage <= totalPage) {
                const res = yield this.getMessageHistoryPage(startDate, endDate, currentPage, 500);
                messages.push(...res.list);
                currentPage += 1;
                totalPage = res.page.total;
            }
            if (detail) {
                const detailedMessages = yield Promise.all(messages.map(message => 
                // message 정보와 그 message mid에 대한 상세 메세지 리스트
                this.getMessageHistoryDetailPage(message.mid, 1, 50).then(({ list }) => (Object.assign(Object.assign({}, message), { list })))));
                ((input, errorFactory) => {
                    const __is = input => {
                        const $io0 = input => Array.isArray(input.list) && input.list.every(elem => "object" === typeof elem && null !== elem && $io1(elem)) && "string" === typeof input.mid && "string" === typeof input.type && "string" === typeof input.sender && "string" === typeof input.msg_count && "string" === typeof input.mbody && "string" === typeof input.reserve_date && "string" === typeof input.reserve_state && "string" === typeof input.regdate;
                        const $io1 = input => "string" === typeof input.msgid && "string" === typeof input.type && "string" === typeof input.sender && "string" === typeof input.phone && "string" === typeof input.status && "string" === typeof input.reqdate && "string" === typeof input.sentdate && "string" === typeof input.rsltdate && "string" === typeof input.reportdate && "string" === typeof input.rslt && "string" === typeof input.message && "string" === typeof input.button_json && "string" === typeof input.tpl_code && "string" === typeof input.senderKey && (undefined === input.smid || "string" === typeof input.smid);
                        return Array.isArray(input) && input.every(elem => "object" === typeof elem && null !== elem && $io0(elem));
                    };
                    if (false === __is(input))
                        ((input, _path, _exceptionable = true) => {
                            const $guard = typia_1.default.assert.guard;
                            const $ao0 = (input, _path, _exceptionable = true) => ((Array.isArray(input.list) || $guard(_exceptionable, {
                                path: _path + ".list",
                                expected: "Array<IMessageHistoryDetail>",
                                value: input.list
                            }, errorFactory)) && input.list.every((elem, _index2) => ("object" === typeof elem && null !== elem || $guard(_exceptionable, {
                                path: _path + ".list[" + _index2 + "]",
                                expected: "IMessageHistoryDetail",
                                value: elem
                            }, errorFactory)) && $ao1(elem, _path + ".list[" + _index2 + "]", true && _exceptionable) || $guard(_exceptionable, {
                                path: _path + ".list[" + _index2 + "]",
                                expected: "IMessageHistoryDetail",
                                value: elem
                            }, errorFactory)) || $guard(_exceptionable, {
                                path: _path + ".list",
                                expected: "Array<IMessageHistoryDetail>",
                                value: input.list
                            }, errorFactory)) && ("string" === typeof input.mid || $guard(_exceptionable, {
                                path: _path + ".mid",
                                expected: "string",
                                value: input.mid
                            }, errorFactory)) && ("string" === typeof input.type || $guard(_exceptionable, {
                                path: _path + ".type",
                                expected: "string",
                                value: input.type
                            }, errorFactory)) && ("string" === typeof input.sender || $guard(_exceptionable, {
                                path: _path + ".sender",
                                expected: "string",
                                value: input.sender
                            }, errorFactory)) && ("string" === typeof input.msg_count || $guard(_exceptionable, {
                                path: _path + ".msg_count",
                                expected: "string",
                                value: input.msg_count
                            }, errorFactory)) && ("string" === typeof input.mbody || $guard(_exceptionable, {
                                path: _path + ".mbody",
                                expected: "string",
                                value: input.mbody
                            }, errorFactory)) && ("string" === typeof input.reserve_date || $guard(_exceptionable, {
                                path: _path + ".reserve_date",
                                expected: "string",
                                value: input.reserve_date
                            }, errorFactory)) && ("string" === typeof input.reserve_state || $guard(_exceptionable, {
                                path: _path + ".reserve_state",
                                expected: "string",
                                value: input.reserve_state
                            }, errorFactory)) && ("string" === typeof input.regdate || $guard(_exceptionable, {
                                path: _path + ".regdate",
                                expected: "string",
                                value: input.regdate
                            }, errorFactory));
                            const $ao1 = (input, _path, _exceptionable = true) => ("string" === typeof input.msgid || $guard(_exceptionable, {
                                path: _path + ".msgid",
                                expected: "string",
                                value: input.msgid
                            }, errorFactory)) && ("string" === typeof input.type || $guard(_exceptionable, {
                                path: _path + ".type",
                                expected: "string",
                                value: input.type
                            }, errorFactory)) && ("string" === typeof input.sender || $guard(_exceptionable, {
                                path: _path + ".sender",
                                expected: "string",
                                value: input.sender
                            }, errorFactory)) && ("string" === typeof input.phone || $guard(_exceptionable, {
                                path: _path + ".phone",
                                expected: "string",
                                value: input.phone
                            }, errorFactory)) && ("string" === typeof input.status || $guard(_exceptionable, {
                                path: _path + ".status",
                                expected: "string",
                                value: input.status
                            }, errorFactory)) && ("string" === typeof input.reqdate || $guard(_exceptionable, {
                                path: _path + ".reqdate",
                                expected: "string",
                                value: input.reqdate
                            }, errorFactory)) && ("string" === typeof input.sentdate || $guard(_exceptionable, {
                                path: _path + ".sentdate",
                                expected: "string",
                                value: input.sentdate
                            }, errorFactory)) && ("string" === typeof input.rsltdate || $guard(_exceptionable, {
                                path: _path + ".rsltdate",
                                expected: "string",
                                value: input.rsltdate
                            }, errorFactory)) && ("string" === typeof input.reportdate || $guard(_exceptionable, {
                                path: _path + ".reportdate",
                                expected: "string",
                                value: input.reportdate
                            }, errorFactory)) && ("string" === typeof input.rslt || $guard(_exceptionable, {
                                path: _path + ".rslt",
                                expected: "string",
                                value: input.rslt
                            }, errorFactory)) && ("string" === typeof input.message || $guard(_exceptionable, {
                                path: _path + ".message",
                                expected: "string",
                                value: input.message
                            }, errorFactory)) && ("string" === typeof input.button_json || $guard(_exceptionable, {
                                path: _path + ".button_json",
                                expected: "string",
                                value: input.button_json
                            }, errorFactory)) && ("string" === typeof input.tpl_code || $guard(_exceptionable, {
                                path: _path + ".tpl_code",
                                expected: "string",
                                value: input.tpl_code
                            }, errorFactory)) && ("string" === typeof input.senderKey || $guard(_exceptionable, {
                                path: _path + ".senderKey",
                                expected: "string",
                                value: input.senderKey
                            }, errorFactory)) && (undefined === input.smid || "string" === typeof input.smid || $guard(_exceptionable, {
                                path: _path + ".smid",
                                expected: "(string | undefined)",
                                value: input.smid
                            }, errorFactory));
                            return (Array.isArray(input) || $guard(true, {
                                path: _path + "",
                                expected: "Array<IMessageHistoryDetailList>",
                                value: input
                            }, errorFactory)) && input.every((elem, _index1) => ("object" === typeof elem && null !== elem || $guard(true, {
                                path: _path + "[" + _index1 + "]",
                                expected: "IMessageHistoryDetailList",
                                value: elem
                            }, errorFactory)) && $ao0(elem, _path + "[" + _index1 + "]", true) || $guard(true, {
                                path: _path + "[" + _index1 + "]",
                                expected: "IMessageHistoryDetailList",
                                value: elem
                            }, errorFactory)) || $guard(true, {
                                path: _path + "",
                                expected: "Array<IMessageHistoryDetailList>",
                                value: input
                            }, errorFactory);
                        })(input, "$input", true);
                    return input;
                })(detailedMessages);
                return detailedMessages;
            }
            ((input, errorFactory) => {
                const __is = input => {
                    const $io0 = input => "string" === typeof input.mid && "string" === typeof input.type && "string" === typeof input.sender && "string" === typeof input.msg_count && "string" === typeof input.mbody && "string" === typeof input.reserve_date && "string" === typeof input.reserve_state && "string" === typeof input.regdate;
                    return Array.isArray(input) && input.every(elem => "object" === typeof elem && null !== elem && $io0(elem));
                };
                if (false === __is(input))
                    ((input, _path, _exceptionable = true) => {
                        const $guard = typia_1.default.assert.guard;
                        const $ao0 = (input, _path, _exceptionable = true) => ("string" === typeof input.mid || $guard(_exceptionable, {
                            path: _path + ".mid",
                            expected: "string",
                            value: input.mid
                        }, errorFactory)) && ("string" === typeof input.type || $guard(_exceptionable, {
                            path: _path + ".type",
                            expected: "string",
                            value: input.type
                        }, errorFactory)) && ("string" === typeof input.sender || $guard(_exceptionable, {
                            path: _path + ".sender",
                            expected: "string",
                            value: input.sender
                        }, errorFactory)) && ("string" === typeof input.msg_count || $guard(_exceptionable, {
                            path: _path + ".msg_count",
                            expected: "string",
                            value: input.msg_count
                        }, errorFactory)) && ("string" === typeof input.mbody || $guard(_exceptionable, {
                            path: _path + ".mbody",
                            expected: "string",
                            value: input.mbody
                        }, errorFactory)) && ("string" === typeof input.reserve_date || $guard(_exceptionable, {
                            path: _path + ".reserve_date",
                            expected: "string",
                            value: input.reserve_date
                        }, errorFactory)) && ("string" === typeof input.reserve_state || $guard(_exceptionable, {
                            path: _path + ".reserve_state",
                            expected: "string",
                            value: input.reserve_state
                        }, errorFactory)) && ("string" === typeof input.regdate || $guard(_exceptionable, {
                            path: _path + ".regdate",
                            expected: "string",
                            value: input.regdate
                        }, errorFactory));
                        return (Array.isArray(input) || $guard(true, {
                            path: _path + "",
                            expected: "Array<IMessageHistory>",
                            value: input
                        }, errorFactory)) && input.every((elem, _index1) => ("object" === typeof elem && null !== elem || $guard(true, {
                            path: _path + "[" + _index1 + "]",
                            expected: "IMessageHistory",
                            value: elem
                        }, errorFactory)) && $ao0(elem, _path + "[" + _index1 + "]", true) || $guard(true, {
                            path: _path + "[" + _index1 + "]",
                            expected: "IMessageHistory",
                            value: elem
                        }, errorFactory)) || $guard(true, {
                            path: _path + "",
                            expected: "Array<IMessageHistory>",
                            value: input
                        }, errorFactory);
                    })(input, "$input", true);
                return input;
            })(messages);
            return messages;
        });
    }
    sendMessage(template, messages, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = Object.assign(Object.assign({ apikey: this.config.key, userid: this.config.userId, sender: this.config.sender, senderkey: this.config.senderKey, tpl_code: template.templtCode }, Aligo_utils_1.AligoUtil.createMessageBody(template, messages)), {
                senddate: (options === null || options === void 0 ? void 0 : options.sendDate)
                    ? Common_utils_1.CommonUtil.formatDate(options.sendDate, "YYYYMMDDHHmmss")
                    : undefined,
                failover: (options === null || options === void 0 ? void 0 : options.failover) ? (options.failover ? "Y" : "N") : "N"
            });
            const res = yield Common_utils_1.CommonUtil.sendFormPost("https://kakaoapi.aligo.in/akv10/alimtalk/send/", body);
            if (res.code === 0) {
                const sentMessageInfo = res.info;
                ((input, errorFactory) => {
                    const __is = input => {
                        return "object" === typeof input && null !== input && ("string" === typeof input.type && "number" === typeof input.mid && "string" === typeof input.current && "number" === typeof input.unit && "number" === typeof input.total && "number" === typeof input.scnt && "number" === typeof input.fcnt);
                    };
                    if (false === __is(input))
                        ((input, _path, _exceptionable = true) => {
                            const $guard = typia_1.default.assert.guard;
                            const $ao0 = (input, _path, _exceptionable = true) => ("string" === typeof input.type || $guard(_exceptionable, {
                                path: _path + ".type",
                                expected: "string",
                                value: input.type
                            }, errorFactory)) && ("number" === typeof input.mid || $guard(_exceptionable, {
                                path: _path + ".mid",
                                expected: "number",
                                value: input.mid
                            }, errorFactory)) && ("string" === typeof input.current || $guard(_exceptionable, {
                                path: _path + ".current",
                                expected: "string",
                                value: input.current
                            }, errorFactory)) && ("number" === typeof input.unit || $guard(_exceptionable, {
                                path: _path + ".unit",
                                expected: "number",
                                value: input.unit
                            }, errorFactory)) && ("number" === typeof input.total || $guard(_exceptionable, {
                                path: _path + ".total",
                                expected: "number",
                                value: input.total
                            }, errorFactory)) && ("number" === typeof input.scnt || $guard(_exceptionable, {
                                path: _path + ".scnt",
                                expected: "number",
                                value: input.scnt
                            }, errorFactory)) && ("number" === typeof input.fcnt || $guard(_exceptionable, {
                                path: _path + ".fcnt",
                                expected: "number",
                                value: input.fcnt
                            }, errorFactory));
                            return ("object" === typeof input && null !== input || $guard(true, {
                                path: _path + "",
                                expected: "ISentMessageInfo",
                                value: input
                            }, errorFactory)) && $ao0(input, _path + "", true) || $guard(true, {
                                path: _path + "",
                                expected: "ISentMessageInfo",
                                value: input
                            }, errorFactory);
                        })(input, "$input", true);
                    return input;
                })(sentMessageInfo);
                return sentMessageInfo;
            }
            else {
                throw new Error(res.message);
            }
        });
    }
    cancelMessage(mid) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                apikey: this.config.key,
                userid: this.config.userId,
                mid
            };
            const res = yield Common_utils_1.CommonUtil.sendFormPost("https://kakaoapi.aligo.in/akv10/cancel/", body);
            if (res.code === 0) {
                return true;
            }
            else {
                throw new Error(res.message);
            }
        });
    }
}
exports.default = AligoKakaoSDK;
