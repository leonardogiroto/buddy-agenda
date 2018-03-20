import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'modal-calendar',
  templateUrl: 'modal-calendar.html'
})
export class ModalCalendar {

    viewTitle: string;
    isToday: boolean;
    calendar: any = { };
    isStarting: boolean = true;
    selectedDate: any;

  	constructor(public viewCtrl: ViewController, public navParams: NavParams) {
        this.calendar = {
            mode: 'month',
            currentDate: this.navParams.get('previousDate') ? this.navParams.get('previousDate') : new Date()
        };
  	}

  	closeModal(answer) {
      this.viewCtrl.dismiss();
    }

    defineDate(){
        this.viewCtrl.dismiss(this.selectedDate);
    }

    onViewTitleChanged(title) {
        this.viewTitle = title;
    }

    today() {
        this.calendar.currentDate = new Date();
    }

    onTimeSelected(ev) {
      this.selectedDate = ev.selectedTime;
    }
}
