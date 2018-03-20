var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
var MonthNamePipe = (function () {
    function MonthNamePipe() {
    }
    MonthNamePipe.prototype.transform = function (monthIndex) {
        var monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        return monthNames[monthIndex];
    };
    return MonthNamePipe;
}());
MonthNamePipe = __decorate([
    Pipe({
        name: 'monthname'
    })
], MonthNamePipe);
export { MonthNamePipe };
//# sourceMappingURL=monthname-pipe.js.map