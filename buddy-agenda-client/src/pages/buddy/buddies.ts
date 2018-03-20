import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Buddy } from '../buddy/buddy';

@Component({
  selector: 'buddies',
  templateUrl: 'buddies.html'
})
export class Buddies {

	Buddies: Array<any>;
  ShowHelp: boolean = false;
  HasNewBuddy: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.Buddies = [
      { Id: 1, Species: 'Cão', Name: 'Fofuxo', Birthdate: '20/02/2000', Gender: 'Macho', Weight: '2,5', Race: 'Poodle', HasEvent: true, Obs: 'Possui problema de fígado', History: [
            {
              title: 'Vacinação', description: 'Fofuxo recebeu vacina antitetanica por motivos tal tal tal e vai receber a medicação lorem ipsum para tomar 5x ao dia, do dia 26/07 ao dia 30/07', date: 1484524800, time: 1484524800
            },
            {  
              title: 'Clínica Geral', description: 'Fofuxo estava coçando muito a orelha e com frequência ao longo do dia. Além disso, estava manhoso e, se fizessemos carinho na orelha dele ele chorava. A Dr. Fabiana o consultou e o diagnosticou com Otite, recomendando que déssemos para ele Otolin durante 5 dias.', date: 1480636800, time: 1480636800
            }
          ] },
      { Id: 2, Species: 'Gato', Name: 'Oliver', Birthdate: '05/07/2015', Gender: 'Macho', Weight: '4', Race: 'Vira-Lata', HasEvent: true, Obs: 'É muito medroso, porém, inofensivo', History: [] }
    ];

    this.HasNewBuddy = navParams.get("hasNewBuddy") ? navParams.get("hasNewBuddy") : false;
      if(this.HasNewBuddy) {
        this.Buddies.push(navParams.get("Buddy"));
      }
    }

  viewBuddy(bd){
    this.navCtrl.push(Buddy, { "Buddy": bd });
  }

  addBuddy(){
    this.navCtrl.push(Buddy);
  }

  toggleHelp(){
    this.ShowHelp = !this.ShowHelp;
  }
}
