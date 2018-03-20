import { Component, trigger, state, transition, style, animate } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { ModalMessage } from '../modals/modal-message';

@Component({
  selector: 'dados-cadastrais',
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
  templateUrl: 'dados-cadastrais.html'
})
export class DadosCadastrais {

	Owner: any;
  ShowHelp: boolean = false;
  JustSaved: boolean = false;
  SendMail: boolean = false;
  JustSavedStr: string;

  	constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    	this.Owner = {
    		name: "Leonardo Soares Giroto",
        email: "exemplo@email.com.br",
    		CEP: "22622-212",
    		address: "Rua dos Bobos, nº 0. Bloco 01, Apartamento 101, Condomínio Muito Engraçado."
    	};
  	}

    saveInfo(){
      this.JustSaved = true;
      this.JustSavedStr = 'in';
      setTimeout(function(){
        this.JustSaved = false;
      }.bind(this), 3000);
    }

    openPasswordChange(){
      let modalValues = {
        "Title": "Senha",
        "Message": "Tem certeza que deseja alterar sua senha?",
        "SubMessage": "Um e-mail será encaminhado para que você faça a alteração."
      }
      let Modal = this.modalCtrl.create(ModalMessage, modalValues);
      // TO DO: VERIFICAR QUE ELE NÃO CLIQUE 500X PARA MANDAR O E-MAIL
      Modal.onDidDismiss(data => {
          if(data.Accepted === true){
            this.SendMail = true;
            this.JustSavedStr = 'in';
            setTimeout(function(){
              this.SendMail = false;
            }.bind(this), 3000);
          }
      });
      Modal.present();
    }

    toggleHelp(){
      this.ShowHelp = !this.ShowHelp;
    }
  
}
