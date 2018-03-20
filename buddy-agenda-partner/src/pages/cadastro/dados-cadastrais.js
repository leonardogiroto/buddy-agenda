var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, trigger, state, transition, style, animate } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ModalMessage } from '../modals/modal-message';
var DadosCadastrais = (function () {
    function DadosCadastrais(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.JustSaved = false;
        this.SendMail = false;
        this.Owner = {
            name: "Leonardo Soares Giroto",
            email: "leonardo.giroto@gmail.com",
            specialization: "Neurologista",
            CRMV: "123456",
            description: "Graduação em Medicina Veterinária e Residência em Neurologia Veterinária. Experiência de 10 anos de atuação clínica e cirúrgica."
        };
    }
    DadosCadastrais.prototype.saveInfo = function () {
        this.JustSaved = true;
        this.JustSavedStr = 'in';
        setTimeout(function () {
            this.JustSaved = false;
        }.bind(this), 3000);
    };
    DadosCadastrais.prototype.openPasswordChange = function () {
        var _this = this;
        var modalValues = {
            "Title": "Senha",
            "Message": "Tem certeza que deseja alterar sua senha?",
            "SubMessage": "Um e-mail será encaminhado para que você faça a alteração."
        };
        var Modal = this.modalCtrl.create(ModalMessage, modalValues);
        // TO DO: VERIFICAR QUE ELE NÃO CLIQUE 500X PARA MANDAR O E-MAIL
        Modal.onDidDismiss(function (data) {
            if (data.Accepted === true) {
                _this.SendMail = true;
                _this.JustSavedStr = 'in';
                setTimeout(function () {
                    this.SendMail = false;
                }.bind(_this), 3000);
            }
        });
        Modal.present();
    };
    return DadosCadastrais;
}());
DadosCadastrais = __decorate([
    Component({
        selector: 'dados-cadastrais',
        animations: [
            trigger('fadeIn', [
                state('in', style({
                    opacity: 1
                })),
                transition('void => *', [
                    style({ opacity: 0 }),
                    animate('100ms 300ms ease-in')
                ])
            ])
        ],
        templateUrl: 'dados-cadastrais.html'
    }),
    __metadata("design:paramtypes", [NavController, ModalController])
], DadosCadastrais);
export { DadosCadastrais };
//# sourceMappingURL=dados-cadastrais.js.map