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
var ModalCalendar = (function () {
    function ModalCalendar(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.calendar = {};
        this.isStarting = true;
        this.calendar = {
            mode: 'month',
            currentDate: this.navParams.get('previousDate') ? this.navParams.get('previousDate') : new Date()
        };
    }
    ModalCalendar.prototype.closeModal = function (answer) {
        this.viewCtrl.dismiss();
    };
    ModalCalendar.prototype.defineDate = function () {
        this.viewCtrl.dismiss(this.selectedDate);
    };
    ModalCalendar.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    ModalCalendar.prototype.today = function () {
        this.calendar.currentDate = new Date();
    };
    ModalCalendar.prototype.onTimeSelected = function (ev) {
        this.selectedDate = ev.selectedTime;
    };
    return ModalCalendar;
}());
ModalCalendar = __decorate([
    Component({
        selector: 'modal-calendar',
        templateUrl: 'modal-calendar.html'
    }),
    __metadata("design:paramtypes", [ViewController, NavParams])
], ModalCalendar);
export { ModalCalendar };
//# sourceMappingURL=modal-calendar.js.map