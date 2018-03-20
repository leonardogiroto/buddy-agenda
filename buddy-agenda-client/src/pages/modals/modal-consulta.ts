import { Component, trigger, state, transition, style, animate } from '@angular/core';
import { ViewController, NavController, NavParams } from 'ionic-angular';

import { Agenda } from '../agenda/agenda';

@Component({
  selector: 'modal-consulta',
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
  templateUrl: 'modal-consulta.html'
})
export class ModalConsulta {

	Date: string = this.navParams.get('Date');
	Time: number = this.navParams.get('Time');
  Doctor: string = this.navParams.get('Doctor');
  WaitingConfirm: boolean = true;

  Pet: string = '';
  Description: string = '';

  JustSaved: boolean = false;
  JustSavedStr: string;

	constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {

	}

  confirm(){
    if(this.Pet == '' || this.Description == ''){
      this.JustSaved = true;
      this.JustSavedStr = 'in';
      setTimeout(function(){
        this.JustSaved = false;
      }.bind(this), 3000);
    }
    else{
      this.WaitingConfirm = false;
      let myElement: any = document.querySelector("modal-consulta");
      myElement.style.height = "280px";
    }
  }

	saveModal(){
    this.viewCtrl.dismiss();
    this.navCtrl.setRoot(Agenda);
	}

	closeModal() {
    this.viewCtrl.dismiss();
	}
 
}
