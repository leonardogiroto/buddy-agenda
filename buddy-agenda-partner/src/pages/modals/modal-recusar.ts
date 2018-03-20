import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'modal-recusar',
  templateUrl: 'modal-recusar.html'
})
export class ModalRecusar {

    Title: string = this.navParams.get('Title');
	  Message: string = this.navParams.get('Message');
    Appointment: any = this.navParams.get('Appointment');
    DeclineReason: string;

  	constructor(public viewCtrl: ViewController, public navParams: NavParams) {

  	}

  	closeModal(answer) {
      let Answer = {
          Declined: answer == 1 ? true : false,
          Reason: this.DeclineReason
      };
	    this.viewCtrl.dismiss(Answer);
  	}
}
