import { Component, trigger, state, transition, style, animate } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { NovoHistorico } from '../history/novo-historico';

@Component({
  selector: 'history',
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
  templateUrl: 'history.html'
})
export class History {

  private petId: number;
	Pet: any;
  HasNewHistory: boolean = false;

  JustSaved: boolean = false;
  JustSavedStr: string;

  	constructor(public navCtrl: NavController, public navParams: NavParams) {

      this.petId = navParams.get("petId");
      if(this.petId > 1){
        this.Pet = {
          petId: 1, name: 'Oliver', race: 'Gato',
          history: []
        };
      } else{
        this.Pet = {
          petId: 1, name: 'Fofuxo', race: 'Cão',
          history: [
            {
              title: 'Vacinação', description: 'Fofuxo recebeu vacina antitetanica por motivos tal tal tal e vai receber a medicação lorem ipsum para tomar 5x ao dia, do dia 26/07 ao dia 30/07', date: 1484524800, time: 1484524800
            },
            {  
              title: 'Clínica Geral', description: 'Fofuxo estava coçando muito a orelha e com frequência ao longo do dia. Além disso, estava manhoso e, se fizessemos carinho na orelha dele ele chorava. A Dr. Fabiana o consultou e o diagnosticou com Otite, recomendando que déssemos para ele Otolin durante 5 dias.', date: 1480636800, time: 1480636800
            }
          ]
        };
      }

      this.HasNewHistory = navParams.get("hasNewHistory") ? navParams.get("hasNewHistory") : false;
      if(this.HasNewHistory) {
          this.JustSaved = true;
          this.JustSavedStr = 'in';
          setTimeout(function(){
              this.JustSaved = false;
          }.bind(this), 3000);
          this.Pet.history.push(navParams.get("history"));
      }
      
  	}

    newAppointment(){
      this.navCtrl.push(NovoHistorico, {
            pet: this.Pet
        });
    }
}
