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
// import { Modify } from "./types/TypeUtil"
class InstanceConfig {
}
exports.InstanceConfig = InstanceConfig;
class Template {
}
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Template.prototype, "templtCode", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Template.prototype, "templtContent", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Template.prototype, "templtName", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Template.prototype, "templateType", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Template.prototype, "templateEmType", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Template.prototype, "templtTitle", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Template.prototype, "templtSubtitle", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Template.prototype, "templtImageName", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Template.prototype, "templtImageUrl", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Template.prototype, "securityFlag", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Template.prototype, "status", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Template.prototype, "inspStatus", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Template.prototype, "senderKey", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Array)
], Template.prototype, "buttons", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Template.prototype, "cdate", void 0);
exports.Template = Template;
class MessageContent {
}
exports.MessageContent = MessageContent;
class Message {
}
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Message.prototype, "target", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Message.prototype, "subject", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", MessageContent)
], Message.prototype, "content", void 0);
exports.Message = Message;
class Options {
}
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Options.prototype, "senddate", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Options.prototype, "failover", void 0);
exports.Options = Options;
class SentMessageInfo {
}
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SentMessageInfo.prototype, "type", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SentMessageInfo.prototype, "mid", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SentMessageInfo.prototype, "current", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], SentMessageInfo.prototype, "unit", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], SentMessageInfo.prototype, "total", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], SentMessageInfo.prototype, "scnt", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], SentMessageInfo.prototype, "fcnt", void 0);
exports.SentMessageInfo = SentMessageInfo;
class MessageHistory {
}
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MessageHistory.prototype, "mid", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MessageHistory.prototype, "type", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MessageHistory.prototype, "sender", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MessageHistory.prototype, "msg_count", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MessageHistory.prototype, "mbody", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MessageHistory.prototype, "reserve_date", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MessageHistory.prototype, "reserve_state", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MessageHistory.prototype, "regdate", void 0);
exports.MessageHistory = MessageHistory;
class MessageHistoryDetail {
}
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MessageHistoryDetail.prototype, "msgid", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MessageHistoryDetail.prototype, "type", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MessageHistoryDetail.prototype, "sender", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MessageHistoryDetail.prototype, "phone", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MessageHistoryDetail.prototype, "status", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MessageHistoryDetail.prototype, "reqdate", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MessageHistoryDetail.prototype, "sentdate", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MessageHistoryDetail.prototype, "rsltdate", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MessageHistoryDetail.prototype, "reportdate", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MessageHistoryDetail.prototype, "rslt", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MessageHistoryDetail.prototype, "message", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MessageHistoryDetail.prototype, "button_json", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MessageHistoryDetail.prototype, "tpl_code", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MessageHistoryDetail.prototype, "senderKey", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MessageHistoryDetail.prototype, "smid", void 0);
exports.MessageHistoryDetail = MessageHistoryDetail;
class MessageHistoryDetailList extends MessageHistory {
}
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Array)
], MessageHistoryDetailList.prototype, "list", void 0);
exports.MessageHistoryDetailList = MessageHistoryDetailList;
class Page {
}
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], Page.prototype, "total", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], Page.prototype, "current", void 0);
class MessageHistoryPage {
}
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Type)(() => MessageHistory),
    __metadata("design:type", Array)
], MessageHistoryPage.prototype, "list", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Page)
], MessageHistoryPage.prototype, "page", void 0);
exports.MessageHistoryPage = MessageHistoryPage;
class MessageHistoryDetailPage {
}
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Type)(() => MessageHistoryDetail),
    __metadata("design:type", Array)
], MessageHistoryDetailPage.prototype, "list", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Page)
], MessageHistoryDetailPage.prototype, "page", void 0);
exports.MessageHistoryDetailPage = MessageHistoryDetailPage;
