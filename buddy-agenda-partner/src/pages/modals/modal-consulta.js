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
import { ViewController, NavParams } from 'ionic-angular';
var ModalConsulta = (function () {
    function ModalConsulta(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.Weekday = this.navParams.get('Weekday');
        this.StartsHour = this.navParams.get('StartsHour');
        this.StartsMin = this.navParams.get('StartsMin');
        this.EndsHour = this.navParams.get('EndsHour');
        this.EndsMin = this.navParams.get('EndsMin');
    }
    ModalConsulta.prototype.increaseHour = function (type) {
        type == 'Start' ? this.StartsHour++ : this.EndsHour++;
        if (this.StartsHour == 24) {
            this.StartsHour = 0;
        }
        else if (this.EndsHour == 24) {
            this.EndsHour = 0;
        }
    };
    ModalConsulta.prototype.decreaseHour = function (type) {
        type == 'Start' ? this.StartsHour-- : this.EndsHour--;
        if (this.StartsHour == -1) {
            this.StartsHour = 23;
        }
        else if (this.EndsHour == -1) {
            this.EndsHour = 23;
        }
    };
    ModalConsulta.prototype.changeMinute = function (type) {
        if (type == 'Start')
            this.StartsMin == 0 ? this.StartsMin = 30 : this.StartsMin = 0;
        else
            this.EndsMin == 0 ? this.EndsMin = 30 : this.EndsMin = 0;
    };
    ModalConsulta.prototype.displayValue = function (num) {
        var s = num + "";
        while (s.length < 2)
            s = "0" + s;
        return s;
    };
    ModalConsulta.prototype.saveModal = function () {
        this.viewCtrl.dismiss();
    };
    ModalConsulta.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    return ModalConsulta;
}());
ModalConsulta = __decorate([
    Component({
        selector: 'modal-consulta',
        templateUrl: 'modal-consulta.html'
    }),
    __metadata("design:paramtypes", [ViewController, NavParams])
], ModalConsulta);
export { ModalConsulta };
//# sourceMappingURL=modal-consulta.js.map