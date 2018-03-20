var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
var History = (function () {
    function History(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.petId = navParams.get("petId");
        if (this.petId > 1) {
            this.Pet = {
                petId: 1, name: 'Oliver', race: 'Gato',
                history: []
            };
        }
        else {
            this.Pet = {
                petId: 1, name: 'Fofuxo', race: 'Cão',
                history: [
                    {
                        title: 'Vacinação', description: 'Fofuxo recebeu vacina antitetanica por motivos tal tal tal e vai receber a medicação lorem ipsum para tomar 5x ao dia, do dia 26/07 ao dia 30/07', date: 1484524800
                    },
                    {
                        title: 'Clínica Geral', description: 'Fofuxo estava coçando muito a orelha e com frequência ao longo do dia. Além disso, estava manhoso e, se fizessemos carinho na orelha dele ele chorava. A Dr. Fabiana o consultou e o diagnosticou com Otite, recomendando que déssemos para ele Otolin durante 5 dias.', date: 1480636800
                    }
                ]
            };
        }
    }
    return History;
}());
History = __decorate([
    Component({
        selector: 'history',
        templateUrl: 'history.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams])
], History);
export { History };
//# sourceMappingURL=history.js.map