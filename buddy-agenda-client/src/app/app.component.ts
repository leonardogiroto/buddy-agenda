import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ModalController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Page1 } from '../pages/page1/page1';
import { Veterinarios } from '../pages/veterinario/veterinarios';
import { Favoritos } from '../pages/favoritos/favoritos';
import { DadosCadastrais } from '../pages/cadastro/dados-cadastrais';
import { Buddies } from '../pages/buddy/buddies';
import { Agenda } from '../pages/agenda/agenda';
import { ModalMessage } from '../pages/modals/modal-message';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Page1;

  pages: Array<any>;

  constructor(public platform: Platform, public modalCtrl: ModalController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'VETERINÁRIOS', component: Veterinarios, HasImage: true },
      { title: 'FAVORITOS', component: Favoritos, icon: 'md-heart' },
      { title: 'CADASTRO', component: DadosCadastrais, icon: 'md-person' },
      { title: 'BUDDIES', component: Buddies, icon: 'md-paw' },
      { title: 'AGENDA', component: Agenda, icon: 'md-calendar' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logOut(){

    let modalValues = {
      "Title": "Sair",
      "Message": "Tem certeza que deseja sair do Buddy Agenda?",
      "SubMessage": "Fique tranquilo que suas informações ficarão salvas! ;)"
    }
    let Modal = this.modalCtrl.create(ModalMessage, modalValues);
    Modal.onDidDismiss(data => {
        if(data.Accepted === true)
            this.nav.setRoot(Page1);  
    });
    Modal.present();

  }

}
