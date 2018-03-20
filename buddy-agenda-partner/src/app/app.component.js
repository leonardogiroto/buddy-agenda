var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ModalController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Page1 } from '../pages/page1/page1';
import { Dashboard } from '../pages/dashboard/dashboard';
import { DadosCadastrais } from '../pages/cadastro/dados-cadastrais';
import { Consulta } from '../pages/consulta/consulta';
import { Agenda } from '../pages/agenda/agenda';
import { Pendentes } from '../pages/agenda/pendentes';
import { ModalMessage } from '../pages/modals/modal-message';
var MyApp = (function () {
    function MyApp(platform, modalCtrl) {
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.rootPage = Page1;
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'DASHBOARD', component: Dashboard, icon: 'md-home' },
            { title: 'CADASTRO', component: DadosCadastrais, icon: 'md-person' },
            { title: 'CONSULTA', component: Consulta, HasImage: true },
            { title: 'AGENDA', component: Agenda, icon: 'md-calendar' },
            { title: 'PENDENTES', component: Pendentes, icon: 'md-time' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            Splashscreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logOut = function () {
        var _this = this;
        var modalValues = {
            "Title": "Sair",
            "Message": "Tem certeza que deseja sair do Buddy Agenda?",
            "SubMessage": "Fique tranquilo que suas informações ficarão salvas! ;)"
        };
        var Modal = this.modalCtrl.create(ModalMessage, modalValues);
        Modal.onDidDismiss(function (data) {
            if (data.Accepted === true)
                _this.nav.setRoot(Page1);
        });
        Modal.present();
    };
    return MyApp;
}());
__decorate([
    ViewChild(Nav),
    __metadata("design:type", Nav)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Component({
        templateUrl: 'app.html'
    }),
    __metadata("design:paramtypes", [Platform, ModalController])
], MyApp);
export { MyApp };
//# sourceMappingURL=app.component.js.map