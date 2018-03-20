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

	Pet: any;
  HasNewHistory: boolean = false;

  JustSaved: boolean = false;
  JustSavedStr: string;

  	constructor(public navCtrl: NavController, public navParams: NavParams) {

      this.Pet = navParams.get("Pet");

      if(!this.Pet.Name) { this.Pet.Name = "Buddy" }
      
      this.HasNewHistory = navParams.get("hasNewHistory") ? navParams.get("hasNewHistory") : false;
      if(this.HasNewHistory) {
          this.JustSaved = true;
          this.JustSavedStr = 'in';
          setTimeout(function(){
              this.JustSaved = false;
          }.bind(this), 3000);
          this.Pet.History.push(navParams.get("history"));
      }
      
  	}

    newAppointment(){
      this.navCtrl.push(NovoHistorico, {
            Pet: this.Pet
        });
    }
}
