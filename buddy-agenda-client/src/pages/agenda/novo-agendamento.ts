import { Component, trigger, state, transition, style, animate } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Agenda } from '../agenda/agenda';

@Component({
  selector: 'novo-agendamento',
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
  templateUrl: 'novo-agendamento.html'
})
export class NovoAgendamento {

	Appointment: any = { pet: { } };
  Buddies: any[];

  JustSaved: boolean = false;
  JustSavedStr: string;

  	constructor(public navCtrl: NavController, public params: NavParams) {
		  this.Buddies = [
        { Species: 'Cão', Name: 'Fofuxo', HasEvent: true },
        { Species: 'Gato', Name: 'Oliver', HasEvent: true },
        { Species: 'Cão', Name: 'Toby', HasEvent: false }
      ];
  	}

  	setSpecies(species){
  		this.Appointment.species = species;
  	}

  	saveInfo(){
      if(!this.Appointment.title || this.Appointment.title == '' ||
         !this.Appointment.pet || this.Appointment.pet == '' ||
         !this.Appointment.date || this.Appointment.date == '' ||
         !this.Appointment.time || this.Appointment.time == '' ||
         !this.Appointment.address || this.Appointment.address == ''){
          this.JustSaved = true;
          this.JustSavedStr = 'in';
          setTimeout(function(){
            this.JustSaved = false;
          }.bind(this), 3000);
      } else {
        this.Appointment.ManuallyAdded = true;
        let params = { hasNewAppointment: true, appointment: this.Appointment }
        this.navCtrl.setRoot(Agenda, params);
      }
  	}
}
