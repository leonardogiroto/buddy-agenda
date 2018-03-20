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
import { ModalConsulta } from '../modals/modal-consulta';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
var Consulta = (function () {
    function Consulta(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.AllSelected = false;
        this.JustSaved = false;
        this.mask = createNumberMask({
            prefix: 'R$ ',
            suffix: ''
        });
        this.DefinedValues = {
            Value: 'R$ 150', Money: true, Cheque: true,
            CreditCard: false, DebitCard: false, BankTransfer: false,
            Whatsapp: true, Telegram: false
        };
        this.WorkingHours = [
            { Weekday: 'Segunda-Feira', Active: false, StartsAt: "10:00", StartsHour: 10, StartsMin: 0, EndsAt: "22:00", EndsHour: 22, EndsMin: 0 },
            { Weekday: 'Terça-Feira', Active: true, StartsAt: "08:00", StartsHour: 8, StartsMin: 0, EndsAt: "16:00", EndsHour: 16, EndsMin: 0 },
            { Weekday: 'Quarta-Feira', Active: false, StartsAt: "10:00", StartsHour: 10, StartsMin: 0, EndsAt: "22:00", EndsHour: 22, EndsMin: 0 },
            { Weekday: 'Quinta-Feira', Active: true, StartsAt: "08:00", StartsHour: 8, StartsMin: 0, EndsAt: "16:00", EndsHour: 16, EndsMin: 0 },
            { Weekday: 'Sexta-Feira', Active: false, StartsAt: "10:00", StartsHour: 10, StartsMin: 0, EndsAt: "22:00", EndsHour: 22, EndsMin: 0 },
            { Weekday: 'Sábado', Active: true, StartsAt: "10:00", StartsHour: 10, StartsMin: 0, EndsAt: "20:00", EndsHour: 20, EndsMin: 0 },
            { Weekday: 'Domingo', Active: true, StartsAt: "10:00", StartsHour: 10, StartsMin: 0, EndsAt: "18:00", EndsHour: 18, EndsMin: 0 }
        ];
        this.DefinedRegions = [
            { Region: 'Barra da Tijuca e Recreio', Active: true },
            { Region: 'Centro e Zona Portuaria', Active: true },
            { Region: 'Grande Bangu', Active: false },
            { Region: 'Grande Méier', Active: false },
            { Region: 'Grande Tijuca', Active: true },
            { Region: 'Ilha do Governador e Zona da Leopoldina', Active: false },
            { Region: 'Jacarepaguá', Active: true },
            { Region: 'Niteroi', Active: false },
            { Region: 'Zona Norte', Active: false },
            { Region: 'Zona Oeste', Active: false },
            { Region: 'Zona Sul', Active: true }
        ];
    }
    Consulta.prototype.openModal = function (ap) {
        var myModal = this.modalCtrl.create(ModalConsulta, ap);
        myModal.present();
    };
    Consulta.prototype.selectAll = function () {
        for (var i in this.DefinedRegions)
            this.DefinedRegions[i].Active = this.AllSelected;
    };
    Consulta.prototype.saveInfo = function () {
        this.JustSaved = true;
        this.JustSavedStr = 'in';
        setTimeout(function () {
            this.JustSaved = false;
        }.bind(this), 3000);
    };
    return Consulta;
}());
Consulta = __decorate([
    Component({
        selector: 'consulta',
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
        templateUrl: 'consulta.html'
    }),
    __metadata("design:paramtypes", [NavController, ModalController])
], Consulta);
export { Consulta };
//# sourceMappingURL=consulta.js.map