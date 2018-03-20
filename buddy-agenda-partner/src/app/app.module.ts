import { NgModule, ErrorHandler, LOCALE_ID } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Dashboard } from '../pages/dashboard/dashboard';
import { DadosCadastrais } from '../pages/cadastro/dados-cadastrais';
import { Consulta } from '../pages/consulta/consulta';
import { Agenda } from '../pages/agenda/agenda';
import { AgendaSingle } from '../pages/agenda/agenda-single';
import { NovoAgendamento } from '../pages/agenda/novo-agendamento';
import { History } from '../pages/history/history';
import { NovoHistorico } from '../pages/history/novo-historico';
import { Pendentes } from '../pages/agenda/pendentes';
import { ModalConsulta } from '../pages/modals/modal-consulta';
import { ModalConfirmar } from '../pages/modals/modal-confirmar';
import { ModalRecusar } from '../pages/modals/modal-recusar';
import { ModalMessage } from '../pages/modals/modal-message';
import { ModalCalendar } from '../pages/modals/modal-calendar';
import { MonthNamePipe } from '../pipes/monthname-pipe';
import { OrderByPipe } from '../pipes/orderbypipe';

import { NgCalendarModule  } from 'ionic2-calendar';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Dashboard,
    DadosCadastrais,
    Consulta,
    ModalConsulta,
    Agenda,
    AgendaSingle,
    NovoAgendamento,
    Pendentes,
    ModalConfirmar,
    ModalRecusar,
    ModalMessage,
    ModalCalendar,
    History,
    NovoHistorico,
    MonthNamePipe,
    OrderByPipe
  ],
  imports: [
    NgCalendarModule,
    TextMaskModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Dashboard,
    DadosCadastrais,
    Consulta,
    ModalConsulta,
    Agenda,
    AgendaSingle,
    NovoAgendamento,
    Pendentes,
    ModalConfirmar,
    ModalRecusar,
    ModalMessage,
    ModalCalendar,
    History,
    NovoHistorico
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, {provide: LOCALE_ID, useValue: 'pt-BR'}]
})
export class AppModule {}
