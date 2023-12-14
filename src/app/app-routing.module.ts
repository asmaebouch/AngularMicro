import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AjouterClientComponent} from "./ajouter-client/ajouter-client.component";
import {ListClientComponent} from "./list-client/list-client.component";

const routes: Routes = [
  {path:"AjouterClient",component: AjouterClientComponent},
  {path:"ListerClient",component: ListClientComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
