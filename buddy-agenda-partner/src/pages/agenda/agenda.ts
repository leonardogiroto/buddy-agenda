import { Component, trigger, state, transition, style, animate } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';

import { AgendaSingle } from '../agenda/agenda-single';
import { NovoAgendamento } from '../agenda/novo-agendamento';
import { ModalCalendar } from '../modals/modal-calendar';
import { ModalRecusar } from '../modals/modal-recusar';

@Component({
  selector: 'agenda',
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
  templateUrl: 'agenda.html'
})
export class Agenda {

	Appointments: Array<any>;
	SearchDate: any = new Date();
  Today: any = this.SearchDate;
  HasNewAppointment: boolean = false;
  ShowHelp: boolean = false;

  JustSaved: boolean = false;
  JustSavedStr: string;

  	constructor(public navCtrl: NavController, public params: NavParams, public modalCtrl: ModalController) {
      this.Appointments = [
	      	{ id: 1, title: 'Vacinação', owner: 'Lara Rodrigues', pet: 'Fofuxo', day: new Date().getTime(), date:  '00'.substring(0, 2 - (this.Today.getDate()).toString().length) + this.Today.getDate() + '/' +  '00'.substring(0, 2 - (this.Today.getUTCMonth()).toString().length) + (this.Today.getMonth()+1), time: '16:00', species: 'Cão', race: 'Poodle', gender: 'Macho', age: '10 anos e 6 meses', weight: '2,5kg', spayed: false, obs: 'Realizou operação recentemente para retirada de tumor', address: 'Rua Timóteo da Costa, 200', address2: 'Bloco 01 Apartamento 504', neighborhood: 'Leblon', phone: '(21) 99531-9869', brief: 'Aplicação de nova dose de vacina contra a raiva.' },
	      	{ id: 2, title: 'Clínica Geral', owner: 'João Vicente', pet: 'Oliver', day: new Date().getTime(), date: '00'.substring(0, 2 - (this.Today.getDate()).toString().length) + this.Today.getDate() + '/' +  '00'.substring(0, 2 - (this.Today.getUTCMonth()).toString().length) + (this.Today.getMonth()+1), time: '11:00', species: 'Gato', race: 'Vira-Lata', gender: 'Macho', age: '2 anos e 4 meses', weight: '3,8kg', spayed: true, obs: 'É muito medroso, porém, não é agressivo', address: 'Rua Marquês de São Vicente, 50', address2: 'Bloco 01 Apartamento 302', neighborhood: 'Gávea', phone: '(21) 99595-7897', brief: 'Está apresentando comportamento atípico, se recusa a comer a comida dele, só come muito pouco quando damos na boca. Está emagrecendo por conta disso e está criando manias peculiares.' }
	    ];

      this.HasNewAppointment = params.get("hasNewAppointment") ? params.get("hasNewAppointment") : false;
      if(this.HasNewAppointment) { this.Appointments.push(params.get("appointment")); }
  	}

  	getAppointments(date){
      if(date.setHours(0,0,0,0) == this.Today.setHours(0,0,0,0))
		      return this.Appointments;
      return [];
  	}

  	viewAppointment(ap){
      if(!ap.ManuallyAdded){
        this.navCtrl.push(AgendaSingle, {
            appointment: ap
        });
      }
  	}

    openCalendar(){
      let ModalValues = { previousDate: this.SearchDate };
      let CalendarModal = this.modalCtrl.create(ModalCalendar, ModalValues);
      CalendarModal.onDidDismiss(data => {
          if(data) { this.SearchDate = data; }
      });
      CalendarModal.present();
    }

    previousDay(){
      let yesterday = new Date(this.SearchDate);
      yesterday.setDate(this.SearchDate.getDate()-1);
      this.SearchDate = yesterday;
    }

    nextDay(){
      let tomorrow = new Date(this.SearchDate);
      tomorrow.setDate(this.SearchDate.getDate()+1);
      this.SearchDate = tomorrow;
    }

    newAppointment(){
      this.navCtrl.push(NovoAgendamento);
    }

    cancelAppointment(ap){
      let modalValues = {
        "Title": "Cancelar",
        "Message": "Tem certeza que deseja cancelar esta consulta?",
        "Appointment": ap
      }
      let modal = this.modalCtrl.create(ModalRecusar, modalValues);
      modal.onDidDismiss(data => {
          if(data.Declined){

            for(let i = 0; i < this.Appointments.length; i++) {
                if(this.Appointments[i].id == ap.id) {
                    this.Appointments.splice(i, 1);
                    break;
                }
            }

            this.JustSaved = true;
            this.JustSavedStr = 'in';
            setTimeout(function(){
              this.JustSaved = false;
            }.bind(this), 3000);
          }
      });
      modal.present();
    }

    toggleHelp(){
      this.ShowHelp = !this.ShowHelp;
    }
}
