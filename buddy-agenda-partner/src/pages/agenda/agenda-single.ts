import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { History } from '../history/history';

@Component({
  selector: 'agenda-single',
  templateUrl: 'agenda-single.html'
})
export class AgendaSingle {

	private appointment: any;

  	constructor(public navCtrl: NavController, public params: NavParams) {
		  this.appointment = params.get("appointment");
  	}

  	viewHistory(petId){
  		this.navCtrl.push(History, {
      		petId: petId
    	});
  	}
  
}
