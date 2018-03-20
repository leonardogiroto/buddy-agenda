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
      let Pet = {};
      if(petId == 1){
        Pet = { Id: 1, Species: 'Cão', Name: 'Fofuxo', Birthdate: '20/02/2000', Gender: 'Macho', Weight: '2,5', Race: 'Poodle', HasEvent: true, History: [
            {
              title: 'Vacinação', description: 'Fofuxo recebeu vacina antitetanica por motivos tal tal tal e vai receber a medicação lorem ipsum para tomar 5x ao dia, do dia 26/07 ao dia 30/07', date: 1484524800, time: 1484524800
            },
            {  
              title: 'Clínica Geral', description: 'Fofuxo estava coçando muito a orelha e com frequência ao longo do dia. Além disso, estava manhoso e, se fizessemos carinho na orelha dele ele chorava. A Dr. Fabiana o consultou e o diagnosticou com Otite, recomendando que déssemos para ele Otolin durante 5 dias.', date: 1480636800, time: 1480636800
            }
          ] };
      } else{
        Pet = { Id: 2, Species: 'Gato', Name: 'Oliver', Birthdate: '05/07/2015', Gender: 'Macho', Weight: '4', Race: 'Vira-Lata', HasEvent: true, History: [] };
      }

  		this.navCtrl.push(History, {
      		Pet: Pet
    	});
  	}
  
}
