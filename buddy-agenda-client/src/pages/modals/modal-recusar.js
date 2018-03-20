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
var ModalRecusar = (function () {
    function ModalRecusar(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.Title = this.navParams.get('Title');
        this.Message = this.navParams.get('Message');
        this.Appointment = this.navParams.get('Appointment');
    }
    ModalRecusar.prototype.closeModal = function (answer) {
        var Answer = {
            Declined: answer == 1 ? true : false,
            Reason: this.DeclineReason
        };
        this.viewCtrl.dismiss(Answer);
    };
    return ModalRecusar;
}());
ModalRecusar = __decorate([
    Component({
        selector: 'modal-recusar',
        templateUrl: 'modal-recusar.html'
    }),
    __metadata("design:paramtypes", [ViewController, NavParams])
], ModalRecusar);
export { ModalRecusar };
//# sourceMappingURL=modal-recusar.js.map