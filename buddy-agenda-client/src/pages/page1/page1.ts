import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Veterinarios } from '../veterinario/veterinarios';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController) {
    
  }

  goToDashboard(page) {
    this.navCtrl.setRoot(Veterinarios);
  }

}
