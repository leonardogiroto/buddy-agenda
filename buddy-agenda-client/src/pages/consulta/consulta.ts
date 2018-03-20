import { Component, trigger, state, transition, style, animate } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { ModalConsulta } from '../modals/modal-consulta';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

@Component({
  selector: 'consulta',
  animations: [
    trigger('fadeIn', [
      state('in', style({
        opacity: 1
      })),
      transition('void => *', [
        style({opacity: 0}),
        animate('100ms 300ms ease-in')
      ])
    ])
  ],
  templateUrl: 'consulta.html'
})
export class Consulta {

  WorkingHours: Array<any>;
  DefinedValues: any;
  DefinedRegions: Array<any>;
  AllSelected: boolean = false;
  
  JustSaved: boolean = false;
  JustSavedStr: string;

  mask = createNumberMask({
    prefix: 'R$ ',
    suffix: ''
  });
  maskDuration = createNumberMask({
    prefix: '',
    suffix: ' min'
  });

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

    this.DefinedValues = {
      Value: 'R$ 150', Duration: '60 min', Money: true, Cheque: true,
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

  openModal(ap){
    let myModal = this.modalCtrl.create(ModalConsulta, ap);
    myModal.present();
  }
  
  selectAll(){
    for (let i in this.DefinedRegions)
        this.DefinedRegions[i].Active = this.AllSelected;
  }

  saveInfo(){
    this.JustSaved = true;
    this.JustSavedStr = 'in';
    setTimeout(function(){
      this.JustSaved = false;
    }.bind(this), 3000);
  }
}
