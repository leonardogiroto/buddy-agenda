import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { ModalCalendar } from '../modals/modal-calendar';
import { ModalConsulta } from '../modals/modal-consulta';

@Component({
  selector: 'veterinario',
  templateUrl: 'veterinario.html'
})
export class Veterinario {
	Vet: any;
  SearchDate: any = new Date();
  Today: any = this.SearchDate;
  Timetable: Array<any> = [];
  ShowHelp: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  	this.Vet = navParams.get("Vet");
    this.getDayTimetable();
  }

  toggleFavorite(){
    this.Vet.IsFavorite = !this.Vet.IsFavorite;
  }

  getDayTimetable(){
    if(this.SearchDate.getDay()%3 == 0)
      this.Timetable = ['08:00', '09:00', '10:00', '18:00', '20:00'];
    else if(this.SearchDate.getDay()%2 == 0)
      this.Timetable = ['16:00', '17:00', '19:00', '20:00'];
    else
      this.Timetable = [];
  }

  openCalendar(){
    let ModalValues = { previousDate: this.SearchDate };
    let CalendarModal = this.modalCtrl.create(ModalCalendar, ModalValues);
    CalendarModal.onDidDismiss(data => {
        if(data) { this.SearchDate = data; }
        this.getDayTimetable();
    });
    CalendarModal.present();
  }

  previousDay(){
    let yesterday = new Date(this.SearchDate);
    yesterday.setDate(this.SearchDate.getDate()-1);
    this.SearchDate = yesterday;
    this.getDayTimetable();
  }

  nextDay(){
    let tomorrow = new Date(this.SearchDate);
    tomorrow.setDate(this.SearchDate.getDate()+1);
    this.SearchDate = tomorrow;
    this.getDayTimetable();
  }

  newSchedule(tt){
    let ModalValues = { Date: this.SearchDate, Time: tt, Doctor: this.Vet.Gender + ' ' + this.Vet.Name };
    let ScheduleModal = this.modalCtrl.create(ModalConsulta, ModalValues);
    ScheduleModal.onDidDismiss(data => {
        //if(data) { this.SearchDate = data; }
    });
    ScheduleModal.present();
  }

  toggleHelp(){
    this.ShowHelp = !this.ShowHelp;
  }

}
