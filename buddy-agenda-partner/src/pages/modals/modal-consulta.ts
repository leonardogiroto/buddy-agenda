import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'modal-consulta',
  templateUrl: 'modal-consulta.html'
})
export class ModalConsulta {

	Weekday: string = this.navParams.get('Weekday');
	StartsHour: number = this.navParams.get('StartsHour');
	StartsMin: number = this.navParams.get('StartsMin');
	EndsHour: number = this.navParams.get('EndsHour');
	EndsMin: number = this.navParams.get('EndsMin');

  	constructor(public viewCtrl: ViewController, public navParams: NavParams) {

  	}

  	increaseHour(type){
  		type == 'Start' ? this.StartsHour++ : this.EndsHour++;
  		if(this.StartsHour == 24) { this.StartsHour = 0; }
  		else if(this.EndsHour == 24) { this.EndsHour = 0; }
  	}

  	decreaseHour(type){
  		type == 'Start' ? this.StartsHour-- : this.EndsHour--
  		if(this.StartsHour == -1) { this.StartsHour = 23; }
  		else if(this.EndsHour == -1) { this.EndsHour = 23; }
  	}

  	changeMinute(type){
  		if(type == 'Start')
  			this.StartsMin == 0 ? this.StartsMin = 30 : this.StartsMin = 0;
  		else
  			this.EndsMin == 0 ? this.EndsMin = 30 : this.EndsMin = 0;  			
  	}

    displayValue(num: number){
        var s = num + "";
        while (s.length < 2) s = "0" + s;
        return s;
    }

  	saveModal(){
	    this.viewCtrl.dismiss();
  	}

  	closeModal() {
	    this.viewCtrl.dismiss();
  	}
 
}
