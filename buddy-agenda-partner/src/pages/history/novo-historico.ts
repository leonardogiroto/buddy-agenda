import { Component, trigger, state, transition, style, animate } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { History } from '../history/history';

@Component({
  selector: 'novo-historico',
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
  templateUrl: 'novo-historico.html'
})
export class NovoHistorico {

	History: any = { };

  JustSaved: boolean = false;
  JustSavedStr: string;

  	constructor(public navCtrl: NavController, public params: NavParams) {
		  
  	}

  	saveInfo(){
      if(!this.History.title        || this.History.title == ''  ||
         !this.History.date         || this.History.date == ''   ||
         !this.History.description  || this.History.description == ''){
          this.JustSaved = true;
          this.JustSavedStr = 'in';
          setTimeout(function(){
            this.JustSaved = false;
          }.bind(this), 3000);
      } else {
        this.History.date = new Date().getTime() / 1000;
        this.History.time = this.History.date;
        let params = { hasNewHistory: true, history: this.History }
        this.navCtrl.setRoot(History, params);
      }
  	}
}