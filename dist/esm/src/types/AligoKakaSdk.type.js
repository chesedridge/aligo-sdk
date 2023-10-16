"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageHistoryDetailPage = exports.MessageHistoryPage = exports.MessageHistoryDetailList = exports.MessageHistoryDetail = exports.MessageHistory = exports.SentMessageInfo = exports.Options = exports.Message = exports.MessageContent = exports.Template = exports.InstanceConfig = void 0;
const class_transformer_1 = require("class-transformer");
class InstanceConfig {
    key;
    userId;
    sender;
    senderKey;
}
exports.InstanceConfig = InstanceConfig;
class Template {
    templtCode;
    templtContent;
    templtName;
    templateType;
    templateEmType;
    templtTitle;
    templtSubtitle;
    templtImageName;
    templtImageUrl;
    securityFlag;
    status;
    inspStatus;
    senderKey;
    buttons;
    cdate;
}
exports.Template = Template;
class MessageContent {
}
exports.MessageContent = MessageContent;
class Message {
    target;
    subject;
    content;
}
exports.Message = Message;
class Options {
    senddate;
    failover;
}
exports.Options = Options;
class SentMessageInfo {
    type;
    mid;
    current;
    unit;
    total;
    scnt;
    fcnt;
}
exports.SentMessageInfo = SentMessageInfo;
class MessageHistory {
    mid;
    type;
    sender;
    msg_count;
    mbody;
    reserve_date;
    reserve_state;
    regdate;
}
exports.MessageHistory = MessageHistory;
class MessageHistoryDetail {
    msgid;
    type;
    sender;
    phone;
    status;
    reqdate;
    sentdate;
    rsltdate;
    reportdate;
    rslt;
    message;
    button_json;
    tpl_code;
    senderKey;
    smid;
}
exports.MessageHistoryDetail = MessageHistoryDetail;
class MessageHistoryDetailList {
    mid;
    type;
    sender;
    msg_count;
    mbody;
    reserve_date;
    reserve_state;
    regdate;
    list;
}
exports.MessageHistoryDetailList = MessageHistoryDetailList;
class Page {
    total;
    current;
}
class MessageHistoryPage {
    list;
    page;
}
__decorate([
    (0, class_transformer_1.Type)(() => MessageHistory),
    __metadata("design:type", Array)
], MessageHistoryPage.prototype, "list", void 0);
exports.MessageHistoryPage = MessageHistoryPage;
class MessageHistoryDetailPage {
    list;
    page;
}
__decorate([
    (0, class_transformer_1.Type)(() => MessageHistoryDetail),
    __metadata("design:type", Array)
], MessageHistoryDetailPage.prototype, "list", void 0);
exports.MessageHistoryDetailPage = MessageHistoryDetailPage;
