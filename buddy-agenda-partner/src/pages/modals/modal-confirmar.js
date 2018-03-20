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
var ModalConfirmar = (function () {
    function ModalConfirmar(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.Title = this.navParams.get('Title');
        this.Message = this.navParams.get('Message');
        this.Appointment = this.navParams.get('Appointment');
    }
    ModalConfirmar.prototype.closeModal = function (answer) {
        var Answer = {
            Accepted: answer == 1 ? true : false
        };
        this.viewCtrl.dismiss(Answer);
    };
    return ModalConfirmar;
}());
ModalConfirmar = __decorate([
    Component({
        selector: 'modal-confirmar',
        templateUrl: 'modal-confirmar.html'
    }),
    __metadata("design:paramtypes", [ViewController, NavParams])
], ModalConfirmar);
export { ModalConfirmar };
//# sourceMappingURL=modal-confirmar.js.map