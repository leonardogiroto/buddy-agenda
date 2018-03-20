import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { Agenda } from '../agenda/agenda';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.html'
})
export class Dashboard {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
	Appointments: Array<any>;
	today: any = new Date();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.Appointments = [
      { id: 1, title: 'Vacinação', owner: 'Lara Rodrigues', pet: 'Fofuxo', day: new Date().getTime(), time: '16:00', species: 'Cão', race: 'Poodle', gender: 'Macho', age: '10 anos e 6 meses', weight: '2,5kg', spayed: false, address: 'Rua Timóteo da Costa, 200', address2: 'Bloco 01 Apartamento 504', neighborhood: 'Leblon', obs: 'Realizou operação recentemente para retirada de tumor', phone: '(21) 99531-9869', brief: 'Aplicação de nova dose de vacina contra a raiva ' },
      { id: 2, title: 'Clínica Geral', owner: 'João Vicente', pet: 'Oliver', day: new Date().getTime(), time: '11:00', species: 'Gato', race: 'Vira-Lata', gender: 'Macho', age: '2 anos e 4 meses', weight: '3,8kg', spayed: true, obs: 'É muito medroso, porém, não é agressivo', address: 'Rua Marquês de São Vicente, 50', address2: 'Bloco 01 Apartamento 302', neighborhood: 'Gávea', phone: '(21) 99595-7897', brief: 'Está apresentando comportamento atípico, se recusa a comer a comida dele, só come muito pouco quando damos na boca. Está emagrecendo por conta disso e está criando manias peculiares.' }
    ];
  }

  viewAppointment(ap) {
  	this.navCtrl.push(Agenda);
  }
}
