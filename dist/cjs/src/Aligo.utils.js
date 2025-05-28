"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AligoUtil = void 0;
class AligoUtil {
    static replaceAllTokens(haystack, replacers) {
        return haystack.replace(/#{(.+?)}/g, (_matched, p1, _offset) => {
            if (replacers.hasOwnProperty(p1)) {
                return replacers[p1];
            }
            return p1;
        });
    }
    static createMessageBody(template, messages) {
        const master = {};
        messages.forEach((message, i) => {
            master[`receiver_${i + 1}`] = message.target;
            master[`subject_${i + 1}`] = message.subject;
            master[`message_${i + 1}`] = this.replaceAllTokens(template.templtContent, message.content);
            master[`button_${i + 1}`] = JSON.stringify({ button: template.buttons });
            // 강조형 타이틀
            master[`emtitle_${i + 1}`] = this.replaceAllTokens(template.templtTitle, message.content);
            master[`fsubject_${i + 1}`] = message.subject;
            master[`fmessage_${i + 1}`] = this.replaceAllTokens(template.templtContent, message.content);
        });
        return master;
    }
}
exports.AligoUtil = AligoUtil;
