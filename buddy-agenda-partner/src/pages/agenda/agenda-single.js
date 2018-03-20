var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { History } from '../history/history';
var AgendaSingle = (function () {
    function AgendaSingle(navCtrl, params) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.appointment = params.get("appointment");
        console.log(this.appointment);
    }
    AgendaSingle.prototype.viewHistory = function (petId) {
        this.navCtrl.push(History, {
            petId: petId
        });
    };
    return AgendaSingle;
}());
AgendaSingle = __decorate([
    Component({
        selector: 'agenda-single',
        templateUrl: 'agenda-single.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams])
], AgendaSingle);
export { AgendaSingle };
//# sourceMappingURL=agenda-single.js.map