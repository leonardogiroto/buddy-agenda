import { Component, trigger, state, transition, style, animate } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { History } from '../history/history';
import { Buddies } from '../buddy/buddies';

@Component({
  selector: 'buddy',
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
  templateUrl: 'buddy.html'
})
export class Buddy {

	Buddy: any;
  IsNewBuddy: boolean = false;
  ShowHelp: boolean = false;
  NeedFilling: boolean = false;
  JustSaved: boolean = false;
  JustSavedStr: string;
  HistoryText: string = "Ver Histórico Clínico";

  	constructor(public navCtrl: NavController, public navParams: NavParams) {
  		this.Buddy = navParams.get("Buddy") ? navParams.get("Buddy") : { Species: 'Cão' };
      if(!this.Buddy.Name){
        this.HistoryText = "Criar Histórico Clínico";
        this.IsNewBuddy = true;
      }
  	}

  	setSpecies(Species){
  		this.Buddy.Species = Species;
  	}

    saveInfo(){

      if(this.Buddy == null || !this.Buddy.Name || !this.Buddy.Species || !this.Buddy.Gender ||
        !this.Buddy.Birthdate || !this.Buddy.Weight || !this.Buddy.Race){
        this.NeedFilling = true;
      } else{
        this.JustSaved = true;

        if(this.IsNewBuddy){
          let params = { hasNewBuddy: true, Buddy: this.Buddy }
          this.navCtrl.setRoot(Buddies, params);
        }
      }

      this.JustSavedStr = 'in';
      setTimeout(function(){
        this.NeedFilling = false;
        this.JustSaved = false;
      }.bind(this), 3000);
    }

    toggleHelp(){
      this.ShowHelp = !this.ShowHelp;
    }

    viewHistory(){
      this.navCtrl.push(History, {
          Pet: this.Buddy
        });
    }
}
