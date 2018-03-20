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
import { AgendaSingle } from '../agenda/agenda-single';
import { ModalCalendar } from '../modals/modal-calendar';
import { ModalRecusar } from '../modals/modal-recusar';
var Agenda = (function () {
    function Agenda(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.SearchDate = new Date();
        this.Today = this.SearchDate;
        this.JustSaved = false;
        this.Appointments = [
            { id: 1, title: 'Vacinação', owner: 'Lara Rodrigues', pet: 'Fofuxo', day: new Date().getTime(), date: '00'.substring(0, 2 - (this.Today.getDate()).toString().length) + appDay.getDate() + '/' + '00'.substring(0, 2 - (appDay.getUTCMonth()).toString().length) + (appDay.getMonth() + 1), time: '16:00', species: 'Cão', race: 'Poodle', gender: 'Macho', age: '10 anos e 6 meses', weight: '2,5kg', spayed: false, obs: 'Realizou operação recentemente para retirada de tumor', address: 'Rua Timóteo da Costa, 200', address2: 'Bloco 01 Apartamento 504', neighborhood: 'Leblon', phone: '(21) 99531-9869', brief: 'Aplicação de nova dose de vacina contra a raiva.' },
            { id: 2, title: 'Clínica Geral', owner: 'João Vicente', pet: 'Oliver', day: new Date().getTime(), date: '00'.substring(0, 2 - (appDay.getDate()).toString().length) + appDay.getDate() + '/' + '00'.substring(0, 2 - (appDay.getUTCMonth()).toString().length) + (appDay.getMonth() + 1), time: '11:00', species: 'Gato', race: 'Vira-Lata', gender: 'Macho', age: '2 anos e 4 meses', weight: '3,8kg', spayed: true, obs: 'É muito medroso, porém, não é agressivo', address: 'Rua Marquês de São Vicente, 50', address2: 'Bloco 01 Apartamento 302', neighborhood: 'Gávea', phone: '(21) 99595-7897', brief: 'Está apresentando comportamento atípico, se recusa a comer a comida dele, só come muito pouco quando damos na boca. Está emagrecendo por conta disso e está criando manias peculiares.' }
        ];
    }
    Agenda.prototype.getAppointments = function (date) {
        if (date.setHours(0, 0, 0, 0) == this.Today.setHours(0, 0, 0, 0))
            return this.Appointments;
        return [];
    };
    Agenda.prototype.viewAppointment = function (ap) {
        this.navCtrl.push(AgendaSingle, {
            appointment: ap
        });
    };
    Agenda.prototype.openCalendar = function () {
        var _this = this;
        var ModalValues = { previousDate: this.SearchDate };
        var CalendarModal = this.modalCtrl.create(ModalCalendar, ModalValues);
        CalendarModal.onDidDismiss(function (data) {
            if (data) {
                _this.SearchDate = data;
            }
        });
        CalendarModal.present();
    };
    Agenda.prototype.previousDay = function () {
        var yesterday = new Date(this.SearchDate);
        yesterday.setDate(this.SearchDate.getDate() - 1);
        this.SearchDate = yesterday;
    };
    Agenda.prototype.nextDay = function () {
        var tomorrow = new Date(this.SearchDate);
        tomorrow.setDate(this.SearchDate.getDate() + 1);
        this.SearchDate = tomorrow;
    };
    Agenda.prototype.cancelAppointment = function (ap) {
        var _this = this;
        var modalValues = {
            "Title": "Cancelar",
            "Message": "Tem certeza que deseja cancelar esta consulta?",
            "Appointment": ap
        };
        var AcceptModal = this.modalCtrl.create(ModalRecusar, modalValues);
        AcceptModal.onDidDismiss(function (data) {
            if (data.Accepted) {
                _this.JustSaved = true;
                _this.JustSavedStr = 'in';
                setTimeout(function () {
                    this.JustSaved = false;
                }.bind(_this), 3000);
            }
        });
        AcceptModal.present();
        var e = window.event;
        e.cancelBubble = true;
        if (e.stopPropagation)
            e.stopPropagation();
    };
    return Agenda;
}());
Agenda = __decorate([
    Component({
        selector: 'agenda',
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
        templateUrl: 'agenda.html'
    }),
    __metadata("design:paramtypes", [NavController, ModalController])
], Agenda);
export { Agenda };
//# sourceMappingURL=agenda.js.map