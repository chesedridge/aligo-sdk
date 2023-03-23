"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageHistoryDetailPage = exports.MessageHistoryPage = exports.MessageHistoryDetailList = exports.MessageHistoryDetail = exports.MessageHistory = exports.SentMessageInfo = exports.Options = exports.Message = exports.MessageContent = exports.Template = exports.InstanceConfig = void 0;
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
exports.MessageHistoryPage = MessageHistoryPage;
class MessageHistoryDetailPage {
    list;
    page;
}
exports.MessageHistoryDetailPage = MessageHistoryDetailPage;
