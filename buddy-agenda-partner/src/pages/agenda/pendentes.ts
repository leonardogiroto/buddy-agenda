import { Component, trigger, state, transition, style, animate } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { Agenda } from '../agenda/agenda';
import { ModalConfirmar } from '../modals/modal-confirmar';
import { ModalRecusar } from '../modals/modal-recusar';

@Component({
  selector: 'pendentes',
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
  templateUrl: 'pendentes.html'
})
export class Pendentes {

	Appointments: Array<any>;
  JustSaved: boolean = false;
  JustSavedStr: string;
  ReturnedAction: string;
  ShowHelp: boolean = false;

  	constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
   
   		let appDay = new Date();
		appDay.setDate(appDay.getDate()+2);
	    this.Appointments = [
	      	{ id: 1, title: 'Clínica Geral', brief: 'Sky está apresentando comportamentos bem atípicos, precisamos de um bom médico veterinário para olhá-lo com calma', owner: 'Claudia Giroto', pet: 'Sky', date: '00'.substring(0, 2 - (appDay.getDate()).toString().length) + appDay.getDate() + '/' +  '00'.substring(0, 2 - (appDay.getUTCMonth()).toString().length) + (appDay.getMonth()+1), time: '15:00', species: 'Cão', phone: '(21) 99999-9999' }
	    ];

  	}

  	getAppointments(date){
		  return this.Appointments;
  	}

    goToAgenda(){
      this.navCtrl.setRoot(Agenda);
    }

    openApproveModal(ap){
      let modalValues = {
        "Title": "Aprovar",
        "Message": "Tem certeza que deseja aprovar esta consulta?",
        "Appointment": ap
      }
      let AcceptModal = this.modalCtrl.create(ModalConfirmar, modalValues);
      AcceptModal.onDidDismiss(data => {
          if(data.Accepted){
            this.ReturnedAction = "aprovada";
            this.JustSaved = true;
            this.JustSavedStr = 'in';
            setTimeout(function(){
              this.JustSaved = false;
            }.bind(this), 3000);
            this.Appointments = [];
          }
      });
      AcceptModal.present();
    }
 
    openRejectModal(ap){
      let modalValues = {
        "Title": "Recusar",
        "Message": "Tem certeza que deseja recusar esta consulta?",
        "Appointment": ap
      }
      let DeclineModal = this.modalCtrl.create(ModalRecusar, modalValues);
      DeclineModal.onDidDismiss(data => {
          if(data.Declined){
            this.ReturnedAction = "recusada";
            this.JustSaved = true;
            this.JustSavedStr = 'in';
            setTimeout(function(){
              this.JustSaved = false;
            }.bind(this), 3000);
            this.Appointments = [];
          }
      });
      DeclineModal.present();
    }

    toggleHelp(){
      this.ShowHelp = !this.ShowHelp;
    }

}
