import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'modal-message',
  templateUrl: 'modal-message.html'
})
export class ModalMessage {

    Title: string = this.navParams.get('Title');
    Message: string = this.navParams.get('Message');
    SubMessage: string = this.navParams.get('SubMessage');

  	constructor(public viewCtrl: ViewController, public navParams: NavParams) {

  	}

  	closeModal(answer) {
      let Answer = {
          Accepted: answer == 1 ? true : false
      };
      this.viewCtrl.dismiss(Answer);
    }
 
}
