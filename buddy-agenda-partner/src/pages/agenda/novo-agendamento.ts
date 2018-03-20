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

	Appointment: any = { species: 'Cão' };

  JustSaved: boolean = false;
  JustSavedStr: string;

  	constructor(public navCtrl: NavController, public params: NavParams) {
		  
  	}

  	setSpecies(species){
  		this.Appointment.species = species;
  	}

  	saveInfo(){
      if(!this.Appointment.title || this.Appointment.title == '' ||
         !this.Appointment.owner || this.Appointment.owner == '' ||
         !this.Appointment.pet || this.Appointment.pet == '' ||
         !this.Appointment.date || this.Appointment.date == '' ||
         !this.Appointment.time || this.Appointment.time == '' ||
         !this.Appointment.neighborhood || this.Appointment.neighborhood == '' ||
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
