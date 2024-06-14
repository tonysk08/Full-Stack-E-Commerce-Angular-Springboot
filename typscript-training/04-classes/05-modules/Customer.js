"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor(_firstname, _lastname) {
        this._firstname = _firstname;
        this._lastname = _lastname;
    }
    get firstName() {
        return this._firstname;
    }
    set firstName(value) {
        this._firstname = value;
    }
    get lastName() {
        return this._lastname;
    }
    set lastName(value) {
        this._lastname = value;
    }
}
exports.Customer = Customer;
