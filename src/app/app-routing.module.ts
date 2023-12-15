import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AjouterClientComponent} from "./ajouter-client/ajouter-client.component";
import {ListClientComponent} from "./list-client/list-client.component";
import {ListerCommandComponent} from "./lister-command/lister-command.component";
import {AjouterCommandComponent} from "./ajouter-command/ajouter-command.component";

const routes: Routes = [
  {path:"AjouterClient",component: AjouterClientComponent},
  {path:"ListerClient",component: ListClientComponent},
  {path:"ListerCommand",component:ListerCommandComponent},
  {path:"AjouterCommand",component:AjouterCommandComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
