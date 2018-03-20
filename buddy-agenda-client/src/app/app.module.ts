import { NgModule, ErrorHandler, LOCALE_ID } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Veterinarios } from '../pages/veterinario/veterinarios';
import { Veterinario } from '../pages/veterinario/veterinario';
import { Favoritos } from '../pages/favoritos/favoritos';
import { DadosCadastrais } from '../pages/cadastro/dados-cadastrais';
import { Buddies } from '../pages/buddy/buddies';
import { Buddy } from '../pages/buddy/buddy';
import { Consulta } from '../pages/consulta/consulta';
import { Agenda } from '../pages/agenda/agenda';
import { AgendaSingle } from '../pages/agenda/agenda-single';
import { NovoAgendamento } from '../pages/agenda/novo-agendamento';
import { History } from '../pages/history/history';
import { NovoHistorico } from '../pages/history/novo-historico';
import { ModalConsulta } from '../pages/modals/modal-consulta';
import { ModalMessage } from '../pages/modals/modal-message';
import { ModalCalendar } from '../pages/modals/modal-calendar';
import { ModalRecusar } from '../pages/modals/modal-recusar';
import { MonthNamePipe } from '../pipes/monthname-pipe';
import { OrderByPipe } from '../pipes/orderbypipe';
import { FilterPipe } from '../pipes/searchpipe';

import { NgCalendarModule  } from 'ionic2-calendar';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Veterinarios,
    Veterinario,
    Favoritos,
    DadosCadastrais,
    Buddies,
    Buddy,
    Consulta,
    ModalConsulta,
    Agenda,
    AgendaSingle,
    NovoAgendamento,
    ModalMessage,
    ModalCalendar,
    ModalRecusar,
    History,
    NovoHistorico,
    MonthNamePipe,
    OrderByPipe,
    FilterPipe
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
    Veterinarios,
    Veterinario,
    Favoritos,
    DadosCadastrais,
    Buddies,
    Buddy,
    Consulta,
    ModalConsulta,
    Agenda,
    AgendaSingle,
    NovoAgendamento,
    ModalMessage,
    ModalCalendar,
    ModalRecusar,
    History,
    NovoHistorico
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, {provide: LOCALE_ID, useValue: 'pt-BR'}]
})
export class AppModule {}
