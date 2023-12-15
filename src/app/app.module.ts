import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterClientComponent } from './ajouter-client/ajouter-client.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListClientComponent } from './list-client/list-client.component';
import { HeaderComponent } from './header/header.component';
import { AjouterCommandComponent } from './ajouter-command/ajouter-command.component';
import { ListerCommandComponent } from './lister-command/lister-command.component';

@NgModule({
  declarations: [
    AppComponent,
    AjouterClientComponent,
    ListClientComponent,
    HeaderComponent,
    AjouterCommandComponent,
    ListerCommandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
