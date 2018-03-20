import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { Veterinario } from '../veterinario/veterinario';

@Component({
  selector: 'veterinarios',
  templateUrl: 'veterinarios.html'
})
export class Veterinarios {
  selectedItem: any;
  FilterFields: string[] = ["Name", "Specialty"];
  Specialty: string = "";
  SearchVal: string = "";
  items: Array<{title: string, note: string, icon: string}>;
	Vets: Array<any>;
	today: any = new Date();
  ShowHelp: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.Vets = [
      { Id: 1, IsFavorite: true, Gender: 'Dra.', Name: 'Thamires', Specialty: 'Clínica Geral', Favorites: 15, Icon: 'ClinicalIcon.png', CRMV: '9829.09213-2', Profile: 'Graduação em Medicina Veterinária e Residência em Neurologia Veterinária. Experiência de 10 anos de atuação clínica e cirúrgica.', Price: 100, PaymentMethods: 'Dinheiro, Cheque', Regions: 'Barra da Tijuca e Recreio, Zona Oeste' },
      { Id: 2, IsFavorite: true, Gender: 'Dr.', Name: 'Otávio', Specialty: 'Clínica Geral', Favorites: 12, Icon: 'ClinicalIcon.png', CRMV: '9829.09213-2', Profile: 'Graduação em Medicina Veterinária e Residência em Neurologia Veterinária. Experiência de 10 anos de atuação clínica e cirúrgica.', Price: 100, PaymentMethods: 'Dinheiro, Cheque', Regions: 'Centro e Zona Portuária, Grande Tijuca, Grande Méier' },
      { Id: 3, IsFavorite: false, Gender: 'Dra.', Name: 'Francesca', Specialty: 'Neurologista', Favorites: 11, Icon: 'NeurologistIcon.png', CRMV: '9829.09213-2', Profile: 'Graduação em Medicina Veterinária e Residência em Neurologia Veterinária. Experiência de 10 anos de atuação clínica e cirúrgica.', Price: 100, PaymentMethods: 'Dinheiro, Cheque', Regions: 'Zona Sul' },
      { Id: 4, IsFavorite: false, Gender: 'Dr.', Name: 'Hélio', Specialty: 'Clínica Geral', Favorites: 9, Icon: 'ClinicalIcon.png', CRMV: '9829.09213-2', Profile: 'Graduação em Medicina Veterinária e Residência em Neurologia Veterinária. Experiência de 10 anos de atuação clínica e cirúrgica.', Price: 100, PaymentMethods: 'Dinheiro, Cheque', Regions: 'Jacarepaguá' },
      { Id: 5, IsFavorite: false, Gender: 'Dra.', Name: 'Márcia', Specialty: 'Clínica Geral', Favorites: 5, Icon: 'ClinicalIcon.png', CRMV: '9829.09213-2', Profile: 'Graduação em Medicina Veterinária e Residência em Neurologia Veterinária. Experiência de 10 anos de atuação clínica e cirúrgica.', Price: 100, PaymentMethods: 'Dinheiro, Cheque', Regions: 'Niterói' },
      { Id: 6, IsFavorite: false, Gender: 'Dr.', Name: 'Juliano', Specialty: 'Dermatologista', Favorites: 2, Icon: 'DermatologistIcon.png', CRMV: '9829.09213-2', Price: 100, PaymentMethods: 'Dinheiro, Cheque', Regions: 'Barra da Tijuca e Recreio, Zona Sul' },
      { Id: 7, IsFavorite: false, Gender: 'Dra.', Name: 'Mariana', Specialty: 'Ortopedista', Favorites: 0, Icon: 'OrtopedistIcon.png', CRMV: '9829.09213-2', Profile: 'Graduação em Medicina Veterinária e Residência em Neurologia Veterinária. Experiência de 10 anos de atuação clínica e cirúrgica.', Price: 100, PaymentMethods: 'Dinheiro, Cheque', Regions: 'Barra da Tijuca e Recreio, Grande Tijuca, Grande Meier, Jacarepaguá, Zona Sul' },
      { Id: 8, IsFavorite: false, Gender: 'Dra.', Name: 'Juliana', Specialty: 'Dermatologista', Favorites: 7, Icon: 'DermatologistIcon.png', CRMV: '9829.09213-2', Profile: 'Graduação em Medicina Veterinária e Residência em Neurologia Veterinária. Experiência de 10 anos de atuação clínica e cirúrgica.', Price: 100, PaymentMethods: 'Dinheiro, Cheque', Regions: 'Barra da Tijuca e Recreio, Jacarepaguá' }
    ];
  }

  viewVet(vet) {
    let viewParams = { "Vet": vet };
  	this.navCtrl.push(Veterinario, viewParams);
  }

  toggleHelp(){
    this.ShowHelp = !this.ShowHelp;
  }

}
