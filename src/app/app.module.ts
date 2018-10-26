import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppService } from './app.service';


import { routes } from './routes';
import { ListPacientesComponent } from './paciente/list-pacientes/list-pacientes.component';
import { NewPacienteComponent } from './paciente/new-paciente/new-paciente.component';
import { PacienteService } from './paciente/paciente.service';
import { ShowPacienteComponent } from './paciente/show-paciente/show-paciente.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { EditPacienteComponent } from './paciente/edit-paciente/edit-paciente.component';


@NgModule({
  declarations: [
    AppComponent,
    ListPacientesComponent,
    NewPacienteComponent,
    ShowPacienteComponent,
    EditPacienteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AppService,
    PacienteService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
