var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
var OrderByPipe = (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (array, args) {
        if (!array || array === undefined || array.length === 0)
            return null;
        array.sort(function (a, b) {
            if (a.time < b.time) {
                return -1;
            }
            else if (a.time > b.time) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return array;
    };
    return OrderByPipe;
}());
OrderByPipe = __decorate([
    Pipe({
        name: 'orderByPipe'
    })
], OrderByPipe);
export { OrderByPipe };
//# sourceMappingURL=orderbypipe.js.map