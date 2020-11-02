"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const View_1 = require("./View");
class ViewAdd extends View_1.View {
    constructor(elemente) {
        super(elemente);
    }
    template(b) {
        if (b) {
            if (this.element.classList.contains("inv")) {
                this.element.classList.add("inv");
            }
        }
        else {
            this.element.classList.remove("inv");
        }
        return this.element.innerHTML;
    }
}
exports.ViewAdd = ViewAdd;
//# sourceMappingURL=ViewAdd.js.map