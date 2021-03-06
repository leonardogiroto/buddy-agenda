import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'modal-confirmar',
  templateUrl: 'modal-confirmar.html'
})
export class ModalConfirmar {

    Title: string = this.navParams.get('Title');
	  Message: string = this.navParams.get('Message');
    Appointment: any = this.navParams.get('Appointment');

  	constructor(public viewCtrl: ViewController, public navParams: NavParams) {

  	}

    closeModal(answer) {
      let Answer = {
          Accepted: answer == 1 ? true : false
      };
      this.viewCtrl.dismiss(Answer);
    }
 
}
