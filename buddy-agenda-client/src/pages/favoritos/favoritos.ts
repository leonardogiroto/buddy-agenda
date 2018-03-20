import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Veterinarios } from '../veterinario/veterinarios';
import { Veterinario } from '../veterinario/veterinario';

@Component({
  selector: 'favoritos',
  templateUrl: 'favoritos.html'
})
export class Favoritos {
	Favorites: any[] = [];
  FilterFields: string[] = ["Name", "Specialty"];
  ShowHelp: boolean = false;

  constructor(public navCtrl: NavController) {
  	this.Favorites = [
      { Id: 3, IsFavorite: false, Gender: 'Dra.', Name: 'Francesca', Specialty: 'Neurologista', Favorites: 11, Icon: 'NeurologistIcon.png', CRMV: '9829.09213-2', Profile: 'Graduação em Medicina Veterinária e Residência em Neurologia Veterinária. Experiência de 10 anos de atuação clínica e cirúrgica.', Price: 100 },
      { Id: 4, IsFavorite: false, Gender: 'Dr.', Name: 'Hélio', Specialty: 'Clínica Geral', Favorites: 9, Icon: 'ClinicalIcon.png', CRMV: '9829.09213-2', Profile: 'Graduação em Medicina Veterinária e Residência em Neurologia Veterinária. Experiência de 10 anos de atuação clínica e cirúrgica.', Price: 100 }
    ];
  }

  goToVets(){
    this.navCtrl.setRoot(Veterinarios);
  }

  viewVet(vet) {
    let viewParams = { "Vet": vet };
    this.navCtrl.push(Veterinario, viewParams);
  }

  toggleHelp(){
    this.ShowHelp = !this.ShowHelp;
  }

}
