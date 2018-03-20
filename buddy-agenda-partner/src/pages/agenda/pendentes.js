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
import { Agenda } from '../agenda/agenda';
import { ModalConfirmar } from '../modals/modal-confirmar';
import { ModalRecusar } from '../modals/modal-recusar';
var Pendentes = (function () {
    function Pendentes(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.JustSaved = false;
        var appDay = new Date();
        appDay.setDate(appDay.getDate() + 2);
        this.Appointments = [
            { id: 1, title: 'Clínica Geral', brief: 'Sky está apresentando comportamentos bem atípicos, precisamos de um bom médico veterinário para olhá-lo com calma', owner: 'Claudia Giroto', pet: 'Sky', date: '00'.substring(0, 2 - (appDay.getDate()).toString().length) + appDay.getDate() + '/' + '00'.substring(0, 2 - (appDay.getUTCMonth()).toString().length) + (appDay.getMonth() + 1), time: '15:00', race: 'Cão', phone: '(21) 99999-9999' }
        ];
    }
    Pendentes.prototype.getAppointments = function (date) {
        return this.Appointments;
    };
    Pendentes.prototype.goToAgenda = function () {
        this.navCtrl.setRoot(Agenda);
    };
    Pendentes.prototype.openApproveModal = function (ap) {
        var _this = this;
        var modalValues = {
            "Title": "Aprovar",
            "Message": "Tem certeza que deseja aprovar esta consulta?",
            "Appointment": ap
        };
        var AcceptModal = this.modalCtrl.create(ModalConfirmar, modalValues);
        AcceptModal.onDidDismiss(function (data) {
            if (data.Accepted) {
                _this.ReturnedAction = "aprovada";
                _this.JustSaved = true;
                _this.JustSavedStr = 'in';
                setTimeout(function () {
                    this.JustSaved = false;
                }.bind(_this), 3000);
                _this.Appointments = [];
            }
        });
        AcceptModal.present();
    };
    Pendentes.prototype.openRejectModal = function (ap) {
        var _this = this;
        var modalValues = {
            "Title": "Recusar",
            "Message": "Tem certeza que deseja recusar esta consulta?",
            "Appointment": ap
        };
        var DeclineModal = this.modalCtrl.create(ModalRecusar, modalValues);
        DeclineModal.onDidDismiss(function (data) {
            if (data.Declined) {
                _this.ReturnedAction = "recusada";
                _this.JustSaved = true;
                _this.JustSavedStr = 'in';
                setTimeout(function () {
                    this.JustSaved = false;
                }.bind(_this), 3000);
                _this.Appointments = [];
            }
        });
        DeclineModal.present();
    };
    return Pendentes;
}());
Pendentes = __decorate([
    Component({
        selector: 'pendentes',
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
        templateUrl: 'pendentes.html'
    }),
    __metadata("design:paramtypes", [NavController, ModalController])
], Pendentes);
export { Pendentes };
//# sourceMappingURL=pendentes.js.map